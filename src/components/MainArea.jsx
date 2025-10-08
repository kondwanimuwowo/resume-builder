import { useState } from "react";
import PersonalInfoForm from "./PersonalInfo";
import PreviewPanel from "./PreviewPanel";
import EducationForm from "./Education";
import ExperienceForm from "./Experience";
import SkillsForm from "./Skills";
import "./MainArea.css";

function MainArea() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    city: "",
    country: "",
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const emptyEducationEntry = {
    institution: "",
    level: "",
    period: "",
  };

  const emptyExperienceEntry = {
    company: "",
    position: "",
    period: "",
    responsibilities: [""],
  };

  function addEducationEntry() {
    setEducation((prev) => [...prev, { ...emptyEducationEntry }]);
  }

  function addExperienceEntry() {
    setExperience((prev) => [
      ...prev,
      { ...emptyExperienceEntry, responsibilities: [""] },
    ]);
  }

  function updateEducationEntry(index, updatedObj) {
    setEducation((prev) => {
      const newEducation = [...prev];
      newEducation[index] = updatedObj;
      return newEducation;
    });
  }

  function updateExperienceEntry(index, updatedObj) {
    setExperience((prev) => {
      const newExperience = [...prev];
      newExperience[index] = updatedObj;
      return newExperience;
    });
  }

  function removeEducationEntry(indexToRemove) {
    setEducation((prev) =>
      prev.filter((_, currentIndex) => indexToRemove !== currentIndex)
    );
  }

  function removeExperienceEntry(indexToRemove) {
    setExperience((prev) =>
      prev.filter((_, currentIndex) => indexToRemove !== currentIndex)
    );
  }

  function addSkillEntry(newSkill) {
    setSkills((prev) => [...prev, newSkill]);
  }

  function removeSkillEntry(indexToRemove) {
    setSkills((prev) =>
      prev.filter((_, currentIndex) => indexToRemove !== currentIndex)
    );
  }

  function addResponsibilityEntry(expIndex, newResponsibility) {
    setExperience((prev) => {
      const newExperience = [...prev];
      newExperience[expIndex] = {
        ...newExperience[expIndex],
        responsibilities: [
          ...newExperience[expIndex].responsibilities,
          newResponsibility,
        ],
      };
      return newExperience;
    });
  }

  function removeResponsibilityEntry(expIndex, respIndex) {
    setExperience((prev) => {
      const newExperience = [...prev];
      newExperience[expIndex] = {
        ...newExperience[expIndex],
        responsibilities: newExperience[expIndex].responsibilities.filter(
          (_, index) => respIndex !== index
        ),
      };
      return newExperience;
    });
  }

  return (
    <main>
      <div className="info">
        <PersonalInfoForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      </div>

      <div className="edu">
        <EducationForm
          education={education}
          updateEducationEntry={updateEducationEntry}
          removeEducationEntry={removeEducationEntry}
        />
        <button onClick={addEducationEntry}>Add Education</button>
      </div>

      <div className="exp">
        <ExperienceForm
          experience={experience}
          updateExperienceEntry={updateExperienceEntry}
          removeExperienceEntry={removeExperienceEntry}
          addResponsibilityEntry={addResponsibilityEntry}
          removeResponsibilityEntry={removeResponsibilityEntry}
        />
        <button onClick={addExperienceEntry}>Add Experience</button>
      </div>

      <div className="skills">
        <SkillsForm
          skills={skills}
          addSkillEntry={addSkillEntry}
          removeSkillEntry={removeSkillEntry}
        />
        <button onClick={addSkillEntry}>Add Skill</button>
      </div>

      <div className="preview">
        <PreviewPanel
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          skills={skills}
        />
      </div>
    </main>
  );
}

export default MainArea;
