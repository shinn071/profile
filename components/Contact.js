"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

const contactDetails = [
  {
    label: "Email",
    value: "sharmaineiglesia898@gmail.com",
    href: "mailto:sharmaineiglesia898@gmail.com",
    icon: "✉",
    external: false,
  },
  {
    label: "Phone",
    value: "09702411166",
    href: "tel:09702411166",
    icon: "☎",
    external: false,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = `Portfolio message from ${name}`;
    const body = `From: ${name}\nEmail: ${email}\n\n${message}`;

    setSubmitted(true);
    window.location.href = `mailto:sharmaineiglesia898@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal>
          <h2 className="section-heading" id="contact-heading">Let&apos;s Connect</h2>
          <p className="section-lead">
            Have a project or a question? Send a message and let&apos;s make it
            happen. Feel free to reach out.
          </p>
        </Reveal>

        <div className={styles.contactLayout}>
          <Reveal className={styles.infoColumn}>
            <div className={styles.contactCards}>
              {contactDetails.map((item) => {
                const content = (
                  <>
                    <span className={styles.contactIcon} aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className={styles.contactText}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </span>
                    {item.href && <span className={styles.contactArrow} aria-hidden="true">↗</span>}
                  </>
                );

                return item.href ? (
                  <a
                    className={`glass-card ${styles.contactCard}`}
                    href={item.href}
                    key={item.label}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={`glass-card ${styles.contactCard}`} key={item.label}>
                    {content}
                  </div>
                );
              })}
            </div>
            <p className={styles.availability}>
              <span /> Open to learning and connecting
            </p>
          </Reveal>

          <Reveal className={styles.formReveal} delay={120}>
            <form className={`glass-card ${styles.form}`} onSubmit={handleSubmit}>
              <h3>Send a message</h3>
              <p className={styles.formIntro}>
                Your email app will open with your message ready to send.
              </p>
              <div className={styles.formFields}>
                <label>
                  <span>Name</span>
                  <input
                    autoComplete="name"
                    name="name"
                    placeholder="Your name"
                    required
                    maxLength={100}
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    autoComplete="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    placeholder="What would you like to talk about?"
                    rows={5}
                    required
                    maxLength={2000}
                  />
                </label>
              </div>
              <button className={styles.submitButton} type="submit">
                Prepare email <span aria-hidden="true">↗</span>
              </button>
              {submitted && (
                <p className={styles.successMessage} role="status">
                  Thanks, your message is ready in your email app!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
