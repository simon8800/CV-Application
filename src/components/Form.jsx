import FormField from './FormField';
import './Form.css';

function Form ({formTitle, inputs}) {
  return (
    <>
    <h2>{formTitle}</h2>
    <form>
      {inputs.map(input => 
        <FormField
          name={input.name}
          id={input.id}
          type={input.type}
        />
      )}
    </form>
    </>
  )
}

export default Form;