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
    "welcome.eyebrow":"Welcome","welcome.title":"We're so glad you're here",
    "welcome.body":"We're getting married — and we'd love to celebrate it with you. Think good food, full glasses, and all of us up on the tables dancing before the night is through.",
    "count.eyebrow":"Counting down","count.title":"Until we say “I do”","count.days":"Days","count.hours":"Hours","count.minutes":"Minutes","count.seconds":"Seconds","count.over":"Today is the day!",
    "details.eyebrow":"The details",
    "details.when":"When","details.when.val":"Thursday, 10 June 2027","details.when.note":"From 14:30 until late",
    "details.where":"Where","details.where.val":"Strand Deining","details.where.note":"On the beach at Castricum aan Zee",
    "stay.eyebrow":"Where to stay",
    "stay.zomerskamer":"Hotel Zomers — beach room","stay.zomerskamer.note":"Right next to the venue",
    "stay.zomershuisje":"Hotel Zomers — beach house","stay.zomershuisje.note":"Right next to the venue",
    "stay.camping":"Camping Bakkum — pitches & cabins","stay.camping.note":"10 minutes by bike",
    "stay.airbnb":"Airbnb with other guests","stay.airbnb.note":"Arrange your own",
    "gallery.eyebrow":"The two of us",
    "dayteaser.eyebrow":"Save the date","dayteaser.title":"How the day unfolds",
    "dayteaser.body":"From the first welcome to the last dance — here's everything we have planned for the tenth of June.",
    "dayteaser.cta":"See the schedule",
    "rsvpband.title":"Will you celebrate with us?",
    "rsvpband.body":"We would so love to know whether you can be there.",
    "rsvpband.cta":"Respond now",
    "footer.tag":"We can't wait to celebrate with you",

    "day.hero.eyebrow":"10 June 2027 · Strand Deining",
    "day.hero.title":"The Day","day.hero.sub":"A day by the sea — from the afternoon sun into the small hours.",
    "schedule.eyebrow":"Programme","schedule.title":"Order of the day",
    "s1.t":"Reception","s1.d":"Arrive, settle in and pick up a welcome drink.",
    "s2.t":"Ceremony","s2.d":"The moment we say \u201cI do\u201d.",
    "s3.t":"Toast","s3.d":"Raise a glass to the newlyweds.",
    "s4.t":"Drinks reception","s4.d":"Mingle, snack and soak up the sea air.",
    "s5.t":"Dinner","s5.d":"A shared-dining BBQ — relaxed and generous, with something for everyone.",
    "s6.t":"Toast & Roast, then party","s6.d":"Speeches and surprises, followed by dancing until late.",
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
    "welcome.eyebrow":"Welkom","welcome.title":"Fijn dat je er bent",
    "welcome.body":"We gaan trouwen — en we vieren het het liefst met jullie erbij. Denk aan lekker eten, volle glazen en met z'n allen op de tafels dansen voordat de avond om is.",
    "count.eyebrow":"Aftellen","count.title":"Tot we “ja” zeggen","count.days":"Dagen","count.hours":"Uren","count.minutes":"Minuten","count.seconds":"Seconden","count.over":"Vandaag is het zover!",
    "details.eyebrow":"De details",
    "details.when":"Wanneer","details.when.val":"Donderdag 10 juni 2027","details.when.note":"Vanaf 14:30 tot in de late uurtjes",
    "details.where":"Waar","details.where.val":"Strand Deining","details.where.note":"Op het strand van Castricum aan Zee",
    "stay.eyebrow":"Waar te overnachten",
    "stay.zomerskamer":"Hotel Zomers — strandkamer","stay.zomerskamer.note":"Direct naast de locatie",
    "stay.zomershuisje":"Hotel Zomers — strandhuisje","stay.zomershuisje.note":"Direct naast de locatie",
    "stay.camping":"Camping Bakkum — kamperen & huisjes","stay.camping.note":"10 minuten fietsen",
    "stay.airbnb":"Airbnb met andere gasten","stay.airbnb.note":"Zelf regelen",
    "gallery.eyebrow":"Wij tweeën",
    "dayteaser.eyebrow":"Hou de datum vrij","dayteaser.title":"Het verloop van de dag",
    "dayteaser.body":"Van het eerste welkom tot de laatste dans — dit hebben we gepland voor de tiende juni.",
    "dayteaser.cta":"Bekijk het programma",
    "rsvpband.title":"Vier je met ons mee?",
    "rsvpband.body":"We horen heel graag of je erbij kunt zijn.",
    "rsvpband.cta":"Reageer nu",
    "footer.tag":"We kunnen niet wachten om dit met jullie te vieren",

    "day.hero.eyebrow":"10 juni 2027 · Strand Deining",
    "day.hero.title":"De Dag","day.hero.sub":"Een dag aan zee — van de middagzon tot diep in de nacht.",
    "schedule.eyebrow":"Programma","schedule.title":"Het programma",
    "s1.t":"Ontvangst","s1.d":"Aankomen, even landen en een welkomstdrankje pakken.",
    "s2.t":"Ceremonie","s2.d":"Het moment waarop we \u201cja\u201d zeggen.",
    "s3.t":"Toostmoment","s3.d":"Het glas heffen op het bruidspaar.",
    "s4.t":"Borrel","s4.d":"Bijpraten, hapjes en de zeelucht opsnuiven.",
    "s5.t":"Diner","s5.d":"Een shared dining BBQ — ontspannen en royaal, met voor ieder wat wils.",
    "s6.t":"Toast & Roast, daarna feest","s6.d":"Speeches en verrassingen, gevolgd door dansen tot in de late uurtjes.",
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
    "welcome.eyebrow":"Willkommen","welcome.title":"Schön, dass du da bist",
    "welcome.body":"Wir heiraten — und wir feiern es am liebsten mit euch. Freut euch auf gutes Essen, volle Gläser und uns alle tanzend auf den Tischen, bevor die Nacht vorbei ist.",
    "count.eyebrow":"Countdown","count.title":"Bis wir „Ja“ sagen","count.days":"Tage","count.hours":"Stunden","count.minutes":"Minuten","count.seconds":"Sekunden","count.over":"Heute ist der große Tag!",
    "details.eyebrow":"Die Details",
    "details.when":"Wann","details.when.val":"Donnerstag, 10. Juni 2027","details.when.note":"Ab 14:30 Uhr bis spät in die Nacht",
    "details.where":"Wo","details.where.val":"Strand Deining","details.where.note":"Am Strand von Castricum aan Zee",
    "stay.eyebrow":"Übernachten",
    "stay.zomerskamer":"Hotel Zomers — Strandzimmer","stay.zomerskamer.note":"Direkt neben der Location",
    "stay.zomershuisje":"Hotel Zomers — Strandhaus","stay.zomershuisje.note":"Direkt neben der Location",
    "stay.camping":"Camping Bakkum — Stellplätze & Häuschen","stay.camping.note":"10 Minuten mit dem Rad",
    "stay.airbnb":"Airbnb mit anderen Gästen","stay.airbnb.note":"Selbst organisieren",
    "gallery.eyebrow":"Wir beide",
    "dayteaser.eyebrow":"Save the Date","dayteaser.title":"So läuft der Tag ab",
    "dayteaser.body":"Vom ersten Empfang bis zum letzten Tanz — das alles haben wir für den zehnten Juni geplant.",
    "dayteaser.cta":"Zum Programm",
    "rsvpband.title":"Feiert ihr mit uns?",
    "rsvpband.body":"Wir freuen uns sehr über eure Rückmeldung.",
    "rsvpband.cta":"Jetzt antworten",
    "footer.tag":"Wir freuen uns drauf mit euch zu feiern!",

    "day.hero.eyebrow":"10. Juni 2027 · Strand Deining",
    "day.hero.title":"Der Tag","day.hero.sub":"Ein Tag am Meer — von der Nachmittagssonne bis in die Nacht.",
    "schedule.eyebrow":"Programm","schedule.title":"Der Tagesablauf",
    "s1.t":"Empfang","s1.d":"Ankommen, durchatmen und ein Willkommensgetränk nehmen.",
    "s2.t":"Trauung","s2.d":"Der Moment, in dem wir \u201eJa\u201c sagen.",
    "s3.t":"Anstoßen","s3.d":"Auf das Brautpaar anstoßen.",
    "s4.t":"Sektempfang","s4.d":"Plaudern, Snacks und die Meeresluft genießen.",
    "s5.t":"Abendessen","s5.d":"Ein Shared-Dining-BBQ — entspannt und für jeden etwas dabei.",
    "s6.t":"Toast & Roast, danach Party","s6.d":"Reden, Toast&Roast. etc., danach Tanzen bis spät in die Nacht.",
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
