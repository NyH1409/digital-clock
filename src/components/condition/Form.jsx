import React from "react";
import "./main.css"

export function Form() {
    return(
        <>
            <form>
                <div>
                    <label htmlFor="admis">Moyenne d'admission :</label>
                    <input type="text" name="admis" />
                </div><div>
                    <label htmlFor="math">Note minimale en Math :</label>
                    <input type="text" name="math" />
                </div><div>
                    <label htmlFor="attente">Moyenne Liste d'attente</label>
                    <input type="text" name="attente" />
                </div>
            </form>
        </>
    )
}