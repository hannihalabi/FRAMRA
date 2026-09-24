"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { courseSteps } from "@/lib/course-content";
import { examQuestions } from "@/lib/course-exam";
import foundersPhoto from "@/public/Jack-solo.png";
import styles from "@/app/saljkurs/course.module.css";

type CourseScreen = "intro" | "contents" | "lesson" | "exam-intro" | "exam" | "result";
type ExamAnswer = number | null;

const shuffleAnswers = () =>
  examQuestions.map((question) => {
    const order = question.options.map((_, index) => index);
    for (let index = order.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [order[index], order[randomIndex]] = [order[randomIndex], order[index]];
    }
    return order;
  });

const formatDate = () =>
  new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function SalesCourse() {
  const [screen, setScreen] = useState<CourseScreen>("intro");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerOrder, setAnswerOrder] = useState<number[][]>([]);
  const [answers, setAnswers] = useState<ExamAnswer[]>(() =>
    examQuestions.map(() => null),
  );
  const [choice, setChoice] = useState<number | null>(null);
  const [passedDate, setPassedDate] = useState("");
  const mainRef = useRef<HTMLElement>(null);

  const step = courseSteps[lessonIndex];
  const question = examQuestions[questionIndex];
  const currentOrder = answerOrder[questionIndex] ?? [0, 1, 2, 3];
  const selectedOriginalAnswer =
    choice === null ? null : currentOrder[choice];
  const isAnswered = selectedOriginalAnswer !== null;
  const score = answers.reduce<number>(
    (total, answer, index) =>
      total + (answer === examQuestions[index].correctIndex ? 1 : 0),
    0,
  );
  const percentage = Math.round((score / examQuestions.length) * 100);
  const isPassed = score >= 20;

  const goTo = (nextScreen: CourseScreen) => {
    setScreen(nextScreen);
    window.requestAnimationFrame(() => {
      mainRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  };

  const openLesson = (index: number) => {
    setLessonIndex(index);
    goTo("lesson");
  };

  const startExam = () => {
    setAnswers(examQuestions.map(() => null));
    setQuestionIndex(0);
    setChoice(null);
    setPassedDate("");
    setAnswerOrder(shuffleAnswers());
    goTo("exam");
  };

  const selectAnswer = (displayIndex: number) => {
    if (isAnswered) return;
    setChoice(displayIndex);
    setAnswers((currentAnswers) => {
      const nextAnswers = [...currentAnswers];
      nextAnswers[questionIndex] = currentOrder[displayIndex];
      return nextAnswers;
    });
  };

  const nextQuestion = () => {
    if (!isAnswered) return;
    if (questionIndex === examQuestions.length - 1) {
      setPassedDate(formatDate());
      goTo("result");
      return;
    }
    setQuestionIndex((index) => index + 1);
    setChoice(null);
    window.requestAnimationFrame(() =>
      mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };

  return (
    <div className={styles.page}>
      <a className="skip-link" href="#course-main">
        Hoppa till kursen
      </a>

      <header className={styles.header}>
        <Link href="/" aria-label="Framra, till startsidan" className={styles.brand}>
          <span>Framra</span>
        </Link>
        <Link className={styles.contactLink} href="/#kontakt">
          Kontakta oss
        </Link>
      </header>

      <main id="course-main" ref={mainRef}>
        {screen === "intro" ? (
          <section className={`${styles.screen} ${styles.introScreen}`}>
            <div className={styles.introCopy}>
              <p className={styles.eyebrow}>Säljkurs</p>
              <h1>Så säljer vi på <em>FRAMRA.</em></h1>
              <p className={styles.introLead}>
                Här lär du dig FRAMRAs säljmetod från första kontakten med kunden till avslut.
              </p>
              <p>
                Målet är inte att du ska memorera ett manus. Du ska förstå strukturen bakom
                samtalet och kunna använda den naturligt ute på fältet.
              </p>
              <div className={styles.courseFacts} aria-label="Om kursen">
                <span><b aria-hidden="true">◷</b> 9 delar</span>
                <span><b aria-hidden="true">◷</b> Ca 45 min</span>
                <span><b aria-hidden="true">✦</b> Slutprov</span>
              </div>
              <button className={styles.primaryButton} onClick={() => goTo("contents")} type="button">
                Starta kursen <Arrow />
              </button>
            </div>
            <div className={styles.introArt}>
              <Image
                src={foundersPhoto}
                alt="Jack, en av personerna bakom FRAMRA"
                priority
                sizes="(max-width: 760px) 70vw, 440px"
              />
              <span className={styles.artTag}>FRAMRA • Säljmetod</span>
              <span className={styles.sparkle} aria-hidden="true">✦</span>
            </div>
            <span className={styles.screenDecoration} aria-hidden="true" />
          </section>
        ) : null}

        {screen === "contents" ? (
          <section className={`${styles.screen} ${styles.contentsScreen}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>Kursinnehåll</p>
              <h1>9 steg till att kunna <em>metoden.</em></h1>
              <p>Gå igenom momenten i ordning. Varje del är kort och fokuserar på en sak.</p>
            </div>
            <div className={styles.contentsGrid}>
              {courseSteps.map((courseStep, index) => (
                <button
                  className={styles.contentsItem}
                  key={courseStep.id}
                  onClick={() => openLesson(index)}
                  type="button"
                >
                  <span className={styles.contentsNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.contentsText}>
                    <strong>{courseStep.title}</strong>
                    <small>{courseStep.lead}</small>
                  </span>
                  <span className={styles.chevron} aria-hidden="true">›</span>
                </button>
              ))}
              <div className={styles.finalExamRow}>
                <span className={styles.contentsNumber}>✦</span>
                <span className={styles.contentsText}>
                  <strong>Slutprov</strong>
                  <small>Visa att du kan använda metoden.</small>
                </span>
                <span className={styles.finalExamMeta}>25 frågor</span>
              </div>
            </div>
            <button className={styles.ghostButton} onClick={() => goTo("intro")} type="button">
              ← Tillbaka
            </button>
          </section>
        ) : null}

        {screen === "lesson" ? (
          <section className={`${styles.screen} ${styles.lessonScreen}`}>
            <div className={styles.lessonTopline}>
              <button className={styles.backButton} onClick={() => goTo("contents")} type="button" aria-label="Till kursinnehåll">
                ←
              </button>
              <span>{String(lessonIndex + 1).padStart(2, "0")} / {String(courseSteps.length).padStart(2, "0")}</span>
              <div className={styles.miniProgress} aria-hidden="true">
                <span style={{ width: `${((lessonIndex + 1) / courseSteps.length) * 100}%` }} />
              </div>
            </div>
            <article className={styles.lessonBody} key={step.id}>
              <p className={styles.eyebrow}>Del {String(lessonIndex + 1).padStart(2, "0")}</p>
              <h1>{step.title}<em>.</em></h1>
              <p className={styles.lessonLead}>{step.lead}</p>
              {step.paragraphs.map((paragraph) => <p className={styles.lessonParagraph} key={paragraph}>{paragraph}</p>)}

              {step.formula ? (
                <ol className={styles.formula}>
                  {step.formula.map((item, index) => (
                    <li key={item}><span>{index + 1}</span><strong>{item}</strong></li>
                  ))}
                </ol>
              ) : null}

              {step.examples ? (
                <div className={`${styles.examples} ${step.id === "icebreak" ? styles.icebreakExamples : ""}`}>
                  {step.examples.map((example, index) => (
                    <div className={styles.example} key={`${example.speaker}-${index}`}>
                      <span className={styles.speaker}>{example.speaker}</span>
                      <blockquote>{example.text}</blockquote>
                    </div>
                  ))}
                  {step.id === "icebreak" ? <span className={styles.exampleSpark} aria-hidden="true">✦</span> : null}
                </div>
              ) : null}

              {step.objections ? (
                <div className={styles.objections}>
                  <p className={styles.miniHeading}>Tre invändningar du ska kunna</p>
                  {step.objections.map((objection) => (
                    <article className={styles.objectionCard} key={objection.objection}>
                      <strong>{objection.objection}</strong>
                      <p>{objection.response}</p>
                      {objection.followup ? <p>{objection.followup}</p> : null}
                    </article>
                  ))}
                </div>
              ) : null}

              {step.keyPoints ? (
                <ul className={styles.keyPoints}>
                  {step.keyPoints.map((point) => <li key={point}>{point}</li>)}
                </ul>
              ) : null}

              {step.callout ? (
                <aside className={styles.callout}>
                  <span aria-hidden="true">✦</span>
                  <div>
                    {step.calloutTitle ? <strong>{step.calloutTitle}</strong> : null}
                    <p>{step.callout}</p>
                  </div>
                </aside>
              ) : null}
            </article>
            <div className={styles.lessonActions}>
              {lessonIndex > 0 ? (
                <button className={styles.ghostButton} onClick={() => openLesson(lessonIndex - 1)} type="button">← Föregående</button>
              ) : <span />}
              <button
                className={styles.primaryButton}
                onClick={() => lessonIndex === courseSteps.length - 1 ? goTo("exam-intro") : openLesson(lessonIndex + 1)}
                type="button"
              >
                {lessonIndex === courseSteps.length - 1 ? "Gå till slutprovet" : "Nästa"} <Arrow />
              </button>
            </div>
          </section>
        ) : null}

        {screen === "exam-intro" ? (
          <section className={`${styles.screen} ${styles.examIntroScreen}`}>
            <p className={styles.eyebrow}>Slutprov</p>
            <div className={styles.examIntroLayout}>
              <div>
                <h1>Visa att du kan <em>metoden.</em></h1>
                <p className={styles.introLead}>
                  Nu testar vi inte om du har memorerat replikerna. Vi testar om du förstår FRAMRAs säljmetod och kan använda den i riktiga kundsituationer.
                </p>
                <div className={styles.courseFacts}>
                  <span>25 frågor</span><span>80 % krävs</span><span>Ca 10 minuter</span>
                </div>
                <button className={styles.primaryButton} onClick={startExam} type="button">
                  Starta provet <Arrow />
                </button>
                <button className={styles.textButton} onClick={() => goTo("contents")} type="button">
                  ← Repetera utbildningen
                </button>
              </div>
              <div className={styles.certificatePreview} aria-hidden="true">
                <span>FRAMRA</span><strong>Certified</strong><b>✓</b>
              </div>
            </div>
          </section>
        ) : null}

        {screen === "exam" ? (
          <section className={`${styles.screen} ${styles.examScreen}`}>
            <div className={styles.examTopline}>
              <button className={styles.backButton} onClick={() => goTo("exam-intro")} type="button" aria-label="Tillbaka till provstart">←</button>
              <div className={styles.examProgressCopy}>Fråga {questionIndex + 1} / {examQuestions.length}</div>
              <span>{Math.round(((questionIndex + 1) / examQuestions.length) * 100)}%</span>
            </div>
            <div className={styles.examProgress}><span style={{ width: `${((questionIndex + 1) / examQuestions.length) * 100}%` }} /></div>
            <article className={styles.questionCard} key={questionIndex}>
              <p className={styles.eyebrow}>Fråga {questionIndex + 1} av {examQuestions.length} • {question.category}</p>
              {question.situation ? <p className={styles.situation}>{question.situation}</p> : null}
              <h1>{question.question}</h1>
              <fieldset className={styles.answerList} disabled={isAnswered}>
                <legend className={styles.visuallyHidden}>{question.question}</legend>
                {currentOrder.map((originalIndex, displayIndex) => {
                  const correct = originalIndex === question.correctIndex;
                  const selected = selectedOriginalAnswer === originalIndex;
                  const showCorrect = isAnswered && correct;
                  const showWrong = isAnswered && selected && !correct;
                  return (
                    <label
                      className={`${styles.answerOption} ${showCorrect ? styles.answerCorrect : ""} ${showWrong ? styles.answerWrong : ""}`}
                      key={`${questionIndex}-${originalIndex}`}
                    >
                      <input
                        checked={choice === displayIndex}
                        name={`question-${questionIndex}`}
                        onChange={() => selectAnswer(displayIndex)}
                        type="radio"
                      />
                      <span className={styles.answerLetter}>{String.fromCharCode(65 + displayIndex)}</span>
                      <span>{question.options[originalIndex]}</span>
                      {showCorrect ? <span className={styles.answerMark} aria-label="Rätt svar">✓</span> : null}
                    </label>
                  );
                })}
              </fieldset>
              {isAnswered ? (
                <div className={`${styles.answerFeedback} ${selectedOriginalAnswer === question.correctIndex ? styles.feedbackCorrect : styles.feedbackWrong}`} role="status" aria-live="polite">
                  <strong>{selectedOriginalAnswer === question.correctIndex ? "✓ Rätt svar!" : "✕ Inte riktigt."}</strong>
                  {selectedOriginalAnswer !== question.correctIndex ? (
                    <p className={styles.correctAnswer}>Rätt svar: {question.options[question.correctIndex]}</p>
                  ) : null}
                  <p>{question.explanation}</p>
                </div>
              ) : null}
            </article>
            <div className={styles.examActions}>
              <span>{score} rätt hittills</span>
              <button className={styles.primaryButton} disabled={!isAnswered} onClick={nextQuestion} type="button">
                {questionIndex === examQuestions.length - 1 ? "Se resultat" : "Nästa fråga"} <Arrow />
              </button>
            </div>
          </section>
        ) : null}

        {screen === "result" ? (
          <section className={`${styles.screen} ${styles.resultScreen}`}>
            <p className={styles.eyebrow}>Provet klart</p>
            <h1>{isPassed ? <>Du är <em>redo</em> för fältet.</> : <>Ett steg till, så <em>sitter metoden.</em></>}</h1>
            <div className={styles.resultScore}>
              <strong>{score}<span> / {examQuestions.length}</span></strong>
              <b>{percentage} %</b>
            </div>
            {isPassed ? (
              <>
                <p className={styles.resultMessage}>Du har visat att du kan använda FRAMRAs säljmetod.</p>
                <div className={styles.certificate}>
                  <span>FRAMRA</span><strong>Certified</strong><b aria-label="Godkänd">✓</b>
                  <small>Godkänd {passedDate}</small>
                </div>
                <p className={styles.resultHint}>Godkänt från 20 av 25 rätt (80 %).</p>
              </>
            ) : (
              <>
                <p className={styles.resultMessage}>Du behöver 80 % för godkänt. Repetera de delar du missade och försök igen.</p>
                <div className={styles.reviewList}>
                  <strong>Repetera gärna</strong>
                  {Array.from(new Set(answers.flatMap((answer, index) => answer === examQuestions[index].correctIndex ? [] : [examQuestions[index].category]))).map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
              </>
            )}
            <div className={styles.resultActions}>
              {isPassed ? (
                <Link className={styles.primaryButton} href="/">Gå till startsidan <Arrow /></Link>
              ) : (
                <button className={styles.primaryButton} onClick={() => goTo("contents")} type="button">Repetera utbildningen <Arrow /></button>
              )}
              <button className={styles.outlineButton} onClick={startExam} type="button">Gör om provet</button>
            </div>
          </section>
        ) : null}
      </main>
      <footer className={styles.footer}>FRAMRA • Säljmetod för direktförsäljning</footer>
    </div>
  );
}
