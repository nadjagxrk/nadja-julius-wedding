/* ===========================================================
   i18n + shared site behaviour
   Languages: EN (default), NL, DE. Choice persists across pages.
   =========================================================== */

const RSVP_EMAIL = "your-email@example.com"; // <-- Nadja & Julius: replace with the address replies should go to.

const I18N = {
  en:{
    "nav.home":"Home","nav.day":"The Day","nav.rsvp":"RSVP",
    "hero.eyebrow":"We're getting married",
    "hero.date":"10 June 2027","hero.place":"Strand Deining · Castricum",
    "hero.scroll":"Scroll",
    "welcome.eyebrow":"Welcome","welcome.title":"Come celebrate with us",
    "welcome.body":"We're getting married — and we want all our favourite people in one place. Good food, good wine, a dance floor that will absolutely be used. We hope you'll join us.",
    "count.eyebrow":"Counting down","count.title":"Until we say “I do”","count.days":"Days","count.hours":"Hours","count.minutes":"Minutes","count.seconds":"Seconds","count.over":"Today is the day!",
    "details.eyebrow":"The venue",
    "details.when":"When","details.when.val":"Thursday, 10 June 2027","details.when.note":"From 14:30 until late",
    "details.where":"Where","details.where.val":"Strand Deining","details.where.note":"On the beach at Castricum aan Zee",
    "details.map":"View on Maps",
    "stay.eyebrow":"Where to stay",
    "stay.zomerskamer":"Hotel Zomers — beach room","stay.zomerskamer.note":"Right next to the venue",
    "stay.zomershuisje":"Hotel Zomers — beach house","stay.zomershuisje.note":"Right next to the venue",
    "stay.camping":"Camping Bakkum — pitches & cabins","stay.camping.note":"10 minutes by bike",
    "stay.airbnb":"Airbnb with other guests","stay.airbnb.note":"Arrange your own",
    "gallery.eyebrow":"The two of us",
    "dayteaser.eyebrow":"The day","dayteaser.title":"How the day unfolds",
    "dayteaser.body":"From the first welcome to the last dance — here's everything we have planned for the tenth of June.",
    "dayteaser.cta":"See the schedule",
    "rsvpband.title":"Will you celebrate with us?",
    "rsvpband.body":"We would so love to know whether you can be there.",
    "rsvpband.cta":"Respond now",
    "footer.tag":"We can't wait to celebrate with you",

    "day.hero.eyebrow":"10 June 2027 · Strand Deining",
    "day.hero.title":"The Day","day.hero.sub":"A day by the sea — from the afternoon sun into the small hours.",
    "schedule.eyebrow":"Programme","schedule.title":"Order of the day",

    "tl1.time":"14:30 – 15:00","tl1.heading":"We arrive!",
    "tl1.desc":"Make yourself at home on the shores of Castricum aan Zee. Find a familiar face, kick off your shoes and let the afternoon begin.",
    "tl2.time":"15:00 – 16:00","tl2.heading":"We do!",
    "tl2.desc":"The main event. We say I do with our feet in the sand and the North Sea as our backdrop — exactly where we always imagined it would be.",
    "tl3.time":"16:00 – 16:30","tl3.heading":"We toast!",
    "tl3.desc":"Pop the bubbly and raise a glass. A moment to celebrate, take a breath and let it fully sink in — we're actually married.",
    "tl4.time":"16:30 – 18:00","tl4.heading":"We borrel!",
    "tl4.desc":"Dutch borrel style — cake, drinks and good vibes on the terrace. Mingle in the golden hour as the afternoon turns warm and the sea sparkles.",
    "tl5.time":"18:00 – 20:30","tl5.heading":"We eat!",
    "tl5.desc":"Straight from the BBQ. We're on the beach, so we're doing it properly — a proper feast with sea breeze, great wine and the people we love most.",
    "tl6.time":"20:30 – late","tl6.heading":"We celebrate!",
    "tl6.desc":"Speeches, surprises and then the dance floor opens. We'll keep going until the staff gently suggest it might be time to head home.",

    "accom.eyebrow":"Where to stay",
    "accom.title":"Accommodation",
    "accom.sub":"A few options nearby to make a proper weekend of it.",
    "accom.type.hotel":"Hotel","accom.type.camping":"Camping","accom.type.airbnb":"Airbnb",
    "accom.card1.name":"Hotel Zomers — Beach Room","accom.card1.note":"Right next to the venue",
    "accom.card2.name":"Hotel Zomers — Beach House","accom.card2.note":"Right next to the venue",
    "accom.card3.name":"Camping Bakkum","accom.card3.note":"Pitches & cabins · 10 min by bike",
    "accom.card4.name":"With Other Guests","accom.card4.note":"Arrange your own",
    "accom.book":"See options",

    "dress.eyebrow":"Dress code","dress.title":"Boho chic",
    "dress.body":"Think boho chic. We're right on the beach, so keep it comfortable — and wear something you can dance in, because we fully intend to.",

    "rsvp.hero.eyebrow":"Join us","rsvp.title":"RSVP",
    "rsvp.sub":"Please let us know whether you'll be there.",
    "rsvp.open":"Tap to open",
    "rsvp.letter.title":"Will you be there?",
    "rsvp.letter.deadline":"Kindly let us know by 1 December 2026.",
    "rsvp.letter.hint":"Fill in the form just below.",
    "rsvp.letter.cta":"RSVP here",
    "form.names.label":"Name(s)","form.names.ph":"Who is responding?",
    "form.attend.label":"Will you be there?","form.attend.yes":"Joyfully accept","form.attend.no":"Regretfully decline",
    "form.diet.label":"Meal & dietary needs","form.diet.ph":"Allergies, vegetarian, vegan, anything we should know…",
    "form.part.label":"Toast & Roast or another contribution","form.part.ph":"A speech, a game, a song, a surprise? Tell us here.",
    "form.submit":"Send response","form.note":"This opens your email app with your reply ready to send.",
    "form.alertname":"Please add your name first.",
    "mail.subject":"Wedding RSVP — Nadja & Julius",
    "mail.l.names":"Name(s)","mail.l.attend":"Attending","mail.l.diet":"Meal / dietary","mail.l.part":"Toast & Roast / contribution",
    "mail.yes":"Joyfully accepts","mail.no":"Regretfully declines","mail.blank":"—"
  },
  nl:{
    "nav.home":"Home","nav.day":"De Dag","nav.rsvp":"RSVP",
    "hero.eyebrow":"We gaan trouwen",
    "hero.date":"10 juni 2027","hero.place":"Strand Deining · Castricum",
    "hero.scroll":"Scroll",
    "welcome.eyebrow":"Welkom","welcome.title":"Vier mee met ons",
    "welcome.body":"We gaan trouwen — en we willen al onze lievelingsmensen op één plek. Lekker eten, goede wijn en een dansvloer die echt gebruikt gaat worden. We hopen dat je erbij bent.",
    "count.eyebrow":"Aftellen","count.title":"Tot we „ja“ zeggen","count.days":"Dagen","count.hours":"Uren","count.minutes":"Minuten","count.seconds":"Seconden","count.over":"Vandaag is het zover!",
    "details.eyebrow":"De locatie",
    "details.when":"Wanneer","details.when.val":"Donderdag 10 juni 2027","details.when.note":"Vanaf 14:30 tot in de late uurtjes",
    "details.where":"Waar","details.where.val":"Strand Deining","details.where.note":"Op het strand van Castricum aan Zee",
    "details.map":"Bekijk op Maps",
    "stay.eyebrow":"Waar te overnachten",
    "stay.zomerskamer":"Hotel Zomers — strandkamer","stay.zomerskamer.note":"Direct naast de locatie",
    "stay.zomershuisje":"Hotel Zomers — strandhuisje","stay.zomershuisje.note":"Direct naast de locatie",
    "stay.camping":"Camping Bakkum — kamperen & huisjes","stay.camping.note":"10 minuten fietsen",
    "stay.airbnb":"Airbnb met andere gasten","stay.airbnb.note":"Zelf regelen",
    "gallery.eyebrow":"Wij tweeën",
    "dayteaser.eyebrow":"De dag","dayteaser.title":"Zo verloopt de dag",
    "dayteaser.body":"Van het eerste welkom tot de laatste dans — dit hebben we gepland voor de tiende juni.",
    "dayteaser.cta":"Bekijk het programma",
    "rsvpband.title":"Vier je met ons mee?",
    "rsvpband.body":"We horen heel graag of je erbij kunt zijn.",
    "rsvpband.cta":"Reageer nu",
    "footer.tag":"We kunnen niet wachten om dit met jullie te vieren",

    "day.hero.eyebrow":"10 juni 2027 · Strand Deining",
    "day.hero.title":"De Dag","day.hero.sub":"Een dag aan zee — van de middagzon tot diep in de nacht.",
    "schedule.eyebrow":"Programma","schedule.title":"Het programma",

    "tl1.time":"14:30 – 15:00","tl1.heading":"We komen aan!",
    "tl1.desc":"Voel je thuis op het strand van Castricum aan Zee. Zoek een bekend gezicht, gooi je schoenen uit en laat de middag beginnen.",
    "tl2.time":"15:00 – 16:00","tl2.heading":"We zeggen ja!",
    "tl2.desc":"Het grote moment. We zeggen ja met onze voeten in het zand en de Noordzee als decor — precies zoals we het altijd voor ons zagen.",
    "tl3.time":"16:00 – 16:30","tl3.heading":"We proosten!",
    "tl3.desc":"Ontkurk de bubbels en hef het glas. Een moment om te vieren, even adem te halen en het te laten bezinken — we zijn getrouwd.",
    "tl4.time":"16:30 – 18:00","tl4.heading":"We borrelen!",
    "tl4.desc":"Hollandse borrelstijl — taart, drankjes en een goed gevoel op het terras. Geniet van het gouden uur terwijl de middag warm wordt en de zee glinstert.",
    "tl5.time":"18:00 – 20:30","tl5.heading":"We eten!",
    "tl5.desc":"Vers van de BBQ. We zijn op het strand, dus we doen het goed — een echt feestmaal met zeebries, goede wijn en de mensen die we het meest liefhebben.",
    "tl6.time":"20:30 – laat","tl6.heading":"We vieren!",
    "tl6.desc":"Speeches, verrassingen en dan gaat de dansvloer open. We gaan door totdat het personeel vriendelijk suggereert dat het misschien tijd is om naar huis te gaan.",

    "accom.eyebrow":"Waar overnachten",
    "accom.title":"Overnachten",
    "accom.sub":"Een paar opties in de buurt om er een echt weekend van te maken.",
    "accom.type.hotel":"Hotel","accom.type.camping":"Camping","accom.type.airbnb":"Airbnb",
    "accom.card1.name":"Hotel Zomers — Strandkamer","accom.card1.note":"Direct naast de locatie",
    "accom.card2.name":"Hotel Zomers — Strandhuisje","accom.card2.note":"Direct naast de locatie",
    "accom.card3.name":"Camping Bakkum","accom.card3.note":"Kampeerplaatsen & huisjes · 10 min fietsen",
    "accom.card4.name":"Met andere gasten","accom.card4.note":"Zelf regelen",
    "accom.book":"Bekijk opties",

    "dress.eyebrow":"Dresscode","dress.title":"Boho chic",
    "dress.body":"Denk boho chic. We zitten direct op het strand, dus hou het comfortabel — en draag iets waarin je kunt dansen, want dat gaan we zeker doen.",

    "rsvp.hero.eyebrow":"Vier mee","rsvp.title":"RSVP",
    "rsvp.sub":"Laat ons weten of je erbij bent.",
    "rsvp.open":"Tik om te openen",
    "rsvp.letter.title":"Ben je erbij?",
    "rsvp.letter.deadline":"Laat het ons weten vóór 1 december 2026.",
    "rsvp.letter.hint":"Vul het formulier hieronder in.",
    "rsvp.letter.cta":"RSVP hier",
    "form.names.label":"Naam(en)","form.names.ph":"Wie reageert er?",
    "form.attend.label":"Ben je erbij?","form.attend.yes":"Ik ben erbij","form.attend.no":"Helaas niet",
    "form.diet.label":"Maaltijd & dieetwensen","form.diet.ph":"Allergieën, vegetarisch, veganistisch, iets wat we moeten weten…",
    "form.part.label":"Toast & Roast of een andere bijdrage","form.part.ph":"Een speech, een spel, een lied, een verrassing? Vertel het hier.",
    "form.submit":"Verstuur reactie","form.note":"Dit opent je e-mailprogramma met je reactie klaar om te versturen.",
    "form.alertname":"Vul eerst je naam in.",
    "mail.subject":"Trouwen RSVP — Nadja & Julius",
    "mail.l.names":"Naam(en)","mail.l.attend":"Aanwezig","mail.l.diet":"Maaltijd / dieet","mail.l.part":"Toast & Roast / bijdrage",
    "mail.yes":"Is erbij","mail.no":"Helaas niet aanwezig","mail.blank":"—"
  },
  de:{
    "nav.home":"Start","nav.day":"Der Tag","nav.rsvp":"RSVP",
    "hero.eyebrow":"Wir heiraten",
    "hero.date":"10. Juni 2027","hero.place":"Strand Deining · Castricum",
    "hero.scroll":"Scrollen",
    "welcome.eyebrow":"Willkommen","welcome.title":"Feiert mit uns",
    "welcome.body":"Wir heiraten — und wir wollen alle unsere Lieblingsmenschen an einem Ort. Gutes Essen, guter Wein und eine Tanzfläche, die wirklich genutzt wird. Wir hoffen, ihr seid dabei.",
    "count.eyebrow":"Countdown","count.title":"Bis wir „Ja“ sagen","count.days":"Tage","count.hours":"Stunden","count.minutes":"Minuten","count.seconds":"Sekunden","count.over":"Heute ist der große Tag!",
    "details.eyebrow":"Die Location",
    "details.when":"Wann","details.when.val":"Donnerstag, 10. Juni 2027","details.when.note":"Ab 14:30 Uhr bis spät in die Nacht",
    "details.where":"Wo","details.where.val":"Strand Deining","details.where.note":"Am Strand von Castricum aan Zee",
    "details.map":"Auf Maps ansehen",
    "stay.eyebrow":"Übernachten",
    "stay.zomerskamer":"Hotel Zomers — Strandzimmer","stay.zomerskamer.note":"Direkt neben der Location",
    "stay.zomershuisje":"Hotel Zomers — Strandhaus","stay.zomershuisje.note":"Direkt neben der Location",
    "stay.camping":"Camping Bakkum — Stellplätze & Häuschen","stay.camping.note":"10 Minuten mit dem Rad",
    "stay.airbnb":"Airbnb mit anderen Gästen","stay.airbnb.note":"Selbst organisieren",
    "gallery.eyebrow":"Wir beide",
    "dayteaser.eyebrow":"Der Tag","dayteaser.title":"So läuft der Tag ab",
    "dayteaser.body":"Vom ersten Empfang bis zum letzten Tanz — das alles haben wir für den zehnten Juni geplant.",
    "dayteaser.cta":"Zum Programm",
    "rsvpband.title":"Feiert ihr mit uns?",
    "rsvpband.body":"Wir freuen uns sehr über eure Rückmeldung.",
    "rsvpband.cta":"Jetzt antworten",
    "footer.tag":"Wir freuen uns drauf mit euch zu feiern!",

    "day.hero.eyebrow":"10. Juni 2027 · Strand Deining",
    "day.hero.title":"Der Tag","day.hero.sub":"Ein Tag am Meer — von der Nachmittagssonne bis in die Nacht.",
    "schedule.eyebrow":"Programm","schedule.title":"Der Tagesablauf",

    "tl1.time":"14:30 – 15:00","tl1.heading":"Wir kommen an!",
    "tl1.desc":"Macht euch zu Hause am Strand von Castricum aan Zee. Sucht ein bekanntes Gesicht, zieht die Schuhe aus und lasst den Nachmittag beginnen.",
    "tl2.time":"15:00 – 16:00","tl2.heading":"Wir sagen Ja!",
    "tl2.desc":"Der große Moment. Wir sagen Ja mit den Füßen im Sand und der Nordsee als Kulisse — genau so, wie wir es uns immer vorgestellt haben.",
    "tl3.time":"16:00 – 16:30","tl3.heading":"Wir stoßen an!",
    "tl3.desc":"Korken knallen, Gläser heben. Ein Moment zum Feiern, um durchzuatmen und es wirklich sacken zu lassen — wir sind verheiratet.",
    "tl4.time":"16:30 – 18:00","tl4.heading":"Wir borreln!",
    "tl4.desc":"Holländische Borrel-Atmosphäre — Kuchen, Getränke und gute Stimmung auf der Terrasse. Plaudert in der goldenen Stunde, während der Nachmittag warm wird und das Meer glitzert.",
    "tl5.time":"18:00 – 20:30","tl5.heading":"Wir essen!",
    "tl5.desc":"Frisch vom Grill. Wir sind am Strand, also machen wir es richtig — ein echtes Festmahl mit Meeresluft, gutem Wein und den Menschen, die wir am meisten lieben.",
    "tl6.time":"20:30 – spät","tl6.heading":"Wir feiern!",
    "tl6.desc":"Reden, Überraschungen und dann öffnet sich die Tanzfläche. Wir machen weiter, bis das Personal freundlich andeutet, dass es vielleicht Zeit ist, nach Hause zu gehen.",

    "accom.eyebrow":"Wo übernachten",
    "accom.title":"Unterkunft",
    "accom.sub":"Ein paar Optionen in der Nähe, damit ihr ein richtiges Wochenende daraus machen könnt.",
    "accom.type.hotel":"Hotel","accom.type.camping":"Camping","accom.type.airbnb":"Airbnb",
    "accom.card1.name":"Hotel Zomers — Strandzimmer","accom.card1.note":"Direkt neben der Location",
    "accom.card2.name":"Hotel Zomers — Strandhaus","accom.card2.note":"Direkt neben der Location",
    "accom.card3.name":"Camping Bakkum","accom.card3.note":"Stellplätze & Häuschen · 10 Min. mit dem Rad",
    "accom.card4.name":"Mit anderen Gästen","accom.card4.note":"Selbst organisieren",
    "accom.book":"Optionen ansehen",

    "dress.eyebrow":"Dresscode","dress.title":"Boho Chic",
    "dress.body":"Denkt an Boho Chic. Wir sind direkt am Strand, also bleibt es bequem — und zieht etwas an, in dem ihr tanzen könnt, denn das haben wir fest vor.",

    "rsvp.hero.eyebrow":"Feiert mit","rsvp.title":"RSVP",
    "rsvp.sub":"Bitte gebt uns Bescheid, ob ihr dabei seid.",
    "rsvp.open":"Zum Öffnen tippen",
    "rsvp.letter.title":"Seid ihr dabei?",
    "rsvp.letter.deadline":"Bitte gebt uns bis zum 1. Dezember 2026 Bescheid.",
    "rsvp.letter.hint":"Füllt einfach das Formular unten aus.",
    "rsvp.letter.cta":"RSVP hier",
    "form.names.label":"Name(n)","form.names.ph":"Wer antwortet?",
    "form.attend.label":"Seid ihr dabei?","form.attend.yes":"Ich bin dabei","form.attend.no":"Leider nicht",
    "form.diet.label":"Essen & Ernährungswünsche","form.diet.ph":"Allergien, vegetarisch, vegan, alles was wir wissen sollten…",
    "form.part.label":"Toast & Roast oder ein anderer Beitrag","form.part.ph":"Eine Rede, ein Spiel, ein Lied, eine Überraschung? Schreibt es uns hier.",
    "form.submit":"Antwort senden","form.note":"Dies öffnet dein E-Mail-Programm mit der fertigen Antwort.",
    "form.alertname":"Bitte trag zuerst deinen Namen ein.",
    "mail.subject":"Hochzeit RSVP — Nadja & Julius",
    "mail.l.names":"Name(n)","mail.l.attend":"Teilnahme","mail.l.diet":"Essen / Ernährung","mail.l.part":"Toast & Roast / Beitrag",
    "mail.yes":"Ist dabei","mail.no":"Leider nicht dabei","mail.blank":"—"
  }
};

const LANGS = ["de","nl","en"];
let LANG = (function(){
  try{ const s = localStorage.getItem("weddingLang"); if(LANGS.includes(s)) return s; }catch(e){}
  return "en";
})();

function t(key){ return (I18N[LANG] && I18N[LANG][key]) || (I18N.en[key]) || key; }

function applyLang(){
  const dict = I18N[LANG] || I18N.en;
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const v = dict[el.getAttribute("data-i18n")];
    if(v!=null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const v = dict[el.getAttribute("data-i18n-ph")];
    if(v!=null) el.setAttribute("placeholder", v);
  });
  document.querySelectorAll(".lang button").forEach(b=>{
    b.setAttribute("aria-pressed", String(b.dataset.lang===LANG));
  });
}

function setLang(l){
  if(!LANGS.includes(l)) return;
  LANG = l;
  try{ localStorage.setItem("weddingLang", l); }catch(e){}
  applyLang();
}

document.addEventListener("DOMContentLoaded", ()=>{
  applyLang();
  document.querySelectorAll(".lang button").forEach(b=>{
    b.addEventListener("click", ()=>setLang(b.dataset.lang));
  });

  // header solid-on-scroll (only matters on home, harmless elsewhere)
  const onScroll = ()=>{
    document.body.classList.toggle("scrolled", window.scrollY > 60);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, {passive:true});

  // reveal on scroll
  const io = new IntersectionObserver((ents)=>{
    ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
  }, {threshold:.12, rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  // RSVP form -> mailto
  const form = document.getElementById("rsvp-form");
  if(form){
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      const names = (form.names.value||"").trim();
      if(!names){ alert(t("form.alertname")); form.names.focus(); return; }
      const attendVal = (form.querySelector('input[name="attend"]:checked')||{}).value;
      const attend = attendVal==="yes" ? t("mail.yes") : attendVal==="no" ? t("mail.no") : t("mail.blank");
      const diet = (form.diet.value||"").trim() || t("mail.blank");
      const part = (form.part.value||"").trim() || t("mail.blank");
      const body =
        t("mail.l.names")+": "+names+"\n"+
        t("mail.l.attend")+": "+attend+"\n"+
        t("mail.l.diet")+": "+diet+"\n"+
        t("mail.l.part")+": "+part+"\n";
      const url = "mailto:"+encodeURIComponent(RSVP_EMAIL)+
        "?subject="+encodeURIComponent(t("mail.subject"))+
        "&body="+encodeURIComponent(body);
      window.location.href = url;
    });
  }
});
