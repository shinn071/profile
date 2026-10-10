import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import StatsStrip from "./StatsStrip";
import TypingText from "./TypingText";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero} id="home" aria-labelledby="hero-title">
        <div className={styles.ambient} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.copy}>
            <Reveal className={styles.introReveal}>
              <p className="eyebrow">Hello, I&apos;m</p>
              <h1 id="hero-title" className={styles.title}>Sharmaine</h1>
              <p className={styles.roleLine}>
                <span className={styles.rolePrefix}>An </span>
                <TypingText />
              </p>
              <p className={styles.intro}>
                Student &amp; tech enthusiast. Constantly learning, building
                simple projects, and leveling up my skills one step at a time.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href="#contact">
                  Contact Me <span aria-hidden="true">↗</span>
                </Link>
                <Link className={styles.secondaryButton} href="#projects">
                  View Projects
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal className={styles.visualReveal} delay={120}>
            <div className={styles.visual}>
              <div className={styles.portraitHalo} aria-hidden="true" />
              <div className={styles.orbit} aria-hidden="true" />
              <div className={styles.photoFrame}>
                <Image
                  src="/images/sharmaine.jpg"
                  alt="Portrait of Sharmaine M. Iglesia"
                  fill
                  priority
                  sizes="(max-width: 760px) 70vw, 430px"
                  className={styles.photo}
                />
              </div>
              <div className={`${styles.floatCard} ${styles.studentCard}`}>
                <span className={styles.cardMark} aria-hidden="true">⌂</span>
                <span>
                  <strong>3rd Year</strong>
                  <small>BSIT Student</small>
                </span>
              </div>
              <div className={`${styles.floatCard} ${styles.specializationCard}`}>
                <span className={styles.cardMark} aria-hidden="true">⌁</span>
                <span>
                  <strong>Network Design and Management</strong>
                  <small>Specialization</small>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
        <a className={styles.scrollCue} href="#about" aria-label="Scroll to About">
          <span className={styles.scrollMouse} aria-hidden="true"><span /></span>
        </a>
      </section>
      <StatsStrip />
    </>
  );
}
