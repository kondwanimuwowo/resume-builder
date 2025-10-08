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
    <div>
      {education.map((edu, index) => (
        <div key={index}>
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
          <button onClick={() => removeEducationEntry(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default EducationForm;
