import React from "react";

export  function Hobbies() {
    const hobbiesFromDB = [
        {
            id: "azeklnkc",
            nom: "HTML"
        },
        {
            id: "klcnqsknq",
            nom: "CSS"
        }
    ];    

    return (
        <ul>
            {hobbiesFromDB.map((hobby) => (
                <li 
                    key={hobby.id}
                    style={{
                        padding: "10px",
                        border: "1px solid white",
                        margin: "0.5em"
                    }}
                >
                    {hobby.nom}
                </li>
            ))}
        </ul>
    );
}
