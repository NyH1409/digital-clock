import React from "react";
import "./main.css"



export function Table(props) {
    const { children, data } = props;
    return(
        <>
            <div>
                <table>
                    { children }
                    {
                        data.map((elt, k)=>(
                            <tr>
                                <td>{k}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </>
    )
}