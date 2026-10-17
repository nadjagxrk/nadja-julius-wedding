/* ===========================================================
   i18n + shared site behaviour
   Languages: EN (default), NL, DE. Choice persists across pages.
   =========================================================== */

const AIRTABLE_TOKEN      = "patjGlixZk200CoXp.7094f6388eec75ef81e13fbddb6986edf083a5194fe5e08d8d1f78f3e4afceaa";
const AIRTABLE_ENDPOINT   = "https://api.airtable.com/v0/appr0YjU7iNuaL2jD/tblQY2KGWlxkp2udj";
const AIRTABLE_READ_TOKEN = "pat4MlFlIagmEL2Qe.cae1d6993ae77b75d50ac495c3951e44496559736fef3c731193bc6d71c19a98";
const INVITEES_ENDPOINT   = "https://api.airtable.com/v0/appr0YjU7iNuaL2jD/Invitees";

/* Evening guests (avond.html) use their own two tables in the same base.
   Table names must match Airtable exactly (or swap in the tbl… IDs). */
const AVOND_INVITEES_ENDPOINT = "https://api.airtable.com/v0/appr0YjU7iNuaL2jD/" + encodeURIComponent("Avondgasten");
const AVOND_RSVP_ENDPOINT     = "https://api.airtable.com/v0/appr0YjU7iNuaL2jD/" + encodeURIComponent("Responses avond");

/* Which guest list this page uses: <meta name="rsvp-list" content="avond"> on avond.html, "dag" everywhere else */
const RSVP_LIST = ((document.querySelector('meta[name="rsvp-list"]') || {}).content || "dag").toLowerCase();
const RSVP_EP   = RSVP_LIST === "avond" ? AVOND_RSVP_ENDPOINT     : AIRTABLE_ENDPOINT;
const INV_EP    = RSVP_LIST === "avond" ? AVOND_INVITEES_ENDPOINT : INVITEES_ENDPOINT;
const GUEST_KEY = RSVP_LIST === "avond" ? "rsvp_guest_avond"      : "rsvp_guest";

const I18N = {
  en:{
    "nav.home":"Home","nav.day":"The Day","nav.rsvp":"RSVP",
    "hero.eyebrow":"We're getting married",
    "hero.date":"10 June 2027","hero.place":"Strand Deining · Castricum",
    "hero.scroll":"Scroll",
    "welcome.eyebrow":"Welcome","welcome.title":"Come celebrate with us",
    "welcome.body":"We're getting married! And we want all our nearest and dearest in one place. Good food, drinks, toasts and roasts — and then dancing until you drop. We hope you'll be there!",
    "welcome.cta":"Let us know if you'll be there",
    "count.eyebrow":"Counting down","count.title":"Until we say “I do”","count.days":"Days","count.hours":"Hours","count.minutes":"Minutes","count.seconds":"Seconds","count.over":"Today is the day!",
    "details.eyebrow":"The venue",
    "details.when":"When","details.when.val":"Thursday, 10 June 2027","details.when.note":"From 14:30 until late",
    "details.where":"Where","details.where.val":"Strand Deining","details.where.note":"On the beach at Castricum aan Zee",
    "details.map":"View on Maps",
    "gallery.eyebrow":"The two of us",
    "dayteaser.eyebrow":"The day","dayteaser.title":"How the day unfolds",
    "dayteaser.body":"From the first welcome to the last dance — here's everything we have planned for the tenth of June.",
    "dayteaser.cta":"See the schedule",
    "rsvpband.title":"Will you celebrate with us?",
    "rsvpband.body":"We would so love to know whether you can be there.",
    "rsvpband.cta":"Respond now",
    "footer.tag":"We can't wait to celebrate with you",

    "honey.eyebrow":"The gift",
    "honey.title":"Our wish list? Simple.",
    "honey.body":"We're longing for more stamps in our passports. If you'd like to give us a gift, a contribution to our honeymoon would mean the world.",
    "honey.cta":"Contribute to our honeymoon",

    "day.hero.eyebrow":"10 June 2027 · Strand Deining",
    "day.hero.title":"The Day",
    "day.hero.sub":"A day by the sea — with everyone we love.",
    "schedule.eyebrow":"Programme","schedule.title":"Order of the day",

    "tl1.time":"14:30 – 15:00","tl1.heading":"We arrive!",
    "tl1.desc":"Welcome to our wedding. Grab a welcome drink, kick off your shoes and take in the sea. The ceremony starts at three — until then, make yourself at home.",
    "tl2.time":"15:00 – 16:00","tl2.heading":"We do!",
    "tl2.desc":"The main event. We say I do with our feet in the sand and the North Sea as our backdrop — exactly where we always imagined it would be.",
    "tl3.time":"16:00 – 16:30","tl3.heading":"We toast!",
    "tl3.desc":"Pop the bubbly and raise a glass. A moment to celebrate, take a breath and let it fully sink in — we're actually married.",
    "tl4.time":"16:30 – 18:00","tl4.heading":"We borrel!",
    "tl4.desc":"Drinks, bites, a slice of wedding cake and golden hour on the terrace. The perfect moment to catch up, take in the view and let the afternoon drift into evening.",
    "tl5.time":"18:00 – 20:30","tl5.heading":"We eat!",
    "tl5.desc":"Straight from the BBQ. We're on the beach, so we're doing it properly — a proper feast with sea breeze, great drinks and the people we love most.",
    "tl6.time":"20:30 – 00:30","tl6.heading":"We celebrate!",
    "tl6.desc":"The part we've all been waiting for. Speeches, a proper Toast & Roast, maybe a game or two — and then the dance floor opens and stays open until 00:30.",

    "accom.eyebrow":"Where to stay",
    "accom.title":"Accommodation",
    "accom.sub":"Close to the venue, easy on the planning.",
    "accom.type.hotel":"Hotel","accom.type.camping":"Camping","accom.type.airbnb":"Airbnb",
    "accom.card1.name":"Hotel Zomers — Beach Room","accom.card1.note":"Right next to the venue",
    "accom.card2.name":"Hotel Zomers — Beach House","accom.card2.note":"Right next to the venue",
    "accom.card3.name":"Camping Bakkum","accom.card3.note":"Pitches & cabins · 10 min by bike",
    "accom.card4.name":"With Other Guests","accom.card4.note":"Arrange your own",
    "accom.book":"See options",

    "dress.eyebrow":"Dress code","dress.title":"Bright & Beachy",
    "dress.body":"Think colour, think celebration. We want the terrace to look like summer even if the clouds disagree. Dress like you're bringing the sunshine yourself.",

    "rsvp.hero.eyebrow":"Join us","rsvp.title":"RSVP",
    "rsvp.sub":"Please let us know whether you'll be there.",
    "rsvp.letter.title":"Will you be there?",
    "rsvp.letter.deadline":"Kindly let us know by 1 December 2026.",
    "rsvp.letter.hint":"Fill in the form just below.",
    "rsvp.letter.cta":"RSVP here",
    "form.names.label":"Name(s)","form.names.ph":"Who is responding?",
    "form.attend.label":"Will you be there?","form.attend.label.pl":"Will you be there?",
    "form.attend.yes":"Joyfully accept","form.attend.yes.pl":"Joyfully accept",
    "form.attend.no":"Regretfully decline","form.attend.no.pl":"Regretfully decline",
    "form.diet.label":"Meal & dietary needs","form.diet.ph":"Allergies, vegetarian, vegan, anything we should know…",
    "form.part.label":"Would you like to do a Toast & Roast or another contribution?",
    "form.part.yes":"Yes, count me in!","form.part.yes.pl":"Yes, count us in!",
    "form.part.no":"I'll pass","form.part.no.pl":"We'll pass",
    "form.notes.label":"Anything else?","form.notes.ph":"Questions, things we should know, anything on your mind…",
    "form.phone.label":"Phone number","form.phone.ph":"So Annabel can coordinate with you","form.phone.ph.pl":"So Annabel can coordinate with you",
    "form.submit":"Send response","form.sending":"Sending…",
    "form.success.title":"You're on the list!",
    "form.success.body":"Thanks for letting us know — we can't wait to see you on the tenth.",
    "form.success.decline":"Thanks for letting us know.",
    "form.success.decline.body":"We'll miss you on the day.",
    "form.error":"Something went wrong. Please try again.",
    "form.backhome":"Back to home",
    "form.alertname":"Please add your name first.",
    "form.prefill.notice":"We found your previous response — update anything you like.",
    "mail.subject":"Wedding RSVP — Nadja & Julius",
    "mail.l.names":"Name(s)","mail.l.attend":"Attending","mail.l.diet":"Meal / dietary","mail.l.part":"Toast & Roast / contribution",
    "mail.yes":"Joyfully accepts","mail.no":"Regretfully declines","mail.blank":"—",
    "gate.title":"Your invitation",
    "gate.sub":"Enter the code from your invitation to continue.",
    "gate.code.label":"Invitation code","gate.code.ph":"Your personal code",
    "gate.submit":"Continue","gate.looking":"Looking up your invitation…",
    "gate.error":"Code not recognised. Check your invitation and try again.",
    "gate.nope":"Can't find your code? Send us a message.",
    "gate.welcome.sub.one":"We've reserved a seat just for you",
    "gate.welcome.sub.many":"We've reserved {n} seats for you",
    "form.guests.label":"How many seats can we reserve for you?",
    "form.guests.hint":"up to {n}",
    "gate.welcome.dear":"Dear",
    "gate.welcome.greeting":"We can't wait to celebrate with you!",
    "gate.hero.eyebrow":"10 June 2027 · Strand Deining",
    /* ── Avond (avond.html) ── */
    "avond.meta.title":"The Evening — Nadja & Julius",
    "avond.hero.eyebrow":"For our evening guests",
    "avond.hero.invited":"You're invited to our evening party",
    "avond.hero.invited.pl":"You're invited to our evening party",
    "avond.hero.sub":"Come and dance with us by the sea.",
    "avond.hero.date":"Thu 10 June 2027",
    "avond.hero.time":"From 20:15",
    "avond.welcome.eyebrow":"01 — Welcome",
    "avond.welcome.title":"We're so glad you're here",
    "avond.welcome.title.pl":"We're so glad you're here",
    "avond.welcome.body":"Glasses are being topped up, the sun is slowly sinking towards the North Sea and the dance floor is about to open. This is the moment we've been looking forward to all year — and we'd love to celebrate it with you.",
    "avond.welcome.body.pl":"Glasses are being topped up, the sun is slowly sinking towards the North Sea and the dance floor is about to open. This is the moment we've been looking forward to all year — and we'd love to celebrate it with you.",
    "avond.facts.when":"When",
    "avond.facts.whenV":"10 June",
    "avond.facts.whenS":"Thursday 2027",
    "avond.facts.arrive":"Arrival",
    "avond.facts.arriveS":"Party until 00:30",
    "avond.facts.where":"Where",
    "avond.facts.dress":"Dress code",
    "avond.facts.dressS":"Colour, colour, colour",
    "avond.prog.eyebrow":"02 — Programme",
    "avond.prog.title":"The evening",
    "avond.tl1.time":"20:15",
    "avond.tl1.heading":"You arrive!",
    "avond.tl1.desc":"Find a spot on the terrace, grab a drink and come say hi. You're right on time for the best part of the day.",
    "avond.tl2.time":"20:30",
    "avond.tl2.heading":"Toast & Roast",
    "avond.tl2.desc":"Speeches, stories, maybe a game or two. Anything goes — preferably with a glass in hand.",
    "avond.tl3.time":"After",
    "avond.tl3.heading":"We dance!",
    "avond.tl3.desc":"The dance floor opens. Shoes optional — the sand is already there anyway.",
    "avond.tl4.time":"00:30",
    "avond.tl4.heading":"The last dance",
    "avond.tl4.desc":"One more song, one more toast — and then we close this day together.",
    "avond.dress.eyebrow":"03 — Dress code",
    "avond.dress.tip":"Evenings by the sea can get chilly: bring a jacket or cardigan, and shoes you can walk through sand in.",
    "avond.loc.eyebrow":"04 — Venue & where to stay",
    "avond.loc.sub":"Right by the sea, with the terrace as our dance floor. Staying the night? These spots are close by.",
    "avond.loc.maps":"View on Maps",
    "avond.rsvp.eyebrow":"05 — RSVP",
    "avond.rsvp.title":"Will you be there?",
    "avond.rsvp.title.pl":"Will you be there?",
    "avond.gift.eyebrow":"06 — The gift"
  },
  nl:{
    "nav.home":"Home","nav.day":"De Dag","nav.rsvp":"RSVP",
    "hero.eyebrow":"We gaan trouwen",
    "hero.date":"10 juni 2027","hero.place":"Strand Deining · Castricum",
    "hero.scroll":"Scroll",
    "welcome.eyebrow":"Welkom","welcome.title":"Vier mee met ons",
    "welcome.body":"Wij gaan trouwen! En we willen al onze dierbaren op één plek. Lekker samen eten, drinken, toasten en roasten, en daarna dansen tot je erbij neervalt. We hopen dat je erbij bent!",
    "welcome.cta":"Laat ons weten of je erbij bent",
    "count.eyebrow":"Aftellen","count.title":"Tot we „ja“ zeggen","count.days":"Dagen","count.hours":"Uren","count.minutes":"Minuten","count.seconds":"Seconden","count.over":"Vandaag is het zover!",
    "details.eyebrow":"De locatie",
    "details.when":"Wanneer","details.when.val":"Donderdag 10 juni 2027","details.when.note":"Vanaf 14:30 tot in de late uurtjes",
    "details.where":"Waar","details.where.val":"Strand Deining","details.where.note":"Op het strand van Castricum aan Zee",
    "details.map":"Bekijk op Maps",
    "gallery.eyebrow":"Wij tweeën",
    "dayteaser.eyebrow":"De dag","dayteaser.title":"Zo verloopt de dag",
    "dayteaser.body":"Van het eerste welkom tot de laatste dans — dit hebben we gepland voor de tiende juni.",
    "dayteaser.cta":"Bekijk het programma",
    "rsvpband.title":"Vier je met ons mee?",
    "rsvpband.body":"We horen heel graag of je erbij kunt zijn.",
    "rsvpband.cta":"Reageer nu",
    "footer.tag":"We kunnen niet wachten om dit met jullie te vieren",

    "honey.eyebrow":"Het cadeau",
    "honey.title":"Verlanglijst? Simpel.",
    "honey.body":"Wij verlangen naar meer stempels in ons paspoort. Als je ons een cadeau wilt geven, dan het liefst een bijdrage aan onze huwelijksreis.",
    "honey.cta":"Bijdragen aan onze huwelijksreis",

    "day.hero.eyebrow":"10 juni 2027 · Strand Deining",
    "day.hero.title":"De Dag",
    "day.hero.sub":"Een dag aan het strand — met iedereen die we liefhebben.",
    "schedule.eyebrow":"Programma","schedule.title":"Het programma",

    "tl1.time":"14:30 – 15:00","tl1.heading":"We komen aan!",
    "tl1.desc":"Welkom op onze bruiloft. Pak een welkomstdrankje, trek je schoenen uit en geniet van de zee. De ceremonie begint om drie uur — voel je thuis tot die tijd.",
    "tl2.time":"15:00 – 16:00","tl2.heading":"We zeggen ja!",
    "tl2.desc":"Het grote moment. We zeggen ja met onze voeten in het zand en de Noordzee als decor — precies zoals we het altijd voor ons zagen.",
    "tl3.time":"16:00 – 16:30","tl3.heading":"We proosten!",
    "tl3.desc":"Ontkurk de bubbels en hef het glas. Een moment om te vieren, even adem te halen en het te laten bezinken — we zijn getrouwd.",
    "tl4.time":"16:30 – 18:00","tl4.heading":"We borrelen!",
    "tl4.desc":"Drankjes, hapjes, een stukje bruidstaart en het gouden uur op het terras. Het perfecte moment om bij te praten, het uitzicht te bewonderen en de middag rustig te laten overgaan in de avond.",
    "tl5.time":"18:00 – 20:30","tl5.heading":"We eten!",
    "tl5.desc":"Vers van de BBQ. We zijn op het strand, dus we doen het goed — een echt feestmaal met zeebries, een lekker drankje en de mensen die we het meest liefhebben.",
    "tl6.time":"20:30 – 00:30","tl6.heading":"We vieren!",
    "tl6.desc":"Het gedeelte waar we allemaal naar uitkijken. Speeches, een echte Toast & Roast, misschien een spel of twee — en dan gaat de dansvloer open tot 00:30.",

    "accom.eyebrow":"Waar overnachten",
    "accom.title":"Overnachten",
    "accom.sub":"Vlakbij de locatie, makkelijk geregeld.",
    "accom.type.hotel":"Hotel","accom.type.camping":"Camping","accom.type.airbnb":"Airbnb",
    "accom.card1.name":"Hotel Zomers — Strandkamer","accom.card1.note":"Direct naast de locatie",
    "accom.card2.name":"Hotel Zomers — Strandhuisje","accom.card2.note":"Direct naast de locatie",
    "accom.card3.name":"Camping Bakkum","accom.card3.note":"Kampeerplaatsen & huisjes · 10 min fietsen",
    "accom.card4.name":"Met andere gasten","accom.card4.note":"Zelf regelen",
    "accom.book":"Bekijk opties",

    "dress.eyebrow":"Dresscode","dress.title":"Bright & Beachy",
    "dress.body":"Denk kleur, denk feest. We willen dat het terras eruitziet als zomer, wat de wolken ook vinden. Trek iets aan alsof jij de zon meebrengt.",

    "rsvp.hero.eyebrow":"Vier mee","rsvp.title":"RSVP",
    "rsvp.sub":"Laat ons weten of je erbij bent.",
    "rsvp.letter.title":"Ben je erbij?",
    "rsvp.letter.deadline":"Laat het ons weten vóór 1 december 2026.",
    "rsvp.letter.hint":"Vul het formulier hieronder in.",
    "rsvp.letter.cta":"RSVP hier",
    "form.names.label":"Naam(en)","form.names.ph":"Wie reageert er?",
    "form.attend.label":"Ben je erbij?","form.attend.label.pl":"Zijn jullie erbij?",
    "form.attend.yes":"Ik ben erbij","form.attend.yes.pl":"Wij zijn erbij",
    "form.attend.no":"Helaas niet","form.attend.no.pl":"Wij komen helaas niet",
    "form.diet.label":"Maaltijd & dieetwensen","form.diet.ph":"Allergieën, vegetarisch, veganistisch, iets wat we moeten weten…",
    "form.part.label":"Wil je een Toast & Roast of een andere bijdrage doen?",
    "form.part.yes":"Ja, ik doe mee!","form.part.yes.pl":"Ja, wij doen mee!",
    "form.part.no":"Ik pas","form.part.no.pl":"Wij passen",
    "form.notes.label":"Nog iets?","form.notes.ph":"Vragen, dingen die we moeten weten, of gewoon iets wat je kwijt wilt…",
    "form.phone.label":"Telefoonnummer","form.phone.ph":"Zodat Annabel met je kan afstemmen","form.phone.ph.pl":"Zodat Annabel met jullie kan afstemmen",
    "form.submit":"Verstuur reactie","form.sending":"Versturen…",
    "form.success.title":"Je staat erbij!",
    "form.success.body":"Bedankt voor je reactie — we kunnen niet wachten om je op de tiende te zien.",
    "form.success.decline":"Bedankt voor je bericht.",
    "form.success.decline.body":"Jammer dat je er niet bij kunt zijn.",
    "form.error":"Er ging iets mis. Probeer het opnieuw.",
    "form.backhome":"Terug naar home",
    "form.alertname":"Vul eerst je naam in.",
    "form.prefill.notice":"We hebben je eerdere reactie gevonden — pas aan wat je wilt.",
    "mail.subject":"Trouwen RSVP — Nadja & Julius",
    "mail.l.names":"Naam(en)","mail.l.attend":"Aanwezig","mail.l.diet":"Maaltijd / dieet","mail.l.part":"Toast & Roast / bijdrage",
    "mail.yes":"Is erbij","mail.no":"Helaas niet aanwezig","mail.blank":"—",
    "gate.title":"Jouw uitnodiging",
    "gate.sub":"Vul de code van je uitnodiging in om door te gaan.",
    "gate.code.label":"Uitnodigingscode","gate.code.ph":"Jouw persoonlijke code",
    "gate.submit":"Doorgaan","gate.looking":"Uitnodiging zoeken…",
    "gate.error":"Code niet herkend. Controleer je uitnodiging en probeer opnieuw.",
    "gate.nope":"Code kwijt? Stuur ons een berichtje.",
    "gate.welcome.sub.one":"We hebben een plek voor je gereserveerd",
    "gate.welcome.sub.many":"We hebben {n} plekken voor jullie gereserveerd",
    "form.guests.label":"Voor hoeveel personen mogen we een plek reserveren?",
    "form.guests.hint":"max {n}",
    "gate.welcome.dear":"Beste",
    "gate.welcome.greeting":"We kunnen niet wachten om met jullie te vieren!",
    "gate.hero.eyebrow":"10 juni 2027 · Strand Deining",
    /* ── Avond (avond.html) ── */
    "avond.meta.title":"De Avond — Nadja & Julius",
    "avond.hero.eyebrow":"Voor onze avondgasten",
    "avond.hero.invited":"Je bent uitgenodigd op ons avondfeest",
    "avond.hero.invited.pl":"Jullie zijn uitgenodigd op ons avondfeest",
    "avond.hero.sub":"Kom met ons dansen aan zee.",
    "avond.hero.date":"Do 10 juni 2027",
    "avond.hero.time":"Vanaf 20:15",
    "avond.welcome.eyebrow":"01 — Welkom",
    "avond.welcome.title":"Wat fijn dat je erbij bent",
    "avond.welcome.title.pl":"Wat fijn dat jullie erbij zijn",
    "avond.welcome.body":"De glazen worden bijgevuld, de zon zakt langzaam richting de Noordzee en de dansvloer gaat zo open. Dit is het moment waar we het hele jaar naar hebben uitgekeken — en we vieren het graag met jou.",
    "avond.welcome.body.pl":"De glazen worden bijgevuld, de zon zakt langzaam richting de Noordzee en de dansvloer gaat zo open. Dit is het moment waar we het hele jaar naar hebben uitgekeken — en we vieren het graag met jullie.",
    "avond.facts.when":"Wanneer",
    "avond.facts.whenV":"10 juni",
    "avond.facts.whenS":"Donderdag 2027",
    "avond.facts.arrive":"Inloop",
    "avond.facts.arriveS":"Feest tot 00:30",
    "avond.facts.where":"Waar",
    "avond.facts.dress":"Dresscode",
    "avond.facts.dressS":"Kleur, kleur, kleur",
    "avond.prog.eyebrow":"02 — Programma",
    "avond.prog.title":"De avond",
    "avond.tl1.time":"20:15",
    "avond.tl1.heading":"Je komt aan!",
    "avond.tl1.desc":"Schuif aan op het terras, pak een drankje en kom ons even gedag zeggen. Je bent precies op tijd voor het leukste deel van de dag.",
    "avond.tl2.time":"20:30",
    "avond.tl2.heading":"Toast & Roast",
    "avond.tl2.desc":"Speeches, verhalen, misschien een spel of twee. Hier mag van alles gezegd worden — liefst met een glas in de hand.",
    "avond.tl3.time":"Daarna",
    "avond.tl3.heading":"We dansen!",
    "avond.tl3.desc":"De dansvloer gaat open. Schoenen mogen uit, het zand ligt er toch al.",
    "avond.tl4.time":"00:30",
    "avond.tl4.heading":"De laatste dans",
    "avond.tl4.desc":"Nog één nummer, nog één keer proosten — en dan sluiten we samen deze dag af.",
    "avond.dress.eyebrow":"03 — Dresscode",
    "avond.dress.tip":"'s Avonds kan het aan zee fris worden: neem een jasje of vest mee, en schoenen waarmee je ook door het zand kunt.",
    "avond.loc.eyebrow":"04 — Locatie & overnachten",
    "avond.loc.sub":"Direct aan zee, met het terras als dansvloer. Blijf je slapen? Deze plekken zijn vlakbij.",
    "avond.loc.maps":"Bekijk op Maps",
    "avond.rsvp.eyebrow":"05 — RSVP",
    "avond.rsvp.title":"Ben je erbij?",
    "avond.rsvp.title.pl":"Zijn jullie erbij?",
    "avond.gift.eyebrow":"06 — Het cadeau"
  },
  de:{
    "nav.home":"Start","nav.day":"Der Tag","nav.rsvp":"Rückmeldung",
    "hero.eyebrow":"Wir heiraten",
    "hero.date":"10. Juni 2027","hero.place":"Strand Deining · Castricum",
    "hero.scroll":"Scrollen",
    "welcome.eyebrow":"Willkommen","welcome.title":"Feiert mit uns",
    "welcome.body":"Wir heiraten! Und wir wollen alle unsere Liebsten an einem Ort. Zusammen essen, trinken, anstoßen und lachen — und danach tanzen, bis die Beine nicht mehr mitmachen. Wir hoffen, ihr seid dabei!",
    "welcome.cta":"Lasst uns wissen, ob ihr dabei seid",
    "count.eyebrow":"Countdown","count.title":"Bis wir „Ja“ sagen","count.days":"Tage","count.hours":"Stunden","count.minutes":"Minuten","count.seconds":"Sekunden","count.over":"Heute ist der große Tag!",
    "details.eyebrow":"Die Location",
    "details.when":"Wann","details.when.val":"Donnerstag, 10. Juni 2027","details.when.note":"Ab 14:30 Uhr bis spät in die Nacht",
    "details.where":"Wo","details.where.val":"Strand Deining","details.where.note":"Am Strand von Castricum aan Zee",
    "details.map":"Auf Maps ansehen",
    "gallery.eyebrow":"Wir beide",
    "dayteaser.eyebrow":"Der Tag","dayteaser.title":"So läuft der Tag ab",
    "dayteaser.body":"Vom ersten Empfang bis zum letzten Tanz — das alles haben wir für den zehnten Juni geplant.",
    "dayteaser.cta":"Zum Programm",
    "rsvpband.title":"Feiert ihr mit uns?",
    "rsvpband.body":"Wir freuen uns sehr über eure Rückmeldung.",
    "rsvpband.cta":"Jetzt antworten",
    "footer.tag":"Wir freuen uns drauf mit euch zu feiern!",

    "honey.eyebrow":"Das Geschenk",
    "honey.title":"Wunschliste? Simpel.",
    "honey.body":"Wir wünschen uns mehr Stempel in unseren Reisepässen. Wenn ihr uns etwas schenken möchtet, dann am liebsten einen Beitrag zu unserer Hochzeitsreise.",
    "honey.cta":"Zur Hochzeitsreise beitragen",

    "day.hero.eyebrow":"10. Juni 2027 · Strand Deining",
    "day.hero.title":"Der Tag",
    "day.hero.sub":"Ein Tag am Strand — mit allen, die wir lieben.",
    "schedule.eyebrow":"Programm","schedule.title":"Der Tagesablauf",

    "tl1.time":"14:30 – 15:00","tl1.heading":"Wir kommen an!",
    "tl1.desc":"Willkommen auf unserer Hochzeit. Schnappt euch ein Willkommensgetränk, zieht die Schuhe aus und genießt das Meer. Die Trauung beginnt um drei — macht es euch bis dahin gemütlich.",
    "tl2.time":"15:00 – 16:00","tl2.heading":"Wir sagen Ja!",
    "tl2.desc":"Der große Moment. Wir sagen Ja mit den Füßen im Sand und der Nordsee als Kulisse — genau so, wie wir es uns immer vorgestellt haben.",
    "tl3.time":"16:00 – 16:30","tl3.heading":"Wir stoßen an!",
    "tl3.desc":"Korken knallen, Gläser heben. Ein Moment zum Feiern, um durchzuatmen und es wirklich sacken zu lassen — wir sind verheiratet.",
    "tl4.time":"16:30 – 18:00","tl4.heading":"Wir borreln!",
    "tl4.desc":"Drinks, Häppchen, ein Stück Hochzeitstorte und goldene Stunde auf der Terrasse. Der perfekte Moment zum Plaudern, um den Blick aufs Meer zu genießen und den Nachmittag in den Abend gleiten zu lassen.",
    "tl5.time":"18:00 – 20:30","tl5.heading":"Wir essen!",
    "tl5.desc":"Frisch vom Grill. Wir sind am Strand, also machen wir es richtig — ein echtes Festmahl mit Meeresluft, guten Drinks und den Menschen, die wir am meisten lieben.",
    "tl6.time":"20:30 – 00:30","tl6.heading":"Wir feiern!",
    "tl6.desc":"Der Teil, auf den wir alle gewartet haben. Reden, ein richtiger Toast & Roast, vielleicht ein Spiel oder zwei — und dann öffnet sich die Tanzfläche und bleibt offen bis 00:30.",

    "accom.eyebrow":"Wo übernachten",
    "accom.title":"Unterkunft",
    "accom.sub":"Nah an der Location, einfach zu planen.",
    "accom.type.hotel":"Hotel","accom.type.camping":"Camping","accom.type.airbnb":"Airbnb",
    "accom.card1.name":"Hotel Zomers — Strandzimmer","accom.card1.note":"Direkt neben der Location",
    "accom.card2.name":"Hotel Zomers — Strandhaus","accom.card2.note":"Direkt neben der Location",
    "accom.card3.name":"Camping Bakkum","accom.card3.note":"Stellplätze & Häuschen · 10 Min. mit dem Rad",
    "accom.card4.name":"Mit anderen Gästen","accom.card4.note":"Selbst organisieren",
    "accom.book":"Optionen ansehen",

    "dress.eyebrow":"Dresscode","dress.title":"Bright & Beachy",
    "dress.body":"Denkt an Farbe, denkt ans Feiern. Wir wollen, dass die Terrasse aussieht wie Sommer — egal, was die Wolken denken. Zieht etwas an, als würdet ihr selbst die Sonne mitbringen.",

    "rsvp.hero.eyebrow":"Feiert mit","rsvp.title":"RSVP",
    "rsvp.sub":"Bitte gebt uns Bescheid, ob ihr dabei seid.",
    "rsvp.letter.title":"Seid ihr dabei?",
    "rsvp.letter.deadline":"Bitte gebt uns bis zum 1. Dezember 2026 Bescheid.",
    "rsvp.letter.hint":"Füllt einfach das Formular unten aus.",
    "rsvp.letter.cta":"RSVP hier",
    "form.names.label":"Name(n)","form.names.ph":"Wer antwortet?",
    "form.attend.label":"Bist du dabei?","form.attend.label.pl":"Seid ihr dabei?",
    "form.attend.yes":"Ich bin dabei","form.attend.yes.pl":"Wir sind dabei",
    "form.attend.no":"Leider nicht","form.attend.no.pl":"Wir kommen leider nicht",
    "form.diet.label":"Essen & Ernährungswünsche","form.diet.ph":"Allergien, vegetarisch, vegan, alles was wir wissen sollten…",
    "form.part.label":"Möchtest du einen Toast & Roast oder einen anderen Beitrag machen?",
    "form.part.yes":"Ja, ich mache mit!","form.part.yes.pl":"Ja, wir machen mit!",
    "form.part.no":"Ich passe","form.part.no.pl":"Wir passen",
    "form.notes.label":"Sonst noch etwas?","form.notes.ph":"Fragen, Dinge, die wir wissen sollten, oder einfach etwas, das euch beschäftigt…",
    "form.phone.label":"Telefonnummer","form.phone.ph":"Damit Annabel sich mit dir abstimmen kann","form.phone.ph.pl":"Damit Annabel sich mit euch abstimmen kann",
    "form.submit":"Antwort senden","form.sending":"Senden…",
    "form.success.title":"Du bist dabei!",
    "form.success.body":"Danke für deine Rückmeldung — wir können es kaum erwarten, euch am Zehnten zu sehen.",
    "form.success.decline":"Danke für deine Nachricht.",
    "form.success.decline.body":"Schade, dass du nicht dabei sein kannst.",
    "form.error":"Etwas ist schiefgelaufen. Bitte versuche es nochmal.",
    "form.backhome":"Zurück zur Startseite",
    "form.alertname":"Bitte trag zuerst deinen Namen ein.",
    "form.prefill.notice":"Wir haben eure frühere Antwort gefunden — ändert, was ihr möchtet.",
    "mail.subject":"Hochzeit RSVP — Nadja & Julius",
    "mail.l.names":"Name(n)","mail.l.attend":"Teilnahme","mail.l.diet":"Essen / Ernährung","mail.l.part":"Toast & Roast / Beitrag",
    "mail.yes":"Ist dabei","mail.no":"Leider nicht dabei","mail.blank":"—",
    "gate.title":"Deine Einladung",
    "gate.sub":"Gib den Code von deiner Einladung ein, um fortzufahren.",
    "gate.code.label":"Einladungscode","gate.code.ph":"Dein persönlicher Code",
    "gate.submit":"Weiter","gate.looking":"Einladung wird gesucht…",
    "gate.error":"Code nicht erkannt. Überprüfe deine Einladung und versuche es nochmal.",
    "gate.nope":"Code nicht zur Hand? Schreib uns einfach.",
    "gate.welcome.sub.one":"Wir haben einen Platz für dich reserviert",
    "gate.welcome.sub.many":"Wir haben {n} Plätze für euch reserviert",
    "form.guests.label":"Für wie viele dürfen wir einen Platz reservieren?",
    "form.guests.hint":"max {n}",
    "gate.welcome.dear":"Liebe",
    "gate.welcome.greeting":"Wir können es kaum erwarten, mit euch zu feiern!",
    "gate.hero.eyebrow":"10. Juni 2027 · Strand Deining",
    /* ── Avond (avond.html) ── */
    "avond.meta.title":"Der Abend — Nadja & Julius",
    "avond.hero.eyebrow":"Für unsere Abendgäste",
    "avond.hero.invited":"Du bist zu unserer Abendparty eingeladen",
    "avond.hero.invited.pl":"Ihr seid zu unserer Abendparty eingeladen",
    "avond.hero.sub":"Komm mit uns am Meer tanzen.",
    "avond.hero.date":"Do 10. Juni 2027",
    "avond.hero.time":"Ab 20:15",
    "avond.welcome.eyebrow":"01 — Willkommen",
    "avond.welcome.title":"Schön, dass du dabei bist",
    "avond.welcome.title.pl":"Schön, dass ihr dabei seid",
    "avond.welcome.body":"Die Gläser werden nachgefüllt, die Sonne sinkt langsam Richtung Nordsee und gleich geht die Tanzfläche auf. Auf diesen Moment haben wir uns das ganze Jahr gefreut — und wir feiern ihn gern mit dir.",
    "avond.welcome.body.pl":"Die Gläser werden nachgefüllt, die Sonne sinkt langsam Richtung Nordsee und gleich geht die Tanzfläche auf. Auf diesen Moment haben wir uns das ganze Jahr gefreut — und wir feiern ihn gern mit euch.",
    "avond.facts.when":"Wann",
    "avond.facts.whenV":"10. Juni",
    "avond.facts.whenS":"Donnerstag 2027",
    "avond.facts.arrive":"Ankunft",
    "avond.facts.arriveS":"Party bis 00:30",
    "avond.facts.where":"Wo",
    "avond.facts.dress":"Dresscode",
    "avond.facts.dressS":"Farbe, Farbe, Farbe",
    "avond.prog.eyebrow":"02 — Programm",
    "avond.prog.title":"Der Abend",
    "avond.tl1.time":"20:15",
    "avond.tl1.heading":"Ankommen!",
    "avond.tl1.desc":"Such dir einen Platz auf der Terrasse, schnapp dir einen Drink und sag kurz hallo. Du kommst genau richtig zum schönsten Teil des Tages.",
    "avond.tl2.time":"20:30",
    "avond.tl2.heading":"Toast & Roast",
    "avond.tl2.desc":"Reden, Geschichten, vielleicht ein, zwei Spiele. Alles ist erlaubt — am liebsten mit einem Glas in der Hand.",
    "avond.tl3.time":"Danach",
    "avond.tl3.heading":"Wir tanzen!",
    "avond.tl3.desc":"Die Tanzfläche ist eröffnet. Schuhe dürfen aus — der Sand ist ja eh schon da.",
    "avond.tl4.time":"00:30",
    "avond.tl4.heading":"Der letzte Tanz",
    "avond.tl4.desc":"Noch ein Lied, noch einmal anstoßen — und dann lassen wir diesen Tag gemeinsam ausklingen.",
    "avond.dress.eyebrow":"03 — Dresscode",
    "avond.dress.tip":"Abends kann es am Meer frisch werden: Bring eine Jacke oder Strickjacke mit, und Schuhe, mit denen du auch durch den Sand laufen kannst.",
    "avond.loc.eyebrow":"04 — Location & Übernachten",
    "avond.loc.sub":"Direkt am Meer, mit der Terrasse als Tanzfläche. Du bleibst über Nacht? Diese Orte sind ganz in der Nähe.",
    "avond.loc.maps":"Auf Maps ansehen",
    "avond.rsvp.eyebrow":"05 — RSVP",
    "avond.rsvp.title":"Bist du dabei?",
    "avond.rsvp.title.pl":"Seid ihr dabei?",
    "avond.gift.eyebrow":"06 — Das Geschenk"
  }
};

const LANGS = ["de","nl","en"];
let LANG = (function(){
  // 1. ?lang=XX in the URL takes priority (and persists)
  try{
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if(LANGS.includes(urlLang)){
      try{ localStorage.setItem("weddingLang", urlLang); }catch(e){}
      return urlLang;
    }
  }catch(e){}
  // 2. Persisted choice from a previous visit
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
  // Re-apply personalization after language switch
  if(window._rsvpGuest) showRsvpForm(window._rsvpGuest);
}

function setLang(l){
  if(!LANGS.includes(l)) return;
  LANG = l;
  try{ localStorage.setItem("weddingLang", l); }catch(e){}
  applyLang();
}

document.addEventListener("DOMContentLoaded", ()=>{
  applyLang();
  initGate();
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

  // RSVP form -> Airtable
  const form = document.getElementById("rsvp-form");
  if(form){
    form.addEventListener("submit", async (e)=>{
      e.preventDefault();
      const names = (form.names ? (form.names.value||"").trim() : "");

      const btn = document.getElementById("rsvp-submit");
      const errEl = document.getElementById("rsvp-error");
      if(errEl) errEl.style.display = "none";
      if(btn){ btn.disabled = true; btn.textContent = t("form.sending"); }

      const attending = (form.querySelector('input[name="attend"]:checked')||{}).value;

      const guestCount = attending === "yes"
        ? (parseInt((document.getElementById("f-guests")||{}).value) || 1)
        : 0;
      const payload = {
        fields: {
          names:  names,
          attend: attending || "",
          guests: guestCount,
          code:   (window._rsvpGuest || {}).code || "",
          diet:   (form.diet  ? form.diet.value.trim()  : ""),
          part:   (form.querySelector('input[name="part"]:checked')||{}).value || "",
          phone:  (form.phone ? form.phone.value.trim() : ""),
          notes:  (form.notes ? form.notes.value.trim() : "")
        }
      };

      if(RSVP_LIST === "avond"){ delete payload.fields.diet; delete payload.fields.part; delete payload.fields.phone; }

      try{
        const res = await fetch(RSVP_EP, {
          method:"POST",
          headers:{
            "Authorization":"Bearer " + AIRTABLE_TOKEN,
            "Content-Type":"application/json"
          },
          body: JSON.stringify(payload)
        });
        if(res.ok){
          form.style.display = "none";
          const introEl   = document.getElementById("rsvp-intro");
          const successEl = document.getElementById("rsvp-success");
          if(introEl) introEl.style.display = "none";
          if(successEl){
            successEl.style.display = "";
            const titleEl = document.getElementById("rsvp-success-title");
            const bodyEl  = document.getElementById("rsvp-success-body");
            const isDecline = attending === "no";
            if(titleEl) titleEl.textContent = isDecline ? t("form.success.decline")      : t("form.success.title");
            if(bodyEl)  bodyEl.textContent  = isDecline ? t("form.success.decline.body") : t("form.success.body");
            if(!isDecline) launchConfetti();
          }
        } else {
          if(btn){ btn.disabled = false; btn.textContent = t("form.submit"); }
          if(errEl) errEl.style.display = "";
        }
      } catch(err){
        if(btn){ btn.disabled = false; btn.textContent = t("form.submit"); }
        if(errEl) errEl.style.display = "";
      }
    });
  }
});

/* ── Singular / plural form labels ── */
function applyPluralLabels(isPlural){
  // textContent elements
  var bases = ['form.attend.label','form.attend.yes','form.attend.no','form.part.yes','form.part.no',
               'avond.hero.invited','avond.welcome.title','avond.welcome.body','avond.rsvp.title'];
  bases.forEach(function(base){
    var target = isPlural ? base + '.pl' : base;
    document.querySelectorAll('[data-i18n="' + base + '"],[data-i18n="' + base + '.pl"]').forEach(function(el){
      el.setAttribute('data-i18n', target);
      var val = t(target);
      if(val && val !== target) el.textContent = val;
    });
  });
  // placeholder elements
  var phBases = ['form.phone.ph'];
  phBases.forEach(function(base){
    var target = isPlural ? base + '.pl' : base;
    document.querySelectorAll('[data-i18n-ph="' + base + '"],[data-i18n-ph="' + base + '.pl"]').forEach(function(el){
      el.setAttribute('data-i18n-ph', target);
      var val = t(target);
      if(val && val !== target) el.setAttribute('placeholder', val);
    });
  });
}

/* ── Invitee lookup ── */
async function lookupInviteeCode(code){
  const filter = encodeURIComponent(`LOWER({code})="${code.toLowerCase()}"`);
  const res = await fetch(INV_EP + "?filterByFormula=" + filter, {
    headers:{"Authorization":"Bearer " + AIRTABLE_READ_TOKEN}
  });
  if(!res.ok) throw new Error("API " + res.status);
  const data = await res.json();
  if(!data.records || !data.records.length) return null;
  const f = data.records[0].fields || {};
  return { name: f.name || "", seats: parseInt(f.seats) || 1, code: code.toLowerCase(), language: (f.language || "").toLowerCase() };
}

function showRsvpForm(guest){
  const gateEl  = document.getElementById("rsvp-gate");
  const innerEl = document.getElementById("rsvp-form-inner");
  if(gateEl)  gateEl.style.display  = "none";
  if(innerEl) innerEl.style.display = "";

  // Show personalized name display in the form section
  const nameHero    = document.getElementById("rsvp-name-hero");
  const nameDear    = document.getElementById("rsvp-name-dear");
  const nameDisplay = document.getElementById("rsvp-name-display");
  const nameSub     = document.getElementById("rsvp-name-sub");
  if(nameHero)    nameHero.style.display  = "";
  if(nameDear)    nameDear.textContent    = t("gate.welcome.dear");
  if(nameDisplay) nameDisplay.textContent = guest.name + ",";
  if(nameSub)     nameSub.textContent     = t("gate.welcome.greeting");

  // Avond page: personal greeting in the hero
  const avondGreet = document.getElementById("avond-greet");
  if(avondGreet){ avondGreet.textContent = t("gate.welcome.dear") + " " + guest.name + ","; avondGreet.hidden = false; }
  const avondInvited = document.getElementById("avond-invited");
  if(avondInvited && avondInvited.getAttribute("data-i18n") === "avond.hero.eyebrow"){
    avondInvited.setAttribute("data-i18n", "avond.hero.invited");
  }

  // Pre-fill hidden name field
  const namesInput = document.getElementById("f-names");
  if(namesInput) namesInput.value = guest.name;

  // Apply singular/plural labels based on seat count
  applyPluralLabels(guest.seats > 1);

  // Store guest globally for payload + stepper
  window._rsvpGuest = guest;

  // Stepper hint text
  const hintEl = document.getElementById("guests-hint");
  if(hintEl) hintEl.textContent = t("form.guests.hint").replace("{n}", guest.seats);

  // Default stepper to max seats (all invited guests assumed attending)
  const valEl   = document.getElementById("guests-val");
  const inputEl = document.getElementById("f-guests");
  const decBtn  = document.getElementById("guests-dec");
  const incBtn  = document.getElementById("guests-inc");
  if(valEl)   valEl.textContent = guest.seats;
  if(inputEl) inputEl.value    = guest.seats;
  if(decBtn)  decBtn.disabled  = guest.seats <= 1;
  if(incBtn)  incBtn.disabled  = true;
  /* Prefill any previous submission */
  prefillExistingResponse(guest.code);
}

/* ── Prefill form from existing RSVP submission ── */
async function prefillExistingResponse(code){
  if(!code) return;
  try{
    var formula = 'UPPER({code})="' + code.trim().toUpperCase().replace(/"/g,'') + '"';
    var url = RSVP_EP + '?filterByFormula=' + encodeURIComponent(formula) + '&sort%5B0%5D%5Bfield%5D=Created&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=1'; /* newest response first */
    var res = await fetch(url, { headers:{'Authorization':'Bearer ' + AIRTABLE_TOKEN} });
    if(!res.ok) return;
    var data = await res.json();
    if(!data.records || !data.records.length) return;
    var f = data.records[0].fields;
    /* Only prefill if an RSVP was actually submitted */
    if(!f.attend) return;

    /* Attend radio */
    var r = document.querySelector('input[name="attend"][value="'+f.attend+'"]');
    if(r){ r.checked = true; r.dispatchEvent(new Event('change')); }

    /* Guest count — support both 'guests' and '# guests' field names */
    var g = (f.guests !== undefined) ? f.guests : f['# guests'];
    if(g !== undefined && g !== null){
      var inp = document.getElementById('f-guests');
      var lbl = document.getElementById('guests-val');
      if(inp) inp.value = String(g);
      if(lbl) lbl.textContent = String(g);
    }

    /* Diet */
    if(f.diet){ var d=document.getElementById('f-diet'); if(d) d.value=f.diet; }

    /* Part radio */
    if(f.part){
      var p = document.querySelector('input[name="part"][value="'+f.part+'"]');
      if(p){ p.checked = true; p.dispatchEvent(new Event('change')); }
    }

    /* Phone */
    if(f.phone){ var ph=document.getElementById('f-phone'); if(ph) ph.value=f.phone; }

    /* Notes */
    if(f.notes){ var n=document.getElementById('f-notes'); if(n) n.value=f.notes; }

    /* Update submit button */
    var btn = document.getElementById('rsvp-submit');
    if(btn) btn.textContent = 'Update response';

    /* Notice banner — only shown for actual previous responders */
    var intro = document.getElementById('rsvp-intro');
    if(intro && !document.getElementById('prefill-notice')){
      var notice = document.createElement('p');
      notice.id = 'prefill-notice';
      notice.style.cssText = 'margin-top:.8rem;font-size:.82rem;color:var(--accent);text-align:center;letter-spacing:.04em';
      notice.textContent = t('form.prefill.notice');
      intro.appendChild(notice);
    }
  }catch(e){
    console.warn('[RSVP prefill]', e);
  }
}

function initGate(){
  // Skip gate if already verified this session
  const saved = sessionStorage.getItem(GUEST_KEY);
  let linkCode = "";
  try{ linkCode = (new URLSearchParams(window.location.search).get("code") || "").trim().toLowerCase(); }catch(e){}
  if(saved){
    try{
      const g = JSON.parse(saved);
      // a different ?code= in the link wins over the guest remembered in this tab
      if(!linkCode || linkCode === (g.code || "")){ showRsvpForm(g); return; }
    }catch(e){}
  }

  const submitBtn = document.getElementById("gate-submit");
  const codeInput = document.getElementById("f-code");
  const gateError = document.getElementById("gate-error");
  if(!submitBtn) return; // not on RSVP page

  async function tryCode(){
    const code = (codeInput ? codeInput.value : "").trim();
    if(!code){ if(codeInput) codeInput.focus(); return; }
    submitBtn.disabled = true;
    submitBtn.textContent = t("gate.looking");
    if(gateError) gateError.style.display = "none";
    try{
      const guest = await lookupInviteeCode(code);
      if(!guest){
        submitBtn.disabled = false;
        submitBtn.textContent = t("gate.submit");
        if(gateError) gateError.style.display = "";
        return;
      }
      // Switch to the guest's preferred language before showing the form
      if(guest.language && LANGS.includes(guest.language)) setLang(guest.language);
      sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
      showRsvpForm(guest);
    }catch(err){
      submitBtn.disabled = false;
      submitBtn.textContent = t("gate.submit");
      if(gateError) gateError.style.display = "";
    }
  }

  submitBtn.addEventListener("click", tryCode);
  if(codeInput) codeInput.addEventListener("keydown", function(e){ if(e.key==="Enter") tryCode(); });

  // Auto-fill + auto-submit from ?code=XXXX in the URL
  try{
    const urlCode = new URLSearchParams(window.location.search).get("code");
    if(urlCode && codeInput){
      codeInput.value = urlCode;
      setTimeout(tryCode, 400); // slight delay so the page has painted
    }
  }catch(e){}
}

/* ── Seat stepper (called from onclick in rsvp.html) ── */
function stepGuests(delta){
  const max    = (window._rsvpGuest||{}).seats || 1;
  const valEl  = document.getElementById("guests-val");
  const input  = document.getElementById("f-guests");
  const decBtn = document.getElementById("guests-dec");
  const incBtn = document.getElementById("guests-inc");
  const cur    = parseInt((valEl||{}).textContent) || 1;
  const next   = Math.min(max, Math.max(1, cur + delta));
  if(valEl)   valEl.textContent = next;
  if(input)   input.value      = next;
  if(decBtn)  decBtn.disabled  = next <= 1;
  if(incBtn)  incBtn.disabled  = next >= max;
}

/* ── Confetti ── */
function launchConfetti(){
  var canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;";
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  var palette = ["#C4A882","#E8DFD0","#DDD0BC","#A88B68","#F5EFE6","#fff","#D9C9B1","#c8b898"];
  var pieces  = [];
  for(var i = 0; i < 160; i++){
    pieces.push({
      x:   Math.random() * canvas.width,
      y:  -20 - Math.random() * canvas.height * .6,
      w:   5  + Math.random() * 9,
      h:   3  + Math.random() * 5,
      col: palette[Math.floor(Math.random() * palette.length)],
      vx:  -1.5 + Math.random() * 3,
      vy:  2.2  + Math.random() * 3.5,
      rot: Math.random() * 360,
      rs:  -3   + Math.random() * 6
    });
  }
  var frame = 0, total = 220;
  function tick(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var alpha = frame > 150 ? 1 - (frame - 150) / 70 : 1;
    pieces.forEach(function(p){
      p.y += p.vy; p.x += p.vx; p.rot += p.rs;
      ctx.save();
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.col;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if(frame < total) requestAnimationFrame(tick); else canvas.remove();
  }
  requestAnimationFrame(tick);
}
