export type ExamQuestion = {
  category: string;
  situation?: string;
  question: string;
  options: readonly string[];
  correctIndex: number;
  explanation: string;
};

export const examQuestions: readonly ExamQuestion[] = [
  {
    category: "Icebreak",
    situation: "Du kommer fram till ett hus och ser att fasaden ser nymålad ut.",
    question: "Vilken öppning passar bäst enligt FRAMRAs metod?",
    options: [
      "”Har ni brandsläckare hemma?”",
      "”Fin färg på huset, är det nymålat?”",
      "”Vi hjälper hushåll med brandskydd idag.”",
      "”Hur gammal är er brandsläckare?”",
    ],
    correctIndex: 1,
    explanation:
      "En icebreak ska utgå från något naturligt i situationen och få igång ett avslappnat samtal. Poängen är inte att memorera exemplen från utbildningen. Uppmärksamma något i omgivningen som känns naturligt.",
  },
  {
    category: "Icebreak",
    situation: "Kunden öppnar dörren. Du ser inget särskilt som känns naturligt att kommentera.",
    question: "Vad gör du?",
    options: [
      "Hittar på en komplimang ändå.",
      "Väntar tyst tills kunden säger något.",
      "Hoppar över icebreaken och går naturligt vidare till jingeln.",
      "Kommenterar något slumpmässigt bara för att få in en icebreak.",
    ],
    correctIndex: 2,
    explanation:
      "En icebreak är ett verktyg, inte ett krav. Om inget känns naturligt behöver du inte pressa fram en kommentar. Gå vidare till jingeln istället.",
  },
  {
    category: "Icebreak",
    situation: "Kunden öppnar dörren tillsammans med en stor hund som nyfiket kommer fram.",
    question: "Vilken öppning ligger närmast metoden?",
    options: [
      "”Vilken härlig hund, vad heter den?”",
      "”Har ni brandvarnare på båda våningarna?”",
      "”Jag ska bara ta två minuter av din tid.”",
      "”Jag antar att ni redan har brandskydd?”",
    ],
    correctIndex: 0,
    explanation:
      "Här finns något naturligt framför dig att kommentera. Icebreaken ska skapa ett mänskligt och avslappnat första möte innan du går vidare.",
  },
  {
    category: "Jingel",
    question: "Vilken öppning följer bäst strukturen i FRAMRAs jingel?",
    options: [
      "Presentera produkten → säg priset → fråga om kunden vill köpa.",
      "Berätta vem du är → varför du är där → öppna samtalet med kunden.",
      "Fråga om brandskydd → presentera dig → avsluta.",
      "Berätta allt om FRAMRA → visa produkten → fråga kundens namn.",
    ],
    correctIndex: 1,
    explanation:
      "Jingeln bygger på en enkel struktur: vem du är → varför du är där → öppna samtalet. Det är strukturen säljaren ska kunna, inte ett exakt manus.",
  },
  {
    category: "Jingel",
    situation: "En säljare kan FRAMRAs jingel ord för ord men låter väldigt inövad och mekanisk.",
    question: "Vad bör säljaren göra?",
    options: [
      "Prata snabbare så jingeln blir kortare.",
      "Fortsätta exakt likadant eftersom orden är viktigast.",
      "Behålla strukturen men uttrycka den naturligt med sina egna ord.",
      "Hoppa över jingeln helt.",
    ],
    correctIndex: 2,
    explanation:
      "FRAMRAs metod bygger på att lära sig strukturen, inte varje ord. Samtalet ska fortfarande kännas naturligt.",
  },
  {
    category: "Jingel",
    situation: "Du har presenterat vem du är och berättat varför FRAMRA är i området.",
    question: "Vad är nästa naturliga steg?",
    options: [
      "Öppna samtalet med en fråga om kundens nuvarande situation.",
      "Direkt presentera det största paketet.",
      "Fråga om kunden kan betala direkt.",
      "Börja hantera invändningar innan kunden sagt något.",
    ],
    correctIndex: 0,
    explanation:
      "Efter vem du är och varför du är där ska jingeln öppna samtalet. Du vill få kunden att börja berätta om sin nuvarande situation.",
  },
  {
    category: "Behov",
    situation: "Kunden säger: ”Ja, vi har brandskydd hemma.”",
    question: "Vad gör du nu?",
    options: [
      "Börjar direkt visa vilket paket du rekommenderar.",
      "Frågar vad de har för brandskydd och ungefär hur gammalt det är.",
      "Säger att deras nuvarande brandskydd förmodligen behöver bytas.",
      "Går direkt på priset.",
    ],
    correctIndex: 1,
    explanation:
      "Du vet ännu inte om kunden faktiskt har ett behov. Ta först reda på vad kunden har, hur gammalt det är och om något saknas.",
  },
  {
    category: "Behov",
    situation: "Kunden säger: ”Vi har två brandvarnare.”",
    question: "Vad är bästa nästa steg?",
    options: [
      "Utgå från att deras brandskydd är komplett.",
      "Säg att två brandvarnare inte räcker.",
      "Fortsätt undersöka vad de har utöver brandvarnarna och om något saknas.",
      "Börja direkt sälja en ny brandvarnare.",
    ],
    correctIndex: 2,
    explanation:
      "Ett svar från kunden ger dig bara en del av bilden. Fortsätt ställa relevanta frågor tills du faktiskt förstår kundens situation.",
  },
  {
    category: "Behov",
    situation: "Kunden säger: ”Vi har en släckare någonstans i garaget, tror jag.”",
    question: "Vad är mest relevant att göra?",
    options: [
      "Säga att den definitivt är för gammal.",
      "Fråga vidare om släckaren och vilket övrigt brandskydd de har.",
      "Direkt rekommendera det dyraste paketet.",
      "Säga att en släckare i garaget är värdelös.",
    ],
    correctIndex: 1,
    explanation:
      "Du ska undersöka situationen innan du drar slutsatser. Överdriv inte risker och hitta inte på ett behov som du ännu inte har bekräftat.",
  },
  {
    category: "Accept på behov",
    situation: "Du har fått fram att kunden har brandvarnare men saknar både brandsläckare och brandfilt.",
    question: "Vad bör du göra innan du presenterar ett paket?",
    options: [
      "Bekräfta situationen med kunden.",
      "Börja prata om betalningen.",
      "Direkt fråga om kunden vill köpa.",
      "Berätta att de har dåligt brandskydd.",
    ],
    correctIndex: 0,
    explanation:
      "Innan du presenterar lösningen vill du att kunden själv bekräftar behovet. Ni ska vara överens om vad som faktiskt saknas.",
  },
  {
    category: "Accept på behov",
    situation: "Du tror att kunden behöver en ny brandsläckare, men kunden säger att deras nuvarande släckare nyligen är kontrollerad och fungerar bra.",
    question: "Vad gör du?",
    options: [
      "Försöker övertyga kunden om att den ändå är dålig.",
      "Påstår att alla äldre släckare måste bytas.",
      "Accepterar informationen och undersöker om det finns något annat faktiskt behov.",
      "Fortsätter rekommendera en ny släckare ändå.",
    ],
    correctIndex: 2,
    explanation:
      "Du ska inte skapa ett problem som kunden inte har. Behovet ska bygga på kundens faktiska situation. Överdriv inte risker och hitta inte på behov.",
  },
  {
    category: "Accept på behov",
    question: "Varför är det viktigt att få accept på behovet innan du visar lösningen?",
    options: [
      "För att samtalet ska bli längre.",
      "För att kunden själv ska vara med på vilket problem eller vilken brist lösningen ska lösa.",
      "För att kunna visa fler produkter.",
      "För att undvika att behöva ställa fler frågor.",
    ],
    correctIndex: 1,
    explanation:
      "Du vill inte rekommendera en lösning på ett problem som kunden själv inte håller med om finns. Accept på behov gör nästa steg logiskt.",
  },
  {
    category: "Visa lösningen",
    situation: "Kunden har bekräftat att de saknar en brandfilt men redan har en fungerande brandsläckare.",
    question: "Vad ligger närmast FRAMRAs metod?",
    options: [
      "Presentera en lösning som fokuserar på det kunden faktiskt saknar.",
      "Försöka sälja allt ni har ändå.",
      "Ignorera vad kunden berättat och börja om presentationen.",
      "Säga att brandsläckaren måste bytas för att få köpa brandfilten.",
    ],
    correctIndex: 0,
    explanation:
      "Lösningen ska kopplas direkt till behovet ni precis identifierat. Presentera inte produkter på måfå.",
  },
  {
    category: "Visa lösningen",
    question: "När du presenterar en produkt, vad är viktigast?",
    options: [
      "Att räkna upp så många egenskaper som möjligt.",
      "Att koppla produkten till det behov kunden precis har beskrivit.",
      "Att prata snabbare än kunden hinner avbryta.",
      "Att alltid rekommendera samma paket.",
    ],
    correctIndex: 1,
    explanation:
      "Produkten är lösningen på ett behov. Kunden ska förstå varför just den lösningen är relevant utifrån samtalet ni precis haft.",
  },
  {
    category: "Visa lösningen",
    situation: "Du har en brandfilt med dig och pratar med kunden om att de saknar en sådan.",
    question: "Vad bör du göra?",
    options: [
      "Hålla produkten undan tills kunden har betalat.",
      "Visa produkten samtidigt som du kopplar den till behovet.",
      "Bara läsa upp produktinformationen.",
      "Börja prata om en annan produkt.",
    ],
    correctIndex: 1,
    explanation:
      "När det passar ska kunden få se produkten du pratar om. Det gör lösningen konkret och lättare att förstå.",
  },
  {
    category: "Accept på lösningen",
    situation: "Du har presenterat en lösning som matchar kundens behov.",
    question: "Vad är nästa steg innan avslutet?",
    options: [
      "Börja om behovsanalysen.",
      "Fråga om kunden håller med om att lösningen löser det ni pratat om.",
      "Sänka priset direkt.",
      "Presentera ytterligare tre paket.",
    ],
    correctIndex: 1,
    explanation:
      "Du vill få accept på lösningen. När kunden har accepterat både behovet och lösningen blir avslutet nästa naturliga steg.",
  },
  {
    category: "Accept på lösningen",
    situation: "Kunden säger att paketet verkar bra men att en del av det inte känns relevant.",
    question: "Vad gör du?",
    options: [
      "Ignorerar kommentaren och går direkt på avslut.",
      "Argumenterar för att kunden har fel.",
      "Tar reda på vilken del som inte känns relevant och anpassar lösningen om det behövs.",
      "Sänker priset utan att fråga något.",
    ],
    correctIndex: 2,
    explanation:
      "Du har ännu inte full accept på lösningen. Förstå vad kunden reagerar på och se till att lösningen fortfarande matchar det faktiska behovet.",
  },
  {
    category: "Avslut",
    situation: "Kunden har accepterat behovet och säger att lösningen känns bra.",
    question: "Vad gör du?",
    options: [
      "Fortsätter prata om fler fördelar i fem minuter.",
      "Går på avslut.",
      "Börjar om presentationen.",
      "Väntar på att kunden själv ska fråga om de får köpa.",
    ],
    correctIndex: 1,
    explanation:
      "När kunden accepterat både behov och lösning ska du våga gå på affären. Avslutet ska kännas som nästa naturliga steg.",
  },
  {
    category: "Avslut",
    situation: "Du har precis gått på avslut och kunden är tyst i några sekunder.",
    question: "Vad gör du?",
    options: [
      "Börjar direkt prata igen för att fylla tystnaden.",
      "Erbjuder rabatt.",
      "Är tyst och låter kunden svara.",
      "Börjar presentera produkten igen.",
    ],
    correctIndex: 2,
    explanation:
      "Fråga. Var tyst. Lyssna. Nybörjare pratar ofta bort sitt eget avslut genom att bli obekväma med tystnaden.",
  },
  {
    category: "Avslut",
    situation: "Kunden säger nej efter ditt första avslut men fortsätter samtalet och uttrycker en konkret tvekan kring priset.",
    question: "Vad gör du?",
    options: [
      "Tackar och går direkt oavsett vad kunden säger.",
      "Börjar argumentera med kunden.",
      "Tar reda på vad i priset eller omfattningen kunden reagerar på, bemöter det och går på nytt avslut om behovet kvarstår.",
      "Sänker priset direkt.",
    ],
    correctIndex: 2,
    explanation:
      "En invändning behöver inte betyda att samtalet är slut. Styr orsaken → bemöt → gå på nytt avslut. Om kunden däremot tydligt avslutar samtalet ska du respektera det.",
  },
  {
    category: "”Jag ska tänka”",
    situation: "Kunden säger: ”Det ser bra ut, men jag ska nog tänka lite.”",
    question: "Vilket svar ligger närmast FRAMRAs metod?",
    options: [
      "”Vad behöver du tänka på?”",
      "”Okej, ring oss om du ändrar dig.”",
      "”Jag fattar. Är det framför allt priset du vill fundera på, eller känns det som att det ni redan har räcker bra idag?”",
      "”Det finns egentligen ingenting att tänka på.”",
    ],
    correctIndex: 2,
    explanation:
      "Styr invändningen mot några relevanta och sannolika orsaker istället för att lämna frågan helt öppen. När du förstår den verkliga orsaken kan du bemöta rätt sak.",
  },
  {
    category: "”Det är för dyrt”",
    situation: "Kunden säger: ”Jag gillar det, men det blir för dyrt.”",
    question: "Vad gör du först?",
    options: [
      "Ger rabatt direkt.",
      "Tar reda på om kunden reagerar på totalsumman eller omfattningen av lösningen.",
      "Säger att säkerhet inte går att sätta ett pris på.",
      "Säger att alla andra i området har köpt.",
    ],
    correctIndex: 1,
    explanation:
      "”För dyrt” berättar inte exakt vad problemet är. Ta reda på vad kunden reagerar på innan du försöker lösa invändningen. Anpassa lösningen om behovet fortfarande finns.",
  },
  {
    category: "”Vi har redan”",
    situation: "Kunden säger: ”Nej tack, vi har redan brandskydd.”",
    question: "Vad ligger närmast metoden?",
    options: [
      "”Perfekt. Vet du ungefär vad ni har idag och hur gammalt det är?”",
      "”Det ni har räcker antagligen inte.”",
      "”Våra produkter är bättre.”",
      "”Okej, då finns det inget att prata om.”",
    ],
    correctIndex: 0,
    explanation:
      "Bekräfta att kunden redan har skydd och ta sedan reda på vad de faktiskt har. Du vet ännu inte om något saknas eller behöver kompletteras.",
  },
  {
    category: "Så säljer vi",
    situation: "Kunden säger tydligt: ”Nej tack. Jag är inte intresserad och vill avsluta samtalet.”",
    question: "Vad gör du?",
    options: [
      "Fortsätter eftersom ett nej ofta kan vändas.",
      "Ställer tre frågor till innan du går.",
      "Tackar för tiden och går vidare.",
      "Försöker skapa mer oro kring brandsäkerheten.",
    ],
    correctIndex: 2,
    explanation:
      "Att inte ge upp vid vanlig tvekan betyder inte att ignorera ett tydligt avslut. När kunden tydligt avslutar samtalet ska du respektera det, tacka och gå vidare.",
  },
  {
    category: "Hela metoden",
    question: "Vilken ordning beskriver bäst hur ett komplett FRAMRA-samtal ska utvecklas?",
    options: [
      "Produkt → pris → behov → avslut.",
      "Icebreak vid naturligt tillfälle → jingel → förstå behovet → accept på behov → visa lösningen → accept på lösningen → avslut → hantera eventuell invändning.",
      "Jingel → produkt → rabatt → behov → avslut.",
      "Icebreak → pris → avslut → behov.",
    ],
    correctIndex: 1,
    explanation:
      "Metoden bygger på att samtalet utvecklas steg för steg. Du öppnar samtalet, förstår kundens situation, får accept på behovet, visar en relevant lösning, får accept på lösningen och går sedan på avslut. Om en invändning kommer styr du orsaken, bemöter den och går på nytt avslut.",
  },
];
