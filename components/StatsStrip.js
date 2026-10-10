"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import styles from "./StatsStrip.module.css";

const stats = [
  { value: "3rd Year", label: "College Level", icon: "⌂" },
  { value: "BSIT", label: "Course", icon: "⌘" },
  { value: "1", suffix: "", label: "Project in Progress", icon: "▣", countTo: 1 },
  { value: "3+", suffix: "+", label: "Interest Areas", icon: "✳", countTo: 3 },
];

export default function StatsStrip() {
  const stripRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState([0, 0]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(strip);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;

    const targets = stats
      .filter((stat) => stat.countTo !== undefined)
      .map((stat) => stat.countTo);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCounts(targets);
      return undefined;
    }

    const duration = 800;
    const interval = 32;
    let elapsed = 0;
    const timer = window.setInterval(() => {
      elapsed += interval;
      const progress = Math.min(elapsed / duration, 1);
      setCounts(targets.map((target) => Math.floor(target * progress)));
      if (progress === 1) window.clearInterval(timer);
    }, interval);

    return () => window.clearInterval(timer);
  }, [started]);

  let numberIndex = 0;

  return (
    <div className={`container ${styles.statsWrap}`} ref={stripRef}>
      <Reveal>
        <div className={`glass-card ${styles.statsBar}`} aria-label="Portfolio overview">
          {stats.map((stat) => {
            const countIndex = stat.countTo === undefined ? -1 : numberIndex++;
            const value =
              countIndex >= 0
                ? `${counts[countIndex]}${stat.suffix}`
                : stat.value;

            return (
              <div className={styles.stat} key={stat.label}>
                <span className={styles.statIcon} aria-hidden="true">{stat.icon}</span>
                <span className={styles.statText}>
                  <strong>{value}</strong>
                  <span>{stat.label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
