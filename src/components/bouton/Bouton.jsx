import React from "react";
import "./main.css"

export function Bouton({title, attr}) {
    return(
        <>
            <button className={attr}>{title}</button>
        </>
    )
}