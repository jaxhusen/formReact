import React, { useState } from 'react'

function Formagain() {
  const [name, setName] = useState({ firstName: "", lastName: "" });


  const handleFirstNameInput = (e) => {
    setName({
      ...name,
      firstName: e.target.value
    });
  }


  const handleLastNameInput = (e) => {
    setName({
      ...name,
      lastName: e.target.value
    });
  }
  /*  const handleLastNameInput = (e) => {
       setLastName(e.target.value);
   } */

  /*   const handleSubmit = (e) => {
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`);
    } */

  return (
    <form>
      <input type="text" name="firstName" id="firstName" onChange={handleFirstNameInput} value={name.firstName} />
      {name.firstName}
      <input type="text" name="lastName" id="lastName" onChange={handleLastNameInput} value={name.lastName} />
      {name.lastName}

      <button>Send</button>
{/* 
      <h2>{JSON.stringify(name)}</h2> */}

    </form>
  )
}

export default Formagain