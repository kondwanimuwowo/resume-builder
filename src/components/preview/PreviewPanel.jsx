import styles from "./PreviewPanel.module.css";

function PreviewPanel({ personalInfo, education, experience, skills }) {
  return (
    <div className={styles.previewPanel}>
      <aside className={styles.sidebar}>
        {/* Personal info & skills */}
        <div>
          <h1>{personalInfo.fullName}</h1>
          <div>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.linkedIn}</p>
          </div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        {/* Experience & education */}
        <div>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className={styles.prevEdu}>
              <p>{edu.institution}</p>
              <p>{edu.level}</p>
              <p>{edu.period}</p>
            </div>
          ))}
        </div>
        <div>
          <h2>Eperience</h2>
          {experience.map((exp, index) => (
            <div key={index} className={styles.prevExp}>
              <p>{exp.company}</p>
              <p>{exp.position}</p>
              <p>{exp.period}</p>
              <ul>
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className={styles.prevRes}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PreviewPanel;
