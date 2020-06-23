import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import './API'
import {API_Key} from "./API";

export const MainPage = () => {
    const[dataToAnalyze,setDataToAnalyze] = useState([])
    const[name,setName] = useState("")
    const APIKEY = "https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Shxxx?api_key=RGAPI-b23c358b-5215-42f2-94bb-3d9bc322c93b"
    const APIAdress = `https://api.codetabs.com/v1/proxy?quest=<${APIKEY}>`
    const handleSetName = (e) =>{
        setName(e.target.value)
    }
    const getStats = (url) =>{
        fetch(url,{
            method: "GET",

            header: {
                "X-Riot-Token": "RGAPI-b23c358b-5215-42f2-94bb-3d9bc322c93b"
            }

        })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const handleGetSummoner = (e) =>{
        e.preventDefault()
        getStats(APIAdress)
    }


    return (
        <>
            <div className={"main__header"}>
                <div className={"headerWrapper"}>
                    <h1>League Stats Tracker v.0.1</h1>
                    <h2>Witaj Przywolywaczu</h2>
                </div>
            </div>
            <div className={"main__body"}>
                <form className={"formWrapper__form"}>
                    <div className={"formWrapper__1st-row row"}>
                    <input className={"formWrapper__name"} type={"text"} placeholder={"Imie Przywolywacza"} onChange={handleSetName}/>
                    <select className={"formWrapper__select"}>
                        <option className={"formWrapper__select-option"}>Eune</option>
                        <option className={"formWrapper__select-option"}>Euw</option>
                        <option className={"formWrapper__select-option"}>Kor</option>
                    </select>
                    </div>
                    <div className={"formWrapper__2nd-row row"}>
                    <button className={"formWrapper__btn-submit"} onClick={handleGetSummoner} type={"submit"}>Szukaj</button>
                    </div>
                </form>
            </div>
        </>
    )
}