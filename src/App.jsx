import { useState } from 'react'
import Form from './components/Form'
import Resume from './components/Resume';
import './App.css'

function App() {
  const [info, setInfo] = useState({});

  function handleChange(e, parent) {
    const key = e.target.id;
    const nextInfo = {
      ...info,
    };
    nextInfo[key] = e.target.value;
    setInfo(nextInfo);
  }

  return (
    <div className="app">
      <div className="editor">
        <h2>Editor</h2>
        <Form
          formTitle="General Information"
          parent="genInfo"
          inputs={[
            {
              name: "First Name",
              id: "firstName",
              type: "text"
            },
            {
              name: "Last Name",
              id: "lastName",
              type: "text"
            },
            {
              name:"Email",
              id:"email",
              type:"email"
            },
            {
              name:"Phone",
              id:"phone",
              type:"tel"
            }
          ]}
          onChange={handleChange}
        />
        <Form
          formTitle="Experience"
          inputs={[
            {
              name: "Company Name",
              id: "companyName",
              type: "text"
            },
            {
              name: "Position Title",
              id: "positionTitle",
              type: "text"
            },
            {
              name:"Responsibilities",
              id:"responsibilities",
              type:"textarea"
            },
            {
              name:"Start Date",
              id:"startDate",
              type:"date"
            },
            {
              name:"End Date",
              id:"endDate",
              type:"date"
            },
            {
              name:"Currently Employed",
              id:"employed",
              type:"checkbox"
            }
          ]}
          onChange={handleChange}
        />
        <Form
          formTitle="Education"
          inputs={[
            {
              name: "School Name",
              id: "schoolName",
              type: "text"
            },
            {
              name: "Title of Study",
              id: "study",
              type: "text"
            },
            {
              name:"Date of Study",
              id:"studyDate",
              type:"date"
            }
          ]}
          onChange={handleChange}
        />
      </div>
      <div className="preview">
          <h2>Preview</h2>
          <Resume info={info}/>
      </div>
    </div>
  )
}

export default App
