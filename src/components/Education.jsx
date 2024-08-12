function Education({education}) {
  const {schoolName, study, studyDate} = education;

  return (
    <div className="education">
      <h2>Education</h2>
      {schoolName && <p>{schoolName}</p>}
      {study && <p>{study}</p>}
      {studyDate && <p>{studyDate}</p>}
    </div>
  );
}

export default Education;