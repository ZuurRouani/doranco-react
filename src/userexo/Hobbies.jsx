
//import React from "react";

export function Hobbies() {
    const hobbiesFromDB = ['HTML', 'CSS', 'Javascript', 'React'];

    return (
        <ul>
            {hobbiesFromDB.map((hobby, index) => {
                return (
                    <li
                        key={index} // Ajout d'une clé unique (index dans ce cas)
                        style={{
                            padding: "10px",
                            border: "1px solid white",
                            margin: "0.5em"
                        }}
                    >
                        {hobby}
                    </li>
                );
            })}
        </ul>
    );
}

