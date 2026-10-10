"use client";

import { useEffect, useState } from "react";

const phrases = [
  "IT Student",
  "Network Design Enthusiast",
  "Cybersecurity Learner",
  "Aspiring Web Developer",
];

export default function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(phrases[phraseIndex]);
      return undefined;
    }

    const phrase = phrases[phraseIndex];
    const isComplete = text === phrase;
    const isEmpty = text.length === 0;
    const delay = isComplete ? 1500 : deleting && isEmpty ? 350 : deleting ? 38 : 78;

    const timer = window.setTimeout(() => {
      if (isComplete) {
        setDeleting(true);
      } else if (deleting && isEmpty) {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
      } else {
        setText((current) =>
          deleting ? current.slice(0, -1) : phrase.slice(0, current.length + 1),
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, phraseIndex, text]);

  return (
    <span className="typing-text" aria-label={phrases[phraseIndex]}>
      <span aria-hidden="true">{text}</span>
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
}
