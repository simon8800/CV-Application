import './Resume.css';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';

function Resume({info}) {
  const {
    firstName, 
    lastName, 
    email, 
    phone, 
    companyName, 
    position, 
    responsibilities, 
    startDate,
    endDate,
    employed,
    schoolName,
    study,
    studyDate
  } = info;
  
  const personalInfo = {
    firstName,
    lastName,
    email,
    phone,
  }

  const experienceInfo = {
    companyName,
    position,
    responsibilities,
    startDate,
    endDate,
    employed,
  }

  const educationInfo = {
    schoolName,
    study,
    studyDate
  }

  return (
    <div className="resume">
      <Personal personal={personalInfo}/>
      <Experience experience={experienceInfo}/>
      <Education education={educationInfo}/>
    </div>
  )
}


export default Resume;