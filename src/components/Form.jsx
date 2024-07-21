/* eslint-disable react/prop-types */
import FormField from './FormField';
import './Form.css';

function Form ({formTitle, inputs, parent, onChange}) {
  return (
    <>
    <form>
      <fieldset>
        <legend>{formTitle}</legend>
          {inputs.map(input => 
            <FormField
              parent={parent}
              key={input.id}
              name={input.name}
              id={input.id}
              type={input.type}
              onChange={onChange}
            />
          )}
      </fieldset>
    </form>
    </>
  )
}

export default Form;