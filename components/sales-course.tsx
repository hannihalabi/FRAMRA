"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { courseSteps } from "@/lib/course-content";
import styles from "@/app/saljkurs/course.module.css";

const emptyAnswers = () => courseSteps.map(() => null as number | null);

export function SalesCourse() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(emptyAnswers);
  const [showSummary, setShowSummary] = useState(false);
  const courseTopRef = useRef<HTMLDivElement>(null);

  const step = courseSteps[currentStep];
  const selectedAnswer = answers[currentStep];
  const isAnswered = selectedAnswer !== null;
  const completedCount = answers.filter((answer) => answer !== null).length;
  const correctCount = answers.reduce<number>(
    (total, answer, index) =>
      total + (answer === courseSteps[index].quiz.correctIndex ? 1 : 0),
    0,
  );
  const firstUnansweredIndex = answers.findIndex((answer) => answer === null);
  const furthestAvailableStep =
    firstUnansweredIndex === -1 ? courseSteps.length - 1 : firstUnansweredIndex;
  const progress = showSummary
    ? 100
    : Math.round((completedCount / courseSteps.length) * 100);

  const scrollToCourse = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    courseTopRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const openStep = (index: number) => {
    if (index > furthestAvailableStep) return;
    setCurrentStep(index);
    setShowSummary(false);
    window.requestAnimationFrame(scrollToCourse);
  };

  const selectAnswer = (answerIndex: number) => {
    if (isAnswered) return;
    setAnswers((currentAnswers) => {
      const nextAnswers = [...currentAnswers];
      nextAnswers[currentStep] = answerIndex;
      return nextAnswers;
    });
  };

  const goBack = () => {
    if (currentStep === 0) return;
    setCurrentStep((index) => index - 1);
    window.requestAnimationFrame(scrollToCourse);
  };

  const goForward = () => {
    if (!isAnswered) return;

    if (currentStep === courseSteps.length - 1) {
      setShowSummary(true);
    } else {
      setCurrentStep((index) => index + 1);
    }
    window.requestAnimationFrame(scrollToCourse);
  };

  const restartCourse = () => {
    setAnswers(emptyAnswers());
    setCurrentStep(0);
    setShowSummary(false);
    window.requestAnimationFrame(scrollToCourse);
  };

  const resultMessage =
    correctCount >= 8
      ? "Mycket starkt. Du har koll på både metoden och det respektfulla avslutet."
      : correctCount >= 6
        ? "Bra grund. Repetera momenten du missade och kör sedan testet igen."
        : "Fortsätt träna. Läs igenom momenten en gång till och fokusera på ordningen i samtalet.";

  return (
    <section className={styles.courseShell} id="kurs" ref={courseTopRef}>
      <div className={styles.progressHeader} aria-live="polite">
        <p>{showSummary ? "Kursen klar" : `Moment ${currentStep + 1} av ${courseSteps.length}`}</p>
        <span>{progress}% genomfört</span>
      </div>
      <div
        className={styles.progressTrack}
        role="progressbar"
        aria-label="Kursförlopp"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.courseLayout}>
        <aside className={styles.sidebar} aria-label="Kursens moment">
          <p className={styles.sidebarTitle}>FRAMRA-metoden</p>
          <ol className={styles.stepNav}>
            {courseSteps.map((courseStep, index) => {
              const isActive = !showSummary && currentStep === index;
              const isDone = answers[index] !== null;
              const isLocked = index > furthestAvailableStep;
              const classNames = [
                styles.stepButton,
                isActive ? styles.stepButtonActive : "",
                isDone ? styles.stepButtonDone : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <li key={courseStep.id}>
                  <button
                    className={classNames}
                    type="button"
                    disabled={isLocked}
                    aria-current={isActive ? "step" : undefined}
                    onClick={() => openStep(index)}
                  >
                    <span className={styles.stepNumber} aria-hidden="true">
                      {isDone ? "✓" : index + 1}
                    </span>
                    <span className={styles.stepButtonText}>{courseStep.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </aside>

        <div className={styles.lesson}>
          {showSummary ? (
            <article className={styles.summaryCard} aria-labelledby="summary-title">
              <p className={styles.lessonKicker}>Din sammanfattning</p>
              <h2 id="summary-title">Bra jobbat!</h2>
              <p className={styles.lead}>Du har gått igenom hela FRAMRA-metoden.</p>

              <div className={styles.scorePanel}>
                <div className={styles.score}>
                  <strong>{correctCount}</strong>
                  <span>av {courseSteps.length} rätt</span>
                </div>
                <p>{resultMessage}</p>
              </div>

              <h3>Resultat per moment</h3>
              <ul className={styles.resultList}>
                {courseSteps.map((courseStep, index) => {
                  const isCorrect = answers[index] === courseStep.quiz.correctIndex;
                  return (
                    <li className={styles.resultItem} key={courseStep.id}>
                      <span
                        className={`${styles.resultIcon} ${
                          isCorrect ? styles.resultCorrect : styles.resultWrong
                        }`}
                        aria-hidden="true"
                      >
                        {isCorrect ? "✓" : "!"}
                      </span>
                      <span className={styles.resultTitle}>{courseStep.title}</span>
                      <span className={styles.resultStatus}>
                        {isCorrect ? "Rätt" : "Repetera"}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className={styles.summaryNote}>
                <strong>Kom ihåg</strong>
                <p>
                  Var tydlig med pris, produkt och villkor. Överdriv aldrig risker,
                  hitta inte på behov och respektera alltid när kunden avslutar samtalet.
                </p>
              </div>

              <div className={styles.summaryActions}>
                <button className={styles.primaryButton} type="button" onClick={restartCourse}>
                  Träna igen
                </button>
                <Link className={styles.textButton} href="/">
                  Till startsidan
                </Link>
              </div>
            </article>
          ) : (
            <article className={styles.lessonCard} aria-labelledby={`step-${step.id}`}>
              <div className={styles.lessonContent}>
                <p className={styles.lessonKicker}>{step.kicker}</p>
                <h2 id={`step-${step.id}`}>{step.title}</h2>
                <p className={styles.lead}>{step.lead}</p>

                {step.paragraphs.map((paragraph) => (
                  <p className={styles.bodyCopy} key={paragraph}>{paragraph}</p>
                ))}

                {step.formula ? (
                  <ol className={styles.formula} aria-label="Metodens ordning">
                    {step.formula.map((item, index) => (
                      <li key={item}>
                        <span className={styles.formulaIndex}>{index + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : null}

                {step.examples ? (
                  <div className={styles.examples} aria-label="Exempel">
                    {step.examples.map((example, index) => (
                      <div className={styles.example} key={`${example.text}-${index}`}>
                        <span className={styles.speaker}>{example.speaker}</span>
                        <blockquote>“{example.text}”</blockquote>
                      </div>
                    ))}
                  </div>
                ) : null}

                {step.objections ? (
                  <div className={styles.objections}>
                    {step.objections.map((objection) => (
                      <section className={styles.objectionCard} key={objection.objection}>
                        <h3>“{objection.objection}”</h3>
                        <p>{objection.response}</p>
                      </section>
                    ))}
                  </div>
                ) : null}

                {step.keyPoints ? (
                  <ul className={styles.keyPoints}>
                    {step.keyPoints.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                ) : null}

                {step.callout ? <p className={styles.callout}>{step.callout}</p> : null}
              </div>

              <div className={styles.quiz}>
                <p className={styles.quizEyebrow}>Kunskapskoll</p>
                <fieldset disabled={isAnswered}>
                  <legend>{step.quiz.question}</legend>
                  <div className={styles.options}>
                    {step.quiz.options.map((option, index) => {
                      const isCorrectOption = index === step.quiz.correctIndex;
                      const isSelectedWrong =
                        isAnswered && selectedAnswer === index && !isCorrectOption;
                      const showCorrect = isAnswered && isCorrectOption;
                      const optionClasses = [
                        styles.option,
                        showCorrect ? styles.optionCorrect : "",
                        isSelectedWrong ? styles.optionWrong : "",
                      ]
                        .filter(Boolean)
                        .join(" ");

                      return (
                        <label className={optionClasses} key={option}>
                          <input
                            type="radio"
                            name={`quiz-${step.id}`}
                            checked={selectedAnswer === index}
                            onChange={() => selectAnswer(index)}
                          />
                          <span className={styles.optionText}>{option}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {isAnswered ? (
                  <div
                    className={`${styles.feedback} ${
                      selectedAnswer === step.quiz.correctIndex
                        ? styles.feedbackCorrect
                        : styles.feedbackWrong
                    }`}
                    role="status"
                  >
                    <strong>
                      {selectedAnswer === step.quiz.correctIndex ? "Rätt svar" : "Inte riktigt"}
                    </strong>
                    <p>{step.quiz.explanation}</p>
                  </div>
                ) : null}

                <div className={styles.lessonActions}>
                  <button
                    className={styles.navButton}
                    type="button"
                    disabled={currentStep === 0}
                    onClick={goBack}
                  >
                    ← Föregående
                  </button>
                  <button
                    className={styles.primaryButton}
                    type="button"
                    disabled={!isAnswered}
                    onClick={goForward}
                  >
                    {currentStep === courseSteps.length - 1
                      ? "Se sammanfattning"
                      : "Nästa steg →"}
                  </button>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
