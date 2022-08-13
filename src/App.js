import { Table } from "./components/table/Table";
import React, {useEffect} from "react";
import {useState} from "react";
import {Success} from "./components/Success/Success";
import {Form} from  "./components/condition/Form"
import "./App.css"
import {SearchBar} from "./components/searchbar/SearchBar";
import {Bouton} from "./components/bouton/Bouton";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    const [taux, setTaux] = useState(100)

    useEffect(()=>{
        const promise = axios.get("");
        promise.then((response)=>{
            setData(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    })

    function searchFilter(e){
        const filteredData = data.filter(elt => elt.firstName.includes(e.target.value));
        setData(filteredData);
    }
  return (
    <>
        <div className="main-page">
            <div>
                <Form />
                <div className="average">
                    <Success value={taux}/>
                    <Success value={taux}/>
                </div>
            </div>
            <div>
                <SearchBar />
                <Table data={data}>
                    <tr>
                        <th>#</th>
                        <th>Nom(s)</th>
                        <th>Prénom(s)</th>
                        <th>Français concours</th>
                        <th>Français Tle/bacc</th>
                        <th>Français: Concours+Tle</th>
                        <th>Math concours</th>
                        <th>Math Terminale</th>
                        <th>Math: Concours+Tle</th>
                        <th>Moyenne de sélection</th>
                        <th>Statut</th>
                    </tr>
                </Table>
                <Bouton title="Télécharger PDF" attr = "generate"/>
            </div>
        </div>

    </>
  );
}

export default App;
