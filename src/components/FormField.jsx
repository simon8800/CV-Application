/* eslint-disable react/prop-types */
import './FormField.css';

function FormField({name, id, type, parent, onChange}) {
  let inputType;
  if (type === "textarea") {
    inputType = <textarea
      name={name}
      parent={parent}
      id={id}
      type={type}
      onChange={(e) => onChange(e)}
      rows="5"
    ></textarea>
  } else {
    inputType = <input name={name} id={id} type={type} onChange={(e) => onChange(e, parent)}/>
  }
  
  return(
    <div className="form-field">
      <label htmlFor={id}>{name}</label>
      {inputType}
    </div>
  )
}

export default FormField;