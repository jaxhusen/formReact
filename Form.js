import React, { useState } from 'react'

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" onChange={handleFirstNameInput} value={firstName} />
            <input type="text" name="lastname" onChange={handleLastNameInput} value={lastName} />

            <button>Send</button>

            {
                fullName
                ? <h2> Hej {fullName}</h2>
                : ""
            } 

        </form>
    )
}

export default Form