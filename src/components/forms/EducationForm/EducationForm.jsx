import styles from "./EducationForm.module.css";

function EducationForm({
  education,
  updateEducationEntry,
  removeEducationEntry,
}) {
  function handleInputChange(index, field, value) {
    const updatedObj = { ...education[index], [field]: value };
    return updateEducationEntry(index, updatedObj);
  }

  return (
    <div className={styles.education}>
      <h2 className={styles.heading}>Education</h2>
      {education.map((edu, index) => (
        <div className={styles.container} key={index}>
          <h3 className={styles.number}>{index + 1}</h3>
          <label htmlFor="institution">Institution</label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={edu.institution}
            placeholder="The Copperbelt University"
            onChange={(event) =>
              handleInputChange(index, "institution", event.target.value)
            }
          />

          <label htmlFor="level">Level</label>
          <input
            type="text"
            id="level"
            name="level"
            value={edu.level}
            placeholder="Bachelors Degree"
            onChange={(event) =>
              handleInputChange(index, "level", event.target.value)
            }
          />

          <label htmlFor="period">Period</label>
          <input
            type="text"
            id="period"
            name="period"
            value={edu.period}
            placeholder="2012 - 2024"
            onChange={(event) =>
              handleInputChange(index, "period", event.target.value)
            }
          />
          <button
            className={styles.removeBtn}
            onClick={() => removeEducationEntry(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default EducationForm;
