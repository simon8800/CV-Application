import { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {

  return (
    <>
      <Form
        formTitle="General Information"
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
          }
      ]}
      />
    </>
  )
}

export default App
