import React from "react";
import {FirstName} from "./FirstName";
import {LastName} from "./LastName";

 export function FullName() {
    return (
        <h1>
            <FirstName />
            <LastName />
        </h1>
    );
}

