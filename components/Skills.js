"use client";

import { useEffect, useRef, useState } from "react";
import skills from "../data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  const listRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.skillPanel} ref={listRef}>
      <div className={styles.panelHeading}>
        <span className={styles.panelIcon} aria-hidden="true">✳</span>
        <div>
          <h3>My Skills</h3>
          <p>Skills (learning progress)</p>
        </div>
      </div>
      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div className={styles.skill} key={skill.name}>
            <div className={styles.skillMeta}>
              <span className={styles.skillName}>
                <span className={styles.skillIcon} aria-hidden="true">{skill.icon}</span>
                {skill.name}
              </span>
            </div>
            <div
              className={styles.skillTrack}
              role="progressbar"
              aria-label={`${skill.name} learning progress`}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={skill.level}
            >
              <span
                className={`${styles.skillFill} ${visible ? styles.skillFillVisible : ""}`}
                style={{
                  "--skill-level": `${skill.level}%`,
                  transitionDelay: `${index * 90}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
