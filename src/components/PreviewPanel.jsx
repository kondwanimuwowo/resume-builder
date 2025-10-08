function PreviewPanel({ personalInfo, education, experience, skills }) {
  return (
    <>
      <h1>{personalInfo.fullName}</h1>
      <div>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.linkedIn}</p>
      </div>
    </>
  );
}

export default PreviewPanel;
