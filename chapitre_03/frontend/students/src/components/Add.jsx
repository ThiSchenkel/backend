import { useState } from 'react';

const Add = () => {
    const [firstName, setfirstName] = useState("");

    const addFirstName = () => {
        fetch("http://localhost:8000/students",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    firstName: firstName,
                })
            })
    };

    return (
        <>
            <h1>Ajouter un prénom</h1>
            <input
                type="text"
                placeholder="Votre prénom"
                value={firstName}
                onChange={(even) => setfirstName(even.target.value)} />
            <button onClick={addFirstName}>Envoyer</button>
        </>
    );
}

export default Add;


