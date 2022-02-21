import React, { useState } from 'react'

function Registerform() {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        type: "",
        comment: ""
    })


const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    console.log(name, value)
    setUser({
        ...user,
        [name]: value
    })
}



    /* const handleFirstNameInput = (e) => {
        setUser({
            ...user,
            firstname: e.target.value
        });
    }

    const handleLastNameInput = (e) => {
        setUser({
            ...user,
            lastname: e.target.value
        });
    }

const handleType = (e) => {
    setUser({
        ...user,
        type: e.target.value
    });
}

    const handleCommentTextarea = (e) => {
        setUser({
            ...user,
            comment: e.target.value
        });
    } */

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form was successfully submitten. Well done, ${user.firstname} ${user.lastname}`)
}

    return (
        <form on onSubmit={handleSubmit}>
            <label> Firstname: </label>
            <input type="text" name="firstname" value={user.firstname} onChange={handleChange} />
            <br />

            <label> Lastname: </label>
            <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />
            <br />

            <label> I want to: </label>
            <select name="type" value={user.type} onChange={handleChange}>
                <option value="--">--</option>
                <option value="Buy"> Buy </option>
                <option value="Ask"> Ask something..</option>
                <option value="Request"> Make a request </option>
                </select>
                <br />

            <label> Comment: </label>
            <textarea name="comment" value={user.comment} onChange={handleChange} />
<br/>
            <button> Submit </button>
            {/* <h2>{JSON.stringify(user)}</h2>  */}
        </form>
    )
}

export default Registerform