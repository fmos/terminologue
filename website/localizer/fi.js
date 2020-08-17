function L(s, gloss){
  if(s=="only") return function(s){
    return "Vain "+s;
  };
  if(s=="READ-ONLY") return "VAIN LUKU";
  if(s=="Editing") return "Muokkaus";
  if(s=="Dublin City University") return "Dublin City University";
  if(s=="Log out") return "Kirjaudu ulos";
  if(s=="Change your password") return "Vaihda salasana";
  if(s=="Registered user login") return "Rekisteröity käyttäjän kirjautuminen";
  if(s=="Get an account") return "Luo käyttäjätili";
  if(s=="Forgot your password?") return "Unohditko salasanasi?";
  if(s=="E-mail address") return "Sähköpostiosoite";
  if(s=="Password") return "Salasana";
  if(s=="Log in") return "Kirjaudu sisään";
  if(s=="Your termbases") return "Termitietokantasi";
  if(s=="You have no termbases yet.") return "Sinulla ei ole vielä termitietokantoja";
  if(s=="Create a termbase") return "Luo termitietokanta";
  if(s=="Administration") return "Ylläpito";
  if(s=="Users") return "Käyttäjät";
  if(s=="Termbases") return "Termitietokannat";
  if(s=="smart search") return "älykäs haku";
  if(s=="complete term") return "koko termi";
  if(s=="start of term") return "termin alku";
  if(s=="end of term") return "termin loppu";
  if(s=="any part of term") return "termin osa";
  if(s=="any part except start or end") return "termin osa, ei alku eikä loppu";
  if(s=="search in all languages") return "etsi kaikissa kielissä";
  if(s=="Configuration") return "Asetukset";
  if(s=="ADMIN") return "ADMIN";
  if(s=="TRM") return "TRM";
  if(s=="DOM") return "DOM";
  if(s=="DEF") return "DEF";
  if(s=="XMPL") return "XMPL";
  if(s=="CHECKING STATUS") return "TARKISTUSSTATUS";
  if(s=="PUBLISHING STATUS") return "JULKAISUSTATUS";
  if(s=="TERMS") return "TERMIT";
  if(s=="DOMAINS") return "AIHEALUEET";
  if(s=="term") return "termi";
  if(s=="clarification") return "selvennys";
  if(s=="acceptability") return "hyväksyttävyys";
  if(s=="source") return "lähde";
  if(s=="inflected form") return "taivutettu muoto";
  if(s=="annotation") return "huomautus";
  if(s=="domain") return "aihealue";
  if(s=="part of speech") return "sanaluokka";
  if(s=="inflection") return "taivutus";
  if(s=="language of origin") return "alkuperäkieli";
  if(s=="symbol") return "symboli";
  if(s=="trademark") return "tavaramerkki";
  if(s=="registered trademark") return "rekisteröity tavaramerkki";
  if(s=="proper noun") return "erisnimi";
  if(s=="formatting") return "muotoilu";
  if(s=="italic") return "kursiivi";
  if(s=="Created") return "Luotu";
  if(s=="Changed") return "Muutettu";
  if(s=="Deleted") return "Poistettu";
  if(s=="Bulk-deleted") return "Poistettu joukko";
  if(s=="while uploading") return "ladattaessa";
  if(s=="By") return "Tekijä";
  if(s=="When") return "Aika";
  if(s=="any checking status") return "mikä tahansa tarkistusstatus";
  if(s=="any publishing status") return "mikä tahansa julkaisustatus";
  if(s=="any language") return "mikä tahansa kieli";
  if(s=="any acceptabilty or no acceptability") return "mikä tahansa hyväksyttävyys tai ei hyväksyttävyyttä";
  if(s=="any acceptabilty") return "mikä tahansa hyväksyttävyys";
  if(s=="no acceptability") return "ei hyväksyttävyyttä";
  if(s=="any domain or no domain") return "mikä tahansa aihealue tai ei aihealuetta";
  if(s=="any domain") return "mikä tahansa aihealue";
  if(s=="no domain") return "ei aihealuetta";
  if(s=="LAST MAJOR UPDATE") return "VIIMEISIN TÄRKEÄ PÄIVITYS";
  if(s=="set to today") return "aseta tähän päivään";
  if(s=="Invalid e-mail address or password.") return "Virheellinen sähköpostiosoite tai salasana";
  if(s=="INTR") return "INTR";
  if(s=="COLL") return "COLL";
  if(s=="INTROS") return "INTROS";
  if(s=="DEFINITIONS") return "MÄÄRITELMÄT";
  if(s=="EXAMPLES") return "ESIMERKIT";
  if(s=="COLLECTIONS") return "KOKOELMAT";
  if(s=="definition") return "määritelmä";
  if(s=="example") return "esimerkki";
  if(s=="sentence") return "virke";
  if(s=="collection") return "kokoelma";
  if(s=="any collection or no collection") return "mikä tahansa kokoelma tai ei kokoelmaa";
  if(s=="any collection") return "mikä tahansa kokoelma";
  if(s=="no collection") return "ei kokoelmaa";
  if(s=="comments") return "kommentit";
  if(s=="with or without comments") return "kommenteilla tai ilman";
  if(s=="with comments") return "kommenteilla";
  if(s=="without comments") return "ilman kommentteja";
  if(s=="my comments") return "kommenttini";
  if(s=="with or without my comments") return "kommenteillani tai ilman";
  if(s=="with my comments") return "kommenteillani";
  if(s=="without my comments") return "ilman kommenttejani";
  if(s=="other people's comments") return "toisten kommentit";
  if(s=="with or without other people's comments") return "toisten kommenteilla tai ilman";
  if(s=="with other people's comments") return "toisten kommenteilla";
  if(s=="without other people's comments") return "ilman toisen kommentteja";
  if(s=="EXTRANET") return "EKSTRANETTI";
  if(s=="EXT") return "EXT";
  if(s=="EXTRANETS") return "EKSTRANETIT";
  if(s=="extranet") return "ekstranetti";
  if(s=="any extranet or no extranet") return "mikä tahansa ekstranetti tai ei ekstranettiä";
  if(s=="any extranet") return "mikä tahansa ekstranetti";
  if(s=="no extranet") return "ei ekstranettiä";
  if(s=="sorting language") return "lajittelukieli";
  if(s=="Create mutual cross-references") return "Luo yhteisiä ristiviittauksia";
  if(s=="Remove mutual cross-references") return "Poista yhteiset ristiviittaukset";
  if(s=="Merge into a single entry") return "Yhdistä yhdeksi termitietueeksi";
  if(s=="SEE ALSO") return "KATSO MYÖS";
  if(s=="add to worklist") return "lisää tehtävälistaan";
  if(s=="Domains") return "Aihealueet";
  if(s=="Part-of-speech labels") return "Sanaluokkamerkinnät";
  if(s=="Inflection labels") return "Taivutusmerkinnät";
  if(s=="Acceptability labels") return "Hyväksyttävyysmerkinnät";
  if(s=="Sources") return "Lähteet";
  if(s=="Collections") return "Kokoelmat";
  if(s=="Tags") return "Tunnisteet";
  if(s=="Extranets") return "Ekstranetit";
  if(s=="Name and blurb") return "Nimi ja esittely";
  if(s=="Features") return "Piirteet";
  if(s=="Languages") return "Kielet";
  if(s=="Publishing") return "Julkaisu";
  if(s=="Change the termbase's URL") return "Vaihda termitietokannan URL-osoitetta";
  if(s=="Delete the termbase") return "Poista termitietokanta";
  if(s=="TITLE") return "OTSIKKO";
  if(s=="abbreviation") return "lyhenne";
  if(s=="LANGUAGES") return "KIELET";
  if(s=="select all") return "valitse kaikki";
  if(s=="unselect all") return "poista valinnat";
  if(s=="PRIORITY") return "TÄRKEYS";
  if(s=="high") return "korkea";
  if(s=="medium") return "keskisuuri";
  if(s=="low") return "matala";
  if(s=="USERS") return "KÄYTTÄJÄT";
  if(s=="e-mail address") return "sähköpostiosoite";
  if(s=="user") return "käyttäjä";
  if(s=="Alphabetical order") return "Aakkosjärjestys";
  if(s=="Similar terms (click to insert)") return "Samanlaiset termit (klikkaa lisätäksesi)";
  if(s=="Other entries that share this term") return "Muut tietueet, joissa termi esiintyy";
  if(s=="stop sharing") return "lopeta jakaminen";
  if(s=="Change checking status to") return "Vaihda tarkistusstatukseksi";
  if(s=="Change publishing status to") return "Vaihda julkaisustatukseksi";
  if(s=="Add to extranet") return "Lisää ekstranettiin";
  if(s=="Remove from extranet") return "Poista ekstranetistä";
  if(s=="checked") return "tarkistettu";
  if(s=="not checked") return "ei tarkistettu";
  if(s=="publishable") return "julkaisukelpoinen";
  if(s=="hidden") return "piilotettu";
  if(s=="CHECKED") return "TARKUSTETTU";
  if(s=="NOT CHECKED") return "EI TARKISTETTU";
  if(s=="PUBLISHABLE") return "JULKAISUKELPOINEN";
  if(s=="HIDDEN") return "PIILOTETTU";
  if(s=="non-essential") return "epäolennainen";
  if(s=="STATUS") return "STATUS";
  if(s=="live") return "aktivoitu";
  if(s=="not live") return "ei aktivoitu";
  if(s=="any clarification or no clarification") return "mikä tahansa selvennys tai ei selvennystä";
  if(s=="any clarification") return "mikä tahansa selvennys";
  if(s=="no clarification") return "ei selvennystä";
  if(s=="clarification containing...") return "selvennys sisältäen...";
  if(s=="any intro or no intro") return "mikä tahansa intro tai ei introa";
  if(s=="any intro") return "mikä tahansa intro";
  if(s=="no intro") return "ei introa";
  if(s=="intro containing...") return "intro sisältäen...";
  if(s=="any definition or no definition") return "mikä tahansa määritelmä tai ei määritelmää";
  if(s=="any definition") return "mikä tahansa määritelmä";
  if(s=="no definition") return "ei määritelmää";
  if(s=="definition containing...") return "määritelmä sisältäen...";
  if(s=="any example or no example") return "mikä tahansa esimerkki tai ei esimerkkiä";
  if(s=="any example") return "mikä tahansa esimerkki";
  if(s=="no example") return "ei esimerkkiä";
  if(s=="example containing...") return "esimerkki sisältäen...";
  if(s=="Automatic changes") return "Automaattiset muutokset";
  if(s=="NAME") return "NIMI";
  if(s=="BLURB") return "ESITTELY";
  if(s=="level") return "rooli";
  if(s=="reader") return "lukija";
  if(s=="editor") return "muokkaaja";
  if(s=="creator") return "luoja";
  if(s=="administrator") return "ylläpitäjä";
  if(s=="configurator") return "kokoonpanija";
  if(s=="no change") return "ei muutosta";
  if(s=="change to 'not checked'") return "muuta statukseksi ‘ei tarkistettu’";
  if(s=="change to 'hidden'") return "muuta statukseksi ‘piilotettu’";
  if(s=="change to 'not checked' and 'hidden'") return "muuta statukseksi ‘ei tarkistettu’ ja ‘piilotettu’";
  if(s=="LAST SEEN") return "VIIMEKSI NÄHTY";
  if(s=="NEVER") return "EI KOSKAAN";
  if(s=="No termbases") return "Ei termitietokantoja";
  if(s=="language") return "kieli";
  if(s=="major") return "ensisijainen";
  if(s=="minor") return "toissijainen";
  if(s=="role") return "rooli";
  if(s=="title") return "otsikko";
  if(s=="ACCESS LEVEL") return "PÄÄSYTASO";
  if(s=="LICENCE") return "LISENSSI";
  if(s=="private") return "yksityinen";
  if(s=="public") return "julkinen";
  if(s=="trigger_dateStampChange") return "päivämäärä vaihdettu";
  if(s=="trigger_domainAdd") return "aihealue lisätty";
  if(s=="trigger_domainRemove") return "aihealue poistettu";
  if(s=="trigger_domainReorder") return "aihealueet järjestetty";
  if(s=="trigger_domainChange") return "aihealue vaihdettu";
  if(s=="trigger_desigAdd") return "termi lisätty";
  if(s=="trigger_desigRemove") return "termi poistettu";
  if(s=="trigger_desigReorder") return "termit järjestetty";
  if(s=="trigger_desigClarifChange") return "selvennys vaihdettu";
  if(s=="trigger_desigAcceptChange") return "hyväksyttävyys vaihdettu";
  if(s=="trigger_termLangChange") return "termin kieli vaihdettu";
  if(s=="trigger_termWordingChange") return "termin sanoitus vaihdettu";
  if(s=="trigger_termInflectAdd") return "taivutusmuoto lisätty";
  if(s=="trigger_termInflectRemove") return "taivutusmuoto poistettu";
  if(s=="trigger_termInflectReorder") return "taivutusmuodot järjestetty";
  if(s=="trigger_termInflectLabelChange") return "taivutusmuotomerkintä vaihdettu";
  if(s=="trigger_termInflectTextChange") return "taivutusmuodon sanoitus vaihdettu";
  if(s=="trigger_termAnnotAdd") return "huomautus lisätty";
  if(s=="trigger_termAnnotRemove") return "huomautus poistettu";
  if(s=="trigger_termAnnotReorder") return "huomautukset järjestetty";
  if(s=="trigger_termAnnotPositionChange") return "huomautuksen paikka muutettu";
  if(s=="trigger_termAnnotLabelChange") return "huomautuksen merkintä muutettu";
  if(s=="trigger_introChange") return "intro muutettu";
  if(s=="trigger_definitionAdd") return "määritelmä lisätty";
  if(s=="trigger_definitionRemove") return "määritelmä poistettu";
  if(s=="trigger_definitionReorder") return "määritelmät järjestetty";
  if(s=="trigger_definitionTextChange") return "määritelmän teksti muutettu";
  if(s=="trigger_exampleAdd") return "esimerkki lisätty";
  if(s=="trigger_exampleRemove") return "esimerkki poistettu";
  if(s=="trigger_exampleReorder") return "esimerkit järjestetty";
  if(s=="trigger_exampleTextAdd") return "esimerkkivirke lisätty";
  if(s=="trigger_exampleTextRemove") return "esimerkkivirke poistettu";
  if(s=="trigger_exampleTextReorder") return "esimerkkivirkkeet järjestetty";
  if(s=="trigger_exampleTextChange") return "esimerkkivirkkeen sanoitus muutettu";
  if(s=="trigger_collectionAdd") return "kokoelma lisätty";
  if(s=="trigger_collectionRemove") return "kokoelma poistettu";
  if(s=="trigger_collectionReorder") return "kokoelmat järjestetty";
  if(s=="trigger_collectionChange") return "kokoelma muutettu";
  if(s=="trigger_extranetAdd") return "ekstranetti lisätty";
  if(s=="trigger_extranetRemove") return "ekstranetti poistettu";
  if(s=="trigger_extranetReorder") return "ekstranetit järjestetty";
  if(s=="trigger_extranetChange") return "ekstranetti muutettu";
  if(s=="trigger_sourceAdd") return "lähde lisätty";
  if(s=="trigger_sourceRemove") return "lähde poistettu";
  if(s=="trigger_sourceReorder") return "lähteet järjestetty";
  if(s=="trigger_sourceChange") return "lähde muutettu";
  if(s=="trigger_nonessentialChange") return "epäolennaisuus vaihdettu";
  if(s=="(blank)") return "(tyhjä)";
  if(s=="Simple Multilingual Termbase") return "Yksinkertainen monikielinen termitietokanta";
  if(s=="Simple Bilingual Termbase") return "Yksinkertainen kaksikielinen termitietokanta";
  if(s=="Simple Monolingual Termbase") return "Yksinkertainen yksikielinen termitietokanta";
  if(s=="Enter a human-readable title such as \"My Dictionary of Sports Terms\". You will be able to change this later.") return "Lisää luettava otsikko, esim. \"Urheilusanasto\". Voit muuttaa sitä myöhemmin.";
  if(s=="This will be your termbase's address on the web. You will be able to change this later.") return "Tämä tulee olemaan tietokantasi nettiosoite. Voit muuttaa sitä myöhemmin.";
  if(s=="You can choose a template here to start you off. Each template comes with a few sample entries. You will be able to change or delete those and to customize the template.") return "Tästä voit valita mallin päästäksesi alkuun. Jokainen malli sisältää muutaman esimerkkitietueen. Voit muokata tai poistaa esimerkkitietueet ja tehdä muutoksia malliin.";
  if(s=="Your termbase is ready.") return "Termitietokantasi on valmis.";
  if(s=="TERM OF THE DAY") return "PÄIVÄN TERMI";
  if(s=="set to next available date") return "aseta seuraavaan vapaaseen päivään";
  if(s=="Display from") return "Aloituspäivä";
  if(s=="Display until") return "Lopetuspäivä";
  if(s=="News and announcements") return "Uutiset ja ilmoitukset";
  if(s=="Create your account") return "Luo käyttäjätili";
  if(s=="Reset your password") return "Nollaa salasanasi";
  if(s=="Terminologue signup") return "Terminologue-käyttäjätilin luominen";
  if(s=="Please follow the link below to create your Terminologue account:") return "Alla olevasta linkistä pääset luomaan Terminologue-käyttäjätilisi:";
  if(s=="Terminologue password reset") return "Terminologue-salasanan nollaus";
  if(s=="Please follow the link below to reset your Terminologue password:") return "Alla olevasta linkistä pääset nollaamaan Terminologue-salasanasi";
  if(s=="This page is only available in English.") return "Tämä sivu on saatavilla vain englanniksi.";
  if(s=="DRAFTING STATUS") return "LUONNOSSTATUS";
  if(s=="draft entry") return "luonnostietue";
  if(s=="finished entry") return "valmis tietue";
  if(s=="DRAFT") return "LUONNOS";
  if(s=="FINISHED") return "VALMIS";
  if(s=="any drafting status") return "mikä tahansa luonnosstatus";
  if(s=="Prefabricated comments") return "Valmiit kommentit";
  if(s=="NOTES") return "MUISTIINPANOT";
  if(s=="note") return "muistiinpano";
  if(s=="NOT") return "NOT";
  if(s=="with or without notes") return "muistiinpanoilla tai ilman";
  if(s=="with a note") return "muistiinpanolla";
  if(s=="with a note containing...") return "muistiinpanolla, joka sisältää...";
  if(s=="without notes") return "ilman muistiinpanoja";
  if(s=="any type") return "mikä tahansa tyyppi";
  if(s=="private note, not shown on extranets") return "yksityinen muistiinpano, ei näy ekstraneteissä";
  if(s=="private note, shown on extranets") return "yksityinen muistiinpano, näkyy ekstraneteissä";
  if(s=="public note") return "julkinen muistiinpano";
  if(s=="Note types") return "Muistiinpanotyypit";
  if(s=="LEVEL") return "TASO";
  if(s=="with a comment") return "kommentilla";
  if(s=="with a comment contaning...") return "kommentilla, joka sisältää...";
  if(s=="TBX export") return "TBX vienti";
  if(s=="TBX import") return "TBX tuonti";
  if(s=="Empty the termbase") return "Tyhjennä termitietokanta";
  if(s=="Careful now! You are about to delete this termbase. You will not be able to undo this.") return "Huomio! Olet poistamassa termitietokannan. Et voi peruuttaa poistoa jälkeenpäin.";
  if(s=="Careful now! You are about to delete all entries and their history. You will not be able to undo this.") return "Huomio! Olet poistamassa kaikki termitietueet historioineen. Et voi peruuttaa poistoa jälkeenpäin.";
  if(s=="RELATED TERMS") return "LIITTYVÄT TERMIT";
  if(s=="Your termbase at a glance") return "Katsaus termitietokantaasi";
  if(s=="Number of entries") return "Termitietueiden määrä";
  if(s=="Number of items in history log") return "Historialokin merkintöjen määrä";
  if(s=="Your termbase is stored in the file %F") return "Termitietokantasi on tallennettu tiedostoon %F";
  if(s=="File size") return "Tiedoston koko";
  if(s=="Download %F") return "Lataa %F";
  if(s=="Upload %F") return "Lisää tiedosto %F";
  if(s=="Make sure that the file you are uploading is a valid Terminologue termbase. If you upload something else you will do irreparable damage to your termbase.") return "Varmista, että lisäämäsi tiedosto on Terminologue-termitietokanta. Jos lisäät toisenlaisen tiedoston, termitietokantasi vaurioituu korjaamattomasti.";
  if(s=="PARENT") return "translation required";
  if(s=="no parent") return "translation required";
  if(s=="excluding subdomains") return "translation required";
  if(s=="including subdomains") return "translation required";
  if(s=="the entry has this domain") return "translation required";
  if(s=="the entry has only this domain") return "translation required";
  if(s=="the entry has not only this domain") return "translation required";
  if(s=="Careful! If you remove yourself from this termbase you will lose access to it.") return "translation required";

  if(!gloss) console.log(`if(s=="${s}") return "";`);
  else console.log(`if(s=="${s}", "${gloss}") return "";`);
  //if(s=="") return s;
  return s;
}

try {
  module.exports={
    L: L,
  }
} catch(e){}
