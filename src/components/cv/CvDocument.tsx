import {
  CV,
  CV_EMAIL,
  CV_LINKEDIN,
  CV_NAME,
  CV_PHONE,
  CV_PHONE_HREF,
  CV_SITE,
  cvMonth,
  type CvBullet,
  type CvLang,
} from "@/lib/cv";
import styles from "./cv.module.css";

/**
 * The CV itself: one A4 "paper" on screen, the whole printed page in print.
 * Server-only and animation-free, so nothing is hidden when it is printed.
 * Plain single-column text in reading order, so ATS parsers read it as written.
 */
export function CvDocument({ lang }: { lang: CvLang }) {
  const c = CV[lang];

  return (
    <article lang={lang} data-cv className={styles.doc}>
      <header>
        <h1 className={styles.name}>{CV_NAME}</h1>
        <p className={styles.headline}>{c.headline}</p>
        <p className={styles.contact}>
          {c.location} · {c.availability}
        </p>
        <p className={styles.contact}>
          <a href={`mailto:${CV_EMAIL}`}>{CV_EMAIL}</a> ·{" "}
          <a href={CV_PHONE_HREF}>{CV_PHONE}</a> ·{" "}
          <a href={`https://www.${CV_SITE}`}>{CV_SITE}</a> ·{" "}
          <a href={`https://www.${CV_LINKEDIN}`}>{CV_LINKEDIN}</a>
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.heading}>{c.labels.summary}</h2>
        <p>{c.summary}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>{c.labels.skills}</h2>
        <ul className={styles.plain}>
          {c.skills.map((s) => (
            <li key={s.label}>
              <strong className={styles.lead}>{s.label}:</strong> {s.items}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>{c.labels.experience}</h2>
        {c.experience.map((role) => (
          <div key={`${role.title}-${role.start}`} className={styles.item}>
            <div className={styles.row}>
              <h3 className={styles.title}>{role.title}</h3>
              <p className={styles.dates}>
                {cvMonth(role.start, lang)} – {cvMonth(role.end, lang)}
              </p>
            </div>
            <p className={styles.org}>{role.org}</p>
            <ul className={styles.bullets}>
              {role.bullets.map((b, i) => (
                <Bullet key={i} item={b} />
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>{c.labels.products}</h2>
        <ul className={styles.bullets}>
          {c.products.map((b, i) => (
            <Bullet key={i} item={b} />
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>{c.labels.education}</h2>
        {c.education.map((e) => (
          <div key={e.degree} className={styles.row}>
            <p>
              <strong className={styles.lead}>{e.degree}</strong> · {e.school}
            </p>
            <p className={styles.dates}>
              {e.start} – {e.end}
            </p>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>{c.labels.certifications}</h2>
        <ul className={styles.plain}>
          {c.certifications.map((cert) => (
            <li key={cert.name} className={styles.row}>
              <span>{cert.name}</span>
              {cert.year && <span className={styles.dates}>{cert.year}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>{c.labels.languages}</h2>
        <p>{c.languages}</p>
      </section>
    </article>
  );
}

function Bullet({ item }: { item: CvBullet }) {
  if (typeof item === "string") return <li>{item}</li>;
  return (
    <li>
      <strong className={styles.lead}>
        {item.href ? <a href={item.href}>{item.lead}</a> : item.lead}
      </strong>
      : {item.text}
    </li>
  );
}
