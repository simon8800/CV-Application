import './Resume.css';
import ResumeName from './ResumeName';

function Resume({info}) {
  const {firstName, lastName, email, phone} = info;
  return (
    <div className="resume">
      {(firstName || lastName) ? <ResumeName firstName={firstName} lastName={lastName}/> : null}
    </div>
  )
}

export default Resume;