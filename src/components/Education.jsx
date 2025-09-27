function Education({ education, setEducation }) {
  return (
    <form>
      <label htmlFor="institution">Institution</label>
      <input
        type="text"
        id="institution"
        name="institution"
        value={education.institution}
        placeholder="The Copperbelt University"
        onChange={(event) =>
          setEducation({ ...Education, institution: event.target.value })
        }
      />
    </form>
  );
}

export default Education;
