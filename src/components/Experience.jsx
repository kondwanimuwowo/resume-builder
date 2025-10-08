import { useState } from "react";

function ExperienceForm({
  experience,
  updateExperienceEntry,
  removeExperienceEntry,
  addResponsibilityEntry,
  removeResponsibilityEntry,
}) {
  const [newResponsibility, setNewResponsibility] = useState("");

  function handleInputChange(index, field, value) {
    const updatedObj = { ...experience[index], [field]: value };
    return updateExperienceEntry(index, updatedObj);
  }

  return (
    <div>
      {experience.map((exp, index) => (
        <div key={index}>
          <div className="experience input">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={exp.company}
              placeholder="Company Name"
              onChange={(event) =>
                handleInputChange(index, "company", event.target.value)
              }
            />
          </div>

          <div className="experience input">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              value={exp.position}
              placeholder="Front-End Developer"
              onChange={(event) =>
                handleInputChange(index, "position", event.target.value)
              }
            />
          </div>

          <div className="experience input">
            <label htmlFor="period">Period</label>
            <input
              type="text"
              id="period"
              name="period"
              value={exp.period}
              placeholder="2012 - 2024"
              onChange={(event) =>
                handleInputChange(index, "period", event.target.value)
              }
            />
          </div>

          <div className="experience input">
            <h4>Responsibilities:</h4>
            <ul>
              {exp.responsibilities
                .filter((res) => res.trim() !== "")
                .map((res, respIndex) => (
                  <li key={respIndex}>
                    {res}
                    <button
                      onClick={() =>
                        removeResponsibilityEntry(index, respIndex)
                      }
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ul>

            <div>
              <label htmlFor="responsibilities">Add Responsibilities</label>
              <input
                type="text"
                id="responsibilities"
                name="responsibilities"
                value={newResponsibility}
                placeholder="List down some responsibilities or achievements"
                onChange={(event) => setNewResponsibility(event.target.value)}
              />
              <button
                onClick={() => {
                  if (newResponsibility.trim() !== "") {
                    addResponsibilityEntry(index, newResponsibility);
                    setNewResponsibility("");
                  }
                }}
              >
                Add
              </button>
            </div>
          </div>
          <button onClick={() => removeExperienceEntry(index)}>Remove</button>
        </div>
      ))}
      {console.log(experience)}
    </div>
  );
}

export default ExperienceForm;
