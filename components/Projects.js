import Reveal from "./Reveal";
import projects from "../data/projects";
import styles from "./Projects.module.css";

function ProjectMark({ featured }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {featured ? (
        <>
          <rect x="7" y="9" width="34" height="27" rx="4" />
          <path d="M15 17h18M15 23h11M19 36v4m10-4v4m-14 0h18" />
          <path d="m30 27 3 3 6-7" />
        </>
      ) : (
        <>
          <path d="m24 6 15 9v18l-15 9-15-9V15l15-9Z" />
          <path d="M24 16v16m-8-8h16" />
        </>
      )}
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-heading" id="projects-heading">Projects</h2>
          <p className="section-lead">
            Practical ideas, thoughtful problem-solving, and plenty of room to
            keep learning.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal
              className={styles.projectReveal}
              delay={index * 120}
              key={project.title}
            >
              <article
                className={`${styles.projectCard} ${project.featured ? styles.featured : styles.comingSoon}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.projectIcon}>
                    <ProjectMark featured={project.featured} />
                  </div>
                  <span className={`${styles.status} ${project.featured ? styles.inProgress : ""}`}>
                    <span />
                    Status: {project.status}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.features} aria-label="Project features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                {project.featured && (
                  <div className={styles.projectFoot}>
                    <span>Featured project</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
