/**
 * All company-specific copy lives here so verified information can be added
 * without changing the page structure. Square brackets mark placeholders.
 */
export const siteContent = {
  companyName: "Framra",
  hero: {
    titleLead: "Ditt nästa",
    titleAccent: "extrajobb.",
    titleEnd: "Börjar här.",
    description:
      "Vill du ha ett kul extrajobb där du lär dig försäljning från grunden och själv kan påverka vad du tjänar? Hos Framra möter du kunder ute på fältet och hjälper privatpersoner att stärka brandsäkerheten hemma.",
    primaryCta: "Skicka in ditt CV här",
    secondaryCta: "Läs mer om oss",
    artLabel: "Ditt nästa extrajobb",
    artWordLead: "Extra",
    artWordEnd: "kul!",
    artNoteLead: "Enkelt",
    artNoteEnd: "att ansöka",
  },
  intro: {
    label: "Vad Framra gör",
    title: "Direktförsäljning med fokus på brandsäkerhet.",
    body: "Framra är ett säljbolag som arbetar med direktförsäljning. Vårt största fokus ligger på brandsäkerhet för privatpersoner, och försäljningen sker ute på fältet där våra säljare möter kunder direkt vid dörren.",
  },
  servicesIntro: {
    label: "Vad vi säljer",
    title: "Brandsäkerhet för hemmet.",
    description:
      "Vi erbjuder produkter och färdiga paket som hjälper privatpersoner att bygga upp ett brandskydd i hemmet.",
  },
  services: [
    {
      number: "01",
      title: "Brandsläckare",
      description: "Brandsläckare för privatpersoner och användning i hemmet.",
      color: "purple",
    },
    {
      number: "02",
      title: "Brandfiltar",
      description: "Brandfiltar som en del av hemmets brandskydd.",
      color: "yellow",
    },
    {
      number: "03",
      title: "Brandvarnare",
      description: "Brandvarnare framtagna för privatpersoners hem.",
      color: "coral",
    },
    {
      number: "04",
      title: "Färdiga paket",
      description:
        "Paket som samlar flera av våra brandsäkerhetsprodukter.",
      color: "lime",
    },
  ],
  processIntro: {
    label: "Så fungerar jobbet",
    title: "Lär dig sälja. Påverka din lön.",
  },
  process: [
    {
      number: "1",
      title: "Lär dig från grunden",
      description:
        "Du behöver inte ha arbetat med försäljning tidigare. Du får lära dig grunderna och får löpande coachning för att utvecklas.",
    },
    {
      number: "2",
      title: "Möt kunder på fältet",
      description:
        "Försäljningen sker genom personliga möten med privatpersoner direkt vid dörren.",
    },
    {
      number: "3",
      title: "Påverka vad du tjänar",
      description:
        "Du får provision på det du säljer. Fler affärer, bättre försäljning och mer tid syns direkt i din lön.",
    },
  ],
  about: {
    title: "Vi ville göra extrajobb roligare.",
    body: "Framra startades med en tydlig vision: att skapa enkla extrajobb för personer som vill stärka sin ekonomi – utan att jobbet behöver kännas krångligt eller tråkigt.",
    bodySecondary: "För oss handlar det om mer än att tjäna extra pengar. Vi vill bygga en gemenskap där man utvecklas, har kul tillsammans och får chansen att vara med om aktiviteter och upplevelser, som resor utomlands.",
    facts: [
      "Enkelt att komma igång",
      "Extra pengar på ett roligare sätt",
      "Gemenskap, aktiviteter och upplevelser",
    ],
  },
  faq: [
    {
      question: "Behöver jag ha arbetat med försäljning tidigare?",
      answer:
        "Nej. Du får lära dig försäljning från grunden och får löpande coachning. Det viktiga är att du är beredd att lära dig och lägga ner arbetet.",
    },
    {
      question: "Hur tjänar jag pengar hos Framra?",
      answer:
        "Ersättningen är provisionsbaserad. Det innebär att du själv kan påverka vad du tjänar genom hur mycket du säljer, hur många affärer du gör och hur mycket tid du lägger in.",
    },
    {
      question: "Vad säljer jag?",
      answer:
        "Du säljer brandsläckare, brandfiltar, brandvarnare och färdiga paket med flera brandsäkerhetsprodukter.",
    },
    {
      question: "Var sker försäljningen?",
      answer:
        "Försäljningen sker ute på fältet där du träffar privatpersoner direkt vid dörren.",
    },
  ],
  contact: {
    email: "[E-postadress]",
    phone: "[Telefonnummer]",
    address: "[Adress eller serviceområde]",
  },
} as const;
