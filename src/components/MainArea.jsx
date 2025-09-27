import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PreviewPanel from "./PreviewPanel";
import Education from "./Education";
import Experience from "./Experience";

function Main() {
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

  return (
    <main>
      <div className="info">
        <PersonalInfo
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <Education education={education} setEducation={setEducation} />
        <Experience experience={experience} setExperience={setExperience} />
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

export default Main;
