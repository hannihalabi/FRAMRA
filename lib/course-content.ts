export type CourseExample = {
  speaker: "Du" | "Kund";
  text: string;
};

export type CourseStep = {
  id: string;
  title: string;
  kicker: string;
  lead: string;
  paragraphs: readonly string[];
  formula?: readonly string[];
  examples?: readonly CourseExample[];
  keyPoints?: readonly string[];
  callout?: string;
  objections?: readonly {
    objection: string;
    response: string;
  }[];
  quiz: {
    question: string;
    options: readonly string[];
    correctIndex: number;
    explanation: string;
  };
};

export const courseSteps: readonly CourseStep[] = [
  {
    id: "icebreak",
    title: "Icebreak",
    kicker: "Steg 1 • Starta naturligt",
    lead: "Få igång ett äkta samtal innan du går vidare.",
    paragraphs: [
      "En bra icebreak bygger på något du faktiskt ser. Den ska kännas relevant för situationen, inte inövad eller påklistrad.",
    ],
    examples: [
      { speaker: "Du", text: "Snygg bil, är det din?" },
      { speaker: "Du", text: "Söt hund, vad är det för ras?" },
      {
        speaker: "Du",
        text: "Fint ni har det i trädgården, vem är det som har så gröna fingrar?",
      },
    ],
    callout: "Kommentera bara något om det känns naturligt. Målet är kontakt, inte en perfekt replik.",
    quiz: {
      question: "Vilken öppning följer icebreak-principen bäst?",
      options: [
        "Jag har ett erbjudande som du måste höra.",
        "Söt hund, vad är det för ras?",
        "Har du två minuter för en presentation?",
        "Jag lovar att det här går snabbt.",
      ],
      correctIndex: 1,
      explanation:
        "Rätt. Kommentaren utgår från något du ser och öppnar för ett naturligt svar utan att pressa kunden.",
    },
  },
  {
    id: "jingel",
    title: "Jingel",
    kicker: "Steg 2 • Sätt ramen",
    lead: "Berätta vem du är, varför du är där och öppna samtalet.",
    paragraphs: [
      "Lär dig strukturen, inte varje ord. Då låter du trygg och tydlig utan att samtalet känns mekaniskt.",
    ],
    formula: ["Vem du är", "Varför du är där", "Öppna samtalet"],
    examples: [
      { speaker: "Du", text: "Tjena, Jack här från FRAMRA." },
      {
        speaker: "Du",
        text: "Vi är ute i området idag och hjälper hushåll att se över brandskyddet.",
      },
      {
        speaker: "Du",
        text: "Hur ser det ut hos er idag – har ni släckare och brandfilt hemma?",
      },
    ],
    callout: "Viktigt: lär dig ordningen och syftet. Du behöver inte memorera varje formulering.",
    quiz: {
      question: "Vilken ordning ska jingeln följa?",
      options: [
        "Pris → produkt → namn",
        "Fråga → avslut → presentation",
        "Vem du är → varför du är där → öppna samtalet",
        "Produkt → behov → vem du är",
      ],
      correctIndex: 2,
      explanation:
        "Rätt. Den ordningen ger kunden sammanhang och avslutas med en fråga som bjuder in till dialog.",
    },
  },
  {
    id: "behov",
    title: "Behov",
    kicker: "Steg 3 • Förstå kunden",
    lead: "Ställ en fråga, lyssna och följ upp.",
    paragraphs: [
      "Du ska inte gissa vad kunden behöver. Börja med kundens svar och använd relevanta följdfrågor för att förstå nuläget.",
    ],
    examples: [
      { speaker: "Kund", text: "Ja, vi har en släckare." },
      { speaker: "Du", text: "Vet du ungefär hur gammal den är?" },
    ],
    callout: "Bra behovsanalys handlar mer om att lyssna än att prata.",
    quiz: {
      question: "Kunden säger att de redan har en brandsläckare. Vad gör du?",
      options: [
        "Byter direkt till att sälja en brandfilt.",
        "Säger att deras nuvarande släckare troligen är dålig.",
        "Frågar hur gammal släckaren är och lyssnar på svaret.",
        "Går direkt på avslut.",
      ],
      correctIndex: 2,
      explanation:
        "Rätt. En relevant följdfråga hjälper dig förstå det verkliga behovet utan att anta eller överdriva.",
    },
  },
  {
    id: "accept-behov",
    title: "Accept på behov",
    kicker: "Steg 4 • Skapa samsyn",
    lead: "Bekräfta behovet innan du rekommenderar något.",
    paragraphs: [
      "Sammanfatta vad du har hört och låt kunden bekräfta att ni har förstått situationen på samma sätt.",
    ],
    examples: [
      {
        speaker: "Du",
        text: "Så ni har brandvarnare, men ingen släckare eller brandfilt idag?",
      },
      { speaker: "Kund", text: "Precis." },
    ],
    callout: "Rekommendera inte en lösning på ett problem som kunden själv inte håller med om finns.",
    quiz: {
      question: "Varför ska kunden bekräfta behovet?",
      options: [
        "För att samtalet ska bli längre.",
        "För att ni ska vara överens om vad som faktiskt saknas.",
        "För att kunden ska lova att köpa.",
        "För att du ska kunna undvika fler frågor.",
      ],
      correctIndex: 1,
      explanation:
        "Rätt. Samsyn om behovet gör rekommendationen relevant och förhindrar att du försöker lösa fel problem.",
    },
  },
  {
    id: "visa-losningen",
    title: "Visa lösningen",
    kicker: "Steg 5 • Koppla till nyttan",
    lead: "Presentera produkten som löser behovet ni nyss bekräftade.",
    paragraphs: [
      "Fokusera på vad lösningen gör för kunden. Visa gärna produkten samtidigt så att rekommendationen blir konkret.",
    ],
    examples: [
      {
        speaker: "Du",
        text: "Då hade jag rekommenderat det här paketet. Då får ni både släckaren ni saknar och brandfilten vi precis pratade om.",
      },
    ],
    callout: "Knyt alltid rekommendationen till kundens uttalade behov – inte till en generell säljpitch.",
    quiz: {
      question: "Vad ska stå i centrum när du visar lösningen?",
      options: [
        "Alla tekniska detaljer du kan.",
        "Det dyraste paketet.",
        "Nyttan som svarar på kundens bekräftade behov.",
        "Hur många andra som har köpt samma dag.",
      ],
      correctIndex: 2,
      explanation:
        "Rätt. Lösningen blir begriplig när den kopplas direkt till behovet kunden redan har bekräftat.",
    },
  },
  {
    id: "accept-losning",
    title: "Accept på lösningen",
    kicker: "Steg 6 • Kontrollera träffen",
    lead: "Låt kunden bekräfta att lösningen känns rätt.",
    paragraphs: [
      "När kunden har accepterat både behovet och lösningen blir avslutet nästa naturliga steg, inte en ny diskussion.",
    ],
    examples: [
      {
        speaker: "Du",
        text: "Det hade löst det vi precis pratade om, eller hur?",
      },
      { speaker: "Kund", text: "Ja." },
    ],
    quiz: {
      question: "Vilken fråga söker accept på lösningen?",
      options: [
        "Vill du höra om alla våra andra produkter?",
        "Det hade löst det vi precis pratade om, eller hur?",
        "Tycker du att brandsäkerhet är viktigt?",
        "Kan jag få dina uppgifter direkt?",
      ],
      correctIndex: 1,
      explanation:
        "Rätt. Frågan kontrollerar att rekommendationen faktiskt löser behovet som ni har pratat om.",
    },
  },
  {
    id: "avslut",
    title: "Avslut",
    kicker: "Steg 7 • Fråga tydligt",
    lead: "Gå på affären – och ge kunden tid att svara.",
    paragraphs: [
      "När behov och lösning är bekräftade ska avslutet vara enkelt och tydligt. Undvik att fortsätta argumentera efter frågan.",
    ],
    examples: [{ speaker: "Du", text: "Bra. Då kör vi på det paketet." }],
    formula: ["Fråga", "Var tyst", "Lyssna"],
    callout: "Nybörjare pratar ofta bort sitt eget avslut. Ställ frågan och lämna plats för kundens svar.",
    quiz: {
      question: "Vad gör du direkt efter att du har frågat om affären?",
      options: [
        "Börjar om presentationen.",
        "Lägger till en rabatt innan kunden svarar.",
        "Är tyst och lyssnar på kundens svar.",
        "Byter ämne för att minska pressen.",
      ],
      correctIndex: 2,
      explanation:
        "Rätt. Kunden behöver få tid att tänka och svara. Mer prat kan skapa osäkerhet eller dölja den riktiga invändningen.",
    },
  },
  {
    id: "invandningar",
    title: "Invändningar",
    kicker: "Steg 8 • Förstå hindret",
    lead: "Styr orsaken, bemöt den och gå sedan på ett nytt avslut.",
    paragraphs: [
      "En invändning är inte alltid den verkliga orsaken. Ställ en lugn fråga som hjälper kunden att förklara vad tvekan faktiskt handlar om.",
    ],
    formula: ["Styr orsaken", "Bemöt", "Nytt avslut"],
    examples: [
      { speaker: "Kund", text: "Jag behöver fundera." },
      {
        speaker: "Du",
        text: "Jag fattar. Skulle du säga att det mesta hänger på priset, eller känns det mer som att skyddet ni redan har har fungerat bra hittills?",
      },
    ],
    objections: [
      {
        objection: "Det är för dyrt",
        response:
          "Ta reda på om det är totalsumman eller paketets omfattning. Anpassa lösningen om behovet fortfarande finns.",
      },
      {
        objection: "Jag ska tänka",
        response:
          "Styr mot de vanligaste verkliga hindren: priset eller om kunden tycker att nuvarande skydd räcker.",
      },
      {
        objection: "Vi har redan",
        response:
          "Bekräfta det. Ta sedan reda på vad de har, hur gammalt det är och om något saknas.",
      },
    ],
    quiz: {
      question: "Kunden säger: ”Jag behöver fundera.” Vilket svar är bäst?",
      options: [
        "Okej, då går jag direkt.",
        "Det finns inget att fundera på.",
        "Är det främst priset eller känns det som att ert nuvarande skydd räcker?",
        "Jag sänker priset direkt.",
      ],
      correctIndex: 2,
      explanation:
        "Rätt. Frågan hjälper dig förstå den verkliga orsaken utan att argumentera eller gissa.",
    },
  },
  {
    id: "sa-saljer-vi",
    title: "Så säljer vi",
    kicker: "Steg 9 • Tydligt och respektfullt",
    lead: "Ett tydligt avslut får aldrig bli oärligt eller respektlöst.",
    paragraphs: [
      "Att inte ge upp vid första tvekan är inte samma sak som att ignorera kunden. Styr samtalet, var saklig och respektera ett tydligt avslut.",
    ],
    keyPoints: [
      "Ge inte upp bara för att kunden tvekar.",
      "Argumentera inte mot kunden – styr samtalet med frågor.",
      "Var tydlig med pris, produkt och villkor.",
      "Överdriv inte risker och hitta inte på behov.",
      "När kunden tydligt avslutar samtalet: tacka och gå vidare.",
    ],
    callout: "Bra försäljning är tydlig, relevant och respektfull – även när svaret blir nej.",
    quiz: {
      question: "Kunden avslutar tydligt samtalet. Vad gör du?",
      options: [
        "Fortsätter tills kunden ger en ny anledning.",
        "Överdriver brandrisken för att få en sista chans.",
        "Tackar för tiden och går vidare.",
        "Blockerar dörren medan du sammanfattar erbjudandet.",
      ],
      correctIndex: 2,
      explanation:
        "Rätt. Ett tydligt nej eller avslut ska respekteras. Tacka för tiden och gå vidare professionellt.",
    },
  },
];
