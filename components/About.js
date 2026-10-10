import Link from "next/link";
import Reveal from "./Reveal";
import Skills from "./Skills";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.aboutCopy}>
          <p className="eyebrow">A little about me</p>
          <h2 className="section-heading" id="about-heading">About Me</h2>
          <p>
            I’m Sharmaine M. Iglesia, a third-year college student specializing
            in Network Design and Management. I am passionate about technology,
            eager to learn new skills, and always looking for opportunities to
            expand my knowledge in the IT field. I enjoy exploring new
            technologies, developing simple projects, solving problems, and
            improving my technical abilities while continuously growing as a
            future IT professional.
          </p>
          <Link className={styles.moreButton} href="#education">
            More About Me <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>

        <Reveal className={styles.skillsReveal} delay={120}>
          <Skills />
        </Reveal>
      </div>
    </section>
  );
}
