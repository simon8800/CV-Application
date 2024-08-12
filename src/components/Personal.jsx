import './Personal.css';

function Personal({personal}) {
  const {firstName, lastName, email, phone} = personal;
  let fullName = createFullName(firstName, lastName)

  return (
    <div className="personal">
      {fullName && <h1>{fullName}</h1>}
      
      <div className="contact">
        {phone && <p>{phone}</p>}
        {email && <p>{email}</p>}
      </div>
    </div>
  )
}

function createFullName(firstName, lastName) {
  let fullName = (firstName ?? "") + " " + (lastName ?? " ")
  return fullName.trim();
}

export default Personal;