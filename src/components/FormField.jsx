import './FormField.css';

function FormField({name, id, parent, type, onChange}) {
  let inputType;
  if (type === "textarea") {
    inputType = <textarea
      name={name}
      parent={parent}
      id={id}
      type={type}
      onChange={(e) => onChange(e)}
    ></textarea>
  } else {
    inputType = <input name={name} parent={parent} id={id} type={type} onChange={(e) => onChange(e)}/>
  }
  
  return(
    <div className="form-field">
      <label htmlFor={id}>{name}</label>
      {inputType}
    </div>
  )
}

export default FormField;