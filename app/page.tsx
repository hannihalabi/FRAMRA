import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import foundersPhoto from "@/public/Kevin-Jack-Sitter.png";
import logo from "@/public/logo-transparent.png";
import { siteContent as content } from "@/lib/site-content";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      <path d="M24 1c.8 15.5 7.5 22.2 23 23-15.5.8-22.2 7.5-23 23C23.2 31.5 16.5 24.8 1 24 16.5 23.2 23.2 16.5 24 1Z" />
    </svg>
  );
}

function SmileMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 96 96">
      <circle cx="48" cy="48" r="44" />
      <circle cx="34" cy="40" r="5" className="fill-dark" />
      <circle cx="62" cy="40" r="5" className="fill-dark" />
      <path d="M29 58c5 9 13 14 19 14s14-5 19-14" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Hoppa till innehållet
      </a>

      <SiteHeader companyName={content.companyName} />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-orb hero-orb-left" aria-hidden="true" />
          <div className="hero-orb hero-orb-right" aria-hidden="true" />
          <div className="hero-copy">
            <h1>
              {content.hero.titleLead} <em>{content.hero.titleAccent}</em>
              <br />
              {content.hero.titleEnd}
            </h1>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#tjanster">
                {content.hero.primaryCta} <ArrowIcon />
              </a>
              <a className="text-link" href="#om">
                {content.hero.secondaryCta} <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstrakt grafisk illustration">
            <div className="art-card art-card-main">
              <span className="art-label">{content.hero.artLabel}</span>
              <div className="art-word">
                <span>{content.hero.artWordLead}</span>
                <span>{content.hero.artWordEnd}</span>
              </div>
              <div className="art-squiggle" aria-hidden="true">
                ∿∿∿
              </div>
            </div>
            <div className="art-card art-card-coral">
              <SmileMark />
            </div>
            <div className="art-card art-card-note">
              <span className="art-note-symbol">✦</span>
              <span>{content.hero.artNoteLead}<br />{content.hero.artNoteEnd}</span>
            </div>
            <div className="art-spark">
              <SparkIcon />
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Våra ledord">
          <div>
            <span>TYDLIGT</span><i>✦</i><span>PERSONLIGT</span><i>✦</i>
            <span>GENOMTÄNKT</span><i>✦</i><span>FRAMÅT</span><i>✦</i>
            <span>TYDLIGT</span><i>✦</i><span>PERSONLIGT</span>
          </div>
        </div>

        <section className="story section-shell" id="om">
          <div className="story-image-wrap">
            <Image
              className="story-image"
              src={foundersPhoto}
              alt="Framras två grundare sitter bredvid varandra i mörka kostymer."
              sizes="(max-width: 719px) calc(100vw - 2rem), 50vw"
              placeholder="blur"
            />
            <span className="story-caption">Grundarna bakom Framra</span>
          </div>

          <div className="story-copy">
            <h2>{content.about.title}</h2>
            <p>{content.about.body}</p>
            <p>{content.about.bodySecondary}</p>
            <ul className="story-values">
              {content.about.facts.map((fact) => (
                <li key={fact}><span aria-hidden="true">✓</span>{fact}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="intro section-shell">
          <p className="eyebrow dark-eyebrow">{content.intro.label}</p>
          <div className="intro-grid">
            <h2>{content.intro.title}</h2>
            <div>
              <p>{content.intro.body}</p>
              <a className="inline-link" href="#sa-fungerar-det">
                Se hur det fungerar <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="services section-shell" id="tjanster">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark-eyebrow">{content.servicesIntro.label}</p>
              <h2>{content.servicesIntro.title}</h2>
            </div>
            <p>{content.servicesIntro.description}</p>
          </div>

          <div
            className="service-grid"
            tabIndex={0}
            aria-label="Brandsäkerhetsprodukter. Svep horisontellt för att se fler."
          >
            {content.services.map((service) => (
              <article className={`service-card ${service.color}`} key={service.number}>
                <div className="service-topline">
                  <span>{service.number}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="sa-fungerar-det">
          <div className="section-shell process-inner">
            <div className="process-title">
              <p className="eyebrow light-eyebrow">{content.processIntro.label}</p>
              <h2>{content.processIntro.title}</h2>
              <Link className="button button-lime process-course-link" href="/saljkurs">
                Starta säljkursen <ArrowIcon />
              </Link>
              <div className="process-doodle" aria-hidden="true">→</div>
            </div>

            <ol className="process-list">
              {content.process.map((step) => (
                <li key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="faq section-shell" id="faq">
          <div className="faq-heading">
            <p className="eyebrow dark-eyebrow">Vanliga frågor</p>
            <h2>Bra att veta.</h2>
            <p>
              Här hittar du svar på vanliga frågor om jobbet, försäljningen och
              hur du tjänar pengar hos Framra.
            </p>
          </div>
          <div className="faq-list">
            {content.faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="kontakt">
          <div className="contact-card">
            <div className="contact-spark"><SparkIcon /></div>
            <p className="eyebrow light-eyebrow">Redo för nästa steg?</p>
            <h2>Nu gör vi något<br /><em>bra</em> tillsammans.</h2>
            <p className="contact-intro">
              Lägg in företagets riktiga kontaktväg här. Tills dess visas
              uppgifterna som tydliga platshållare.
            </p>
            <div className="contact-details" aria-label="Kontaktuppgifter">
              <div><span>E-post</span><strong>{content.contact.email}</strong></div>
              <div><span>Telefon</span><strong>{content.contact.phone}</strong></div>
              <div><span>Plats</span><strong>{content.contact.address}</strong></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#top">
            <Image
              className="brand-logo footer-logo"
              src={logo}
              alt="Framra"
              sizes="150px"
            />
          </a>
          <p>Direktförsäljning med fokus på brandsäkerhet för privatpersoner.</p>
          <nav aria-label="Sidfotsmeny">
            <a href="#tjanster">Erbjudande</a>
            <a href="#sa-fungerar-det">Så fungerar det</a>
            <Link href="/saljkurs">Säljkurs</Link>
            <a href="#om">Om oss</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {content.companyName}</span>
          <span>Byggd för att fyllas med verifierat innehåll.</span>
        </div>
      </footer>
    </>
  );
}
