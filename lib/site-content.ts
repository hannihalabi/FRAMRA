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
      "Vill du ha ett extrajobb som är kul, utvecklande och fullt av nya möten? Skicka in ditt CV och berätta lite om dig själv.",
    primaryCta: "Skicka in ditt CV här",
    secondaryCta: "Läs mer om oss",
    artLabel: "Ditt nästa extraknäck",
    artWordLead: "Extra",
    artWordEnd: "kul!",
    artNoteLead: "Enkelt",
    artNoteEnd: "att ansöka",
  },
  intro: {
    label: "Kort om erbjudandet",
    title: "Vad ni gör. Vem ni hjälper.",
    body: "[Förklara med 2–3 meningar vilka kunder företaget hjälper och vilket konkret värde de får. Håll texten saklig och verifierbar.]",
  },
  services: [
    {
      number: "01",
      title: "[Tjänst eller produkt 1]",
      description:
        "[Beskriv vad som ingår, vem erbjudandet passar och vilket behov det möter.]",
      color: "purple",
    },
    {
      number: "02",
      title: "[Tjänst eller produkt 2]",
      description:
        "[Beskriv vad som ingår, vem erbjudandet passar och vilket behov det möter.]",
      color: "yellow",
    },
    {
      number: "03",
      title: "[Tjänst eller produkt 3]",
      description:
        "[Beskriv vad som ingår, vem erbjudandet passar och vilket behov det möter.]",
      color: "coral",
    },
  ],
  process: [
    {
      number: "1",
      title: "Berätta vad ni behöver",
      description:
        "[Ange hur första kontakten går till och vilken information kunden bör skicka med.]",
    },
    {
      number: "2",
      title: "Få ett tydligt nästa steg",
      description:
        "[Beskriv hur företaget återkopplar, bedömer behovet eller presenterar ett förslag.]",
    },
    {
      number: "3",
      title: "Sätt igång",
      description:
        "[Beskriv kort hur leveransen, bokningen eller samarbetet startar.]",
    },
  ],
  about: {
    eyebrow: "Om [Företagsnamn]",
    title: "[En verifierad rubrik om företaget.]",
    body: "[Berätta kort om företagets bakgrund, arbetssätt och relevanta kompetens. Lägg endast till årtal, certifieringar och meriter som går att verifiera.]",
    facts: ["[Relevant faktauppgift 1]", "[Relevant faktauppgift 2]"],
  },
  faq: [
    {
      question: "Vilka uppdrag kan ni hjälpa till med?",
      answer:
        "[Lista de typer av uppdrag eller behov som företaget faktiskt erbjuder hjälp med.]",
    },
    {
      question: "Hur börjar vi?",
      answer:
        "[Beskriv den verifierade kontakt- eller bokningsprocessen och normal återkopplingstid om den är känd.]",
    },
    {
      question: "Var finns ni?",
      answer:
        "[Ange ort, serviceområde eller om tjänsten erbjuds digitalt. Lägg bara till en fysisk adress om den är verifierad.]",
    },
  ],
  contact: {
    email: "[E-postadress]",
    phone: "[Telefonnummer]",
    address: "[Adress eller serviceområde]",
  },
} as const;
