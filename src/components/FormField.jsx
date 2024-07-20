function FormField({name, id, inputType}) {
  return(
    <div>
      <label htmlFor="{id}">{name}: </label>
      <input id={id} type={inputType} />
    </div>
  )
}

export default FormField;