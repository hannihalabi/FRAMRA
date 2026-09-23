import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SalesCourse } from "@/components/sales-course";
import logo from "@/public/logo-transparent.png";
import styles from "./course.module.css";

export const metadata: Metadata = {
  title: "Interaktiv säljkurs",
  description:
    "Träna på FRAMRA:s säljmetod i nio steg med exempel, kunskapsfrågor och en personlig sammanfattning.",
};

export default function SalesCoursePage() {
  return (
    <div className={styles.page}>
      <a className="skip-link" href="#main">
        Hoppa till kursen
      </a>

      <header className={styles.header}>
        <Link href="/" aria-label="Framra, tillbaka till startsidan">
          <Image
            className={styles.logo}
            src={logo}
            alt="Framra"
            sizes="128px"
            priority
          />
        </Link>
        <span className={styles.courseLabel}>Interaktiv säljkurs</span>
        <Link className={styles.homeLink} href="/">
          ← Startsidan
        </Link>
      </header>

      <main id="main">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>FRAMRA • Säljträning</p>
            <h1>
              Från första hej till ett <em>tydligt avslut.</em>
            </h1>
            <p className={styles.heroCopy}>
              Lär dig säljmetoden steg för steg, testa dina kunskaper och få en
              sammanfattning av vad du kan och vad du behöver repetera.
            </p>
            <div className={styles.heroMeta} aria-label="Kursinformation">
              <span>9 moment</span>
              <span>9 kunskapsfrågor</span>
              <span>Sammanfattning</span>
            </div>
            <a className={styles.startLink} href="#kurs">
              Starta kursen ↓
            </a>
          </div>
        </section>

        <SalesCourse />
      </main>

      <footer className={styles.footer}>
        FRAMRA:s träningsmaterial • Resultatet är ett övningsresultat, inte en certifiering.
      </footer>
    </div>
  );
}
