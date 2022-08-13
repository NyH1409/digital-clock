import React from "react";
import "./main.css"


export function Success(props) {
    const {value} = props;
    return(
        <>
           <div className="container">
                <div className="taux"><div className="value">{value}%</div></div>
           </div>
        </>
    )
}