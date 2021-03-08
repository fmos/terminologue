const sqlite=require("better-sqlite3");

function openDB(input, configs){
  var db=new sqlite(input, {fileMustExist: true});
  //Read the termbase configs:
  var sqlSelectConfigs=db.prepare("select * from configs");
  sqlSelectConfigs.all().map(row => {
    configs[row.id]=JSON.parse(row.json);
  });
  return db;
}

function saveEntry(db, configs, entry){
  //insert the entry:
  var insEntry=db.prepare("insert into entries(json, cStatus, pStatus, dStatus, dateStamp, tod) values(?, ?, ?, ?, ?, ?)");
  var insEntryInfo=insEntry.run(JSON.stringify(entry), entry.cStatus, entry.pStatus, entry.dStatus, entry.dateStamp, entry.tod);
  var entryID=insEntryInfo.lastInsertRowid;
  //for each desig:
  entry.desigs.map(desig => {
    addLanguage(db, configs, desig.term.lang);
    addTerm(db, configs, entryID, desig);
  });
  //insert sortkeys:
  configs.lingo.languages.map(lang => {
    if(lang.role=="major"){
      var str="";
      entry.desigs.map(desig => { if(desig.term.lang==lang.abbr) str+=desig.term.wording; });
      var abc=configs.abc[lang.abbr] || defaultAbc;
      var sortkey=toSortkey(str, abc);
      var insSortkey=db.prepare("insert into entry_sortkey(entry_id, lang, key) values(?, ?, ?)");
      insSortkey.run(entryID, lang.abbr, sortkey);
    }
  });
  //resave the entry:
  var updEntry=db.prepare('update entries set json=? where id=?');
  updEntry.run(JSON.stringify(entry), entryID);
}

function addLanguage(db, configs, langCode){
  //does this language exist in the termbase?
  var alreadyHas=false;
  configs.lingo.languages.map(lang => {
    if(lang.abbr==langCode) alreadyHas=true;
  });
  //if not, create it:
  if(!alreadyHas){
    configs.lingo.languages.push({
      "role": "major",
      "abbr": langCode,
      "title": {$: langCode}
    });
    var updLingo=db.prepare("update configs set json=? where id=?");
    updLingo.run(JSON.stringify(configs.lingo), "lingo");
  }
}
function addTerm(db, configs, entryID, desig){
  //insert the term:
  var insTerm=db.prepare("insert into terms(json, lang, wording) values(?, ?, ?)");
  var insTermInfo=insTerm.run(JSON.stringify(desig.term), desig.term.lang, desig.term.wording);
  var termID=insTermInfo.lastInsertRowid;
  desig.term.id=termID.toString();
  //insert the entry-term connection:
  var insEntryTerm=db.prepare("insert into entry_term(entry_id, term_id, accept, clarif) values(?, ?, ?, ?)");
  insEntryTerm.run(entryID, termID, desig.accept, desig.clarif);
  //insert words:
  var insWord=db.prepare("insert into words(term_id, word, implicit) values(?, ?, ?)");
  wordSplit(desig.term.wording).map(word => { insWord.run(termID, word, 0); });
  //insert spelling:
  var spellindex=getSpellindex(desig.term.wording);
  var insSpelling=db.prepare("insert into spelling(term_id, wording, length, a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) values(@termID, @wording, @length, @a,@b,@c,@d,@e,@f,@g,@h,@i,@j,@k,@l,@m,@n,@o,@p,@q,@r,@s,@t,@u,@v,@w,@x,@y,@z)");
  var parSpelling={termID: termID, wording: desig.term.wording, length: desig.term.wording.length};
  for(var key in spellindex) parSpelling[key]=spellindex[key];
  insSpelling.run(parSpelling);
}

function wordSplit(wording){
  var words=[]; wording.split(/[\s\.\,\(\)\[\]\{\}\'\-0-9]/).map(w => { if(w) words.push(w); });
  return words;
}
function getSpellindex(wording){
  var ret={a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0};
  var chars={
    a: "aáàâäăāãåąæ",
    b: "b",
    c: "cćċĉčç",
    d: "dďđ",
    e: "eéèėêëěēęæœ",
    f: "f",
    g: "gġĝğģ",
    h: "hĥħ",
    i: "iıíìİîïīį",
    j: "jĵ",
    k: "kĸķ",
    l: "lĺŀľļł",
    m: "m",
    n: "nńňñņ",
    o: "oóòôöōõőøœ",
    p: "p",
    q: "q",
    r: "rŕřŗ",
    s: "sśŝšşșß",
    t: "tťţț",
    u: "uúùûüŭūůųű",
    v: "v",
    w: "wẃẁŵẅ",
    x: "x",
    y: "yýỳŷÿ",
    z: "zźżž"
  };
  wording=wording.toLowerCase();
  for(var i=0; i<wording.length; i++){
    var c=wording[i];
    for(var key in chars){
      if(chars[key].indexOf(c)>-1) ret[key]++;
    }
  }
  return ret;
}
function toSortkey(s, abc){
  const keylength=5;
  var ret=s.replace(/\<[\<\>]+>/g, "").toLowerCase();
  //replace any numerals:
  var pat=new RegExp("[0-9]{1,"+keylength+"}", "g");
  ret=ret.replace(pat, function(x){while(x.length<keylength+1) x="0"+x; return x;});
  //prepare characters:
  var chars=[];
  var count=0;
  for(var pos=0; pos<abc.length; pos++){
    var key=(count++).toString(); while(key.length<keylength) key="0"+key; key="_"+key;
    for(var i=0; i<abc[pos].length; i++){
      if(i>0) count++;
      chars.push({char: abc[pos][i], key: key});
    }
  }
  chars.sort(function(a,b){ if(a.char.length>b.char.length) return -1; if(a.char.length<b.char.length) return 1; return 0; });
  //replace characters:
  for(var i=0; i<chars.length; i++){
    if(!/^[0-9]$/.test(chars[i].char)) { //skip chars that are actually numbers
      while(ret.indexOf(chars[i].char)>-1) ret=ret.replace(chars[i].char, chars[i].key);
    }
  }
  //remove any remaining characters that aren't a number or an underscore:
  ret=ret.replace(/[^0-9_]/g, "");
  return ret;
}
const defaultAbc=[
  ["a", "á", "à", "â", "ä", "ă", "ā", "ã", "å", "ą", "æ"],
  ["b"],
  ["c", "ć", "ċ", "ĉ", "č", "ç"],
  ["d", "ď", "đ"],
  ["e", "é", "è", "ė", "ê", "ë", "ě", "ē", "ę"],
  ["f"],
  ["g", "ġ", "ĝ", "ğ", "ģ"],
  ["h", "ĥ", "ħ"],
  ["i", "ı", "í", "ì", "i", "î", "ï", "ī", "į"],
  ["j", "ĵ"],
  ["k", "ĸ", "ķ"],
  ["l", "ĺ", "ŀ", "ľ", "ļ", "ł"],
  ["m"],
  ["n", "ń", "ň", "ñ", "ņ"],
  ["o", "ó", "ò", "ô", "ö", "ō", "õ", "ő", "ø", "œ"],
  ["p"],
  ["q"],
  ["r", "ŕ", "ř", "ŗ"],
  ["s", "ś", "ŝ", "š", "ş", "ș", "ß"],
  ["t", "ť", "ţ", "ț"],
  ["u", "ú", "ù", "û", "ü", "ŭ", "ū", "ů", "ų", "ű"],
  ["v"],
  ["w", "ẃ", "ẁ", "ŵ", "ẅ"],
  ["x"],
  ["y", "ý", "ỳ", "ŷ", "ÿ"],
  ["z", "ź", "ż", "ž"]
];

module.exports.openDB=openDB;
module.exports.saveEntry=saveEntry;