import Image from "next/image";
import Reveal from "./Reveal";
import education from "../data/education";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section
      className={`section ${styles.section}`}
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow">Learning journey</p>
          <h2 className="section-heading" id="education-heading">Education</h2>
          <p className="section-lead">
            Building a foundation in information technology, one lesson and
            project at a time.
          </p>
        </Reveal>

        <div className={styles.timeline}>
          <span className={styles.timelineLine} aria-hidden="true" />
          {education.map((entry, index) => (
            <Reveal
              className={`${styles.timelineEntry} ${index % 2 === 1 ? styles.right : ""}`}
              delay={index * 110}
              key={`${entry.program}-${entry.institution}`}
            >
              <span className={styles.timelineDot} aria-hidden="true" />
              <article className={`glass-card ${styles.educationCard}`}>
                <div className={styles.cardHeader}>
                  <Image
                    className={styles.schoolLogo}
                    src={entry.logo}
                    alt="NVSU College of Information Technology logo"
                    width={76}
                    height={76}
                    sizes="76px"
                  />
                  <p className={styles.level}>{entry.level}</p>
                </div>
                <h3>{entry.program}</h3>
                <p className={styles.institution}>{entry.institution}</p>
                <div className={styles.specialization}>
                  <span>Specialization</span>
                  <strong>{entry.specialization}</strong>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
