export type CourseExample = {
  speaker: "Du" | "Kund";
  text: string;
};

export type CourseStep = {
  id: string;
  title: string;
  lead: string;
  paragraphs: readonly string[];
  formula?: readonly string[];
  examples?: readonly CourseExample[];
  keyPoints?: readonly string[];
  callout?: string;
  calloutTitle?: string;
  objections?: readonly {
    objection: string;
    response: string;
    followup?: string;
  }[];
};

export const courseSteps: readonly CourseStep[] = [
  {
    id: "icebreak",
    title: "Icebreak",
    lead: "Få igång ett naturligt samtal.",
    paragraphs: [
      "Kommentera något du ser om det känns naturligt. Poängen är inte att använda en bestämd replik. Du ska hitta något naturligt i situationen som gör att samtalet kommer igång.",
    ],
    examples: [
      { speaker: "Du", text: "Snygg bil, är det din?" },
      { speaker: "Du", text: "Söt hund, vad är det för ras?" },
      {
        speaker: "Du",
        text: "Fint ni har det i trädgården, vem är det som har så gröna fingrar?",
      },
    ],
    calloutTitle: "Tänk på",
    callout:
      "Du behöver inte alltid använda en icebreak. Gör det när det känns naturligt. Målet är ett avslappnat samtal, inte att pressa fram en kommentar bara för att du lärt dig att göra det.",
  },
  {
    id: "jingel",
    title: "Jingel",
    lead: "Jingeln öppnar själva säljsamtalet.",
    paragraphs: ["Lär dig strukturen:"],
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
    calloutTitle: "Viktigt",
    callout:
      "Lär dig strukturen. Inte varje ord. Du ska kunna säga samma sak med dina egna ord och fortfarande behålla samma uppbyggnad.",
  },
  {
    id: "behov",
    title: "Behov",
    lead: "Ställ en fråga, lyssna och följ upp.",
    paragraphs: [
      "Här försöker du förstå vad kunden faktiskt har idag och vad som eventuellt saknas.",
    ],
    examples: [
      { speaker: "Kund", text: "Ja, vi har en släckare." },
      { speaker: "Du", text: "Vet du ungefär hur gammal den är?" },
    ],
    calloutTitle: "Varför?",
    callout:
      "Bara för att kunden säger att de har brandskydd betyder det inte att du redan förstår situationen. Ta reda på vad de har, hur gammalt det är och om något saknas. Lyssna på svaret innan du bestämmer vad du ska rekommendera.",
  },
  {
    id: "accept-behov",
    title: "Accept på behov",
    lead: "När du förstått situationen ska du bekräfta behovet tillsammans med kunden.",
    paragraphs: [
      "Ni ska båda vara överens om vad som faktiskt saknas innan du börjar rekommendera en lösning.",
    ],
    examples: [
      {
        speaker: "Du",
        text: "Så ni har brandvarnare, men ingen släckare eller brandfilt idag?",
      },
      { speaker: "Kund", text: "Precis." },
    ],
    calloutTitle: "Varför är detta viktigt?",
    callout:
      "Du vill inte börja rekommendera en lösning på ett problem som kunden själv inte håller med om finns. Först när kunden accepterat behovet går du vidare till lösningen.",
  },
  {
    id: "visa-losningen",
    title: "Visa lösningen",
    lead: "Nu presenterar du produkten eller paketet som löser behovet ni precis har pratat om.",
    paragraphs: [
      "Fokusera på nyttan och koppla rekommendationen direkt till det kunden själv berättat.",
    ],
    examples: [
      {
        speaker: "Du",
        text: "Då hade jag rekommenderat det här paketet. Då får ni både släckaren ni saknar och brandfilten vi precis pratade om.",
      },
    ],
    calloutTitle: "Visa produkten",
    callout:
      "Ha gärna brandfilten eller brandsläckaren i handen och låt kunden se vad du faktiskt pratar om. Presentera inte bara produkter på måfå. Lösningen ska hänga ihop med behovet ni precis identifierat.",
  },
  {
    id: "accept-losning",
    title: "Accept på lösningen",
    lead: "Innan du går på avslut vill du veta att kunden håller med om att lösningen faktiskt passar behovet.",
    paragraphs: [],
    examples: [
      { speaker: "Du", text: "Det hade löst det vi precis pratade om, eller hur?" },
      { speaker: "Kund", text: "Ja." },
    ],
    calloutTitle: "Vad har hänt nu?",
    callout:
      "Kunden har först accepterat behovet. Kunden har sedan accepterat lösningen. Därför blir avslutet nästa naturliga steg – inte början på en helt ny diskussion.",
  },
  {
    id: "avslut",
    title: "Avslut",
    lead: "Gå på affären.",
    paragraphs: ["När kunden accepterat både behovet och lösningen ska du gå på avslut."],
    examples: [{ speaker: "Du", text: "Bra. Då kör vi på det paketet." }],
    formula: ["Fråga", "Var tyst", "Lyssna"],
    calloutTitle: "Vid invändning",
    callout:
      "Om kunden kommer med en invändning går du inte tillbaka och börjar om hela presentationen. Styr orsaken → bemöt → gå på nytt avslut.",
    keyPoints: [
      "Nybörjare pratar ofta bort sitt eget avslut.",
      "När du har frågat – håll käften och låt kunden svara.",
      "Börja inte argumentera, lägga till fler fördelar eller sänka priset innan kunden ens hunnit svara.",
    ],
  },
  {
    id: "invandningar",
    title: "Invändningar",
    lead: "Du ska inte improvisera från noll ute vid dörren.",
    paragraphs: ["Lär dig förstå vad som faktiskt ligger bakom kundens invändning."],
    examples: [
      { speaker: "Kund", text: "Jag behöver fundera." },
      {
        speaker: "Du",
        text: "Jag fattar. Skulle du säga att det mesta hänger på priset, eller känns det mer som att skyddet ni redan har har fungerat bra hittills?",
      },
    ],
    calloutTitle: "Varför?",
    callout:
      "Du försöker styra fram orsaken bakom invändningen. När du vet vad kunden faktiskt tvekar på kan du bemöta rätt sak.",
    objections: [
      {
        objection: "Det är för dyrt.",
        response: "Styr mot om det är totalsumman eller omfattningen på paketet.",
        followup: "Anpassa lösningen om behovet fortfarande finns.",
      },
      {
        objection: "Jag ska tänka.",
        response:
          "Styr mot de vanligaste verkliga hindren: priset eller om kunden tycker att nuvarande skydd räcker.",
      },
      {
        objection: "Vi har redan.",
        response: "Bekräfta det. Ta sedan reda på vad kunden faktiskt har, hur gammalt det är och om något saknas.",
      },
    ],
  },
  {
    id: "sa-saljer-vi",
    title: "Så säljer vi",
    lead: "Hårt avslut betyder inte dålig försäljning.",
    paragraphs: [],
    keyPoints: [
      "Ge inte upp bara för att kunden tvekar.",
      "Argumentera inte mot kunden – styr samtalet.",
      "Var tydlig med pris, produkt och villkor.",
      "Överdriv inte risker och hitta inte på behov.",
      "När kunden tydligt avslutar samtalet: tacka och gå vidare.",
    ],
    calloutTitle: "Målet",
    callout:
      "Målet är inte att pressa någon till ett köp. Målet är att kunna leda samtalet, förstå kundens behov, presentera rätt lösning och faktiskt våga fråga efter affären.",
  },
];
