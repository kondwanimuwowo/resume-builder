import { useState } from "react";
import styles from "./SkillsForm.module.css";

function SkillsForm({ skills, addSkillEntry, removeSkillEntry }) {
  const [newSkill, setNewSkill] = useState("");

  function handleAdd() {
    addSkillEntry(newSkill);
    setNewSkill("");
  }

  return (
    <div className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      <ul>
        {skills
          .filter((skill) => skill.trim() !== "")
          .map((skill, index) => (
            <li key={index}>
              {skill}
              <button onClick={() => removeSkillEntry(index)}>Delete</button>
            </li>
          ))}
      </ul>

      <label htmlFor="skill">New Skill</label>
      <input
        type="text"
        id="skill"
        name="skill"
        placeholder="e.g., Javascript"
        value={newSkill}
        onChange={(event) => setNewSkill(event.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default SkillsForm;
