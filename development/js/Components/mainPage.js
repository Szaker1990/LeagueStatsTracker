import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";


export const MainPage = () => {
    const [name, setName] = useState("")
    const [puuid, setPuuid] = useState("")
    const [accId, setAccId] = useState("")
    const [summonerLvl, setSummonerLvl] = useState(0)
    const [id, setId] = useState("")
    const [totalMaestry, setTotalMaestry] = useState(0)
    const [flexStats,setFlexStats] = useState({
        tier: "",
        rank: "",
        leaguePoints: 0,
        hotStreak: false

    })
    const [soloQstats,setSoloQstats] = useState({
        tier: "",
        rank: "",
        leaguePoints: 0,
        hotStreak: false
    })


    const handleSetName = (e) => {
        setName(e.target.value)
    }

    useEffect(() =>{

    },[totalMaestry])

    const getStats = (url) => {
        fetch(url, {
            method: "GET",
            // mode: "no-cors",
            headers: {
                "X-Riot-Token": "RGAPI-c8bf86ea-2073-4d6d-aa57-c3694114b679"
            }

        })
            .then(resp => {
                console.log(resp);
                return resp.json()
            })
            .then(data => {
                setPuuid(data.puuid);
                setSummonerLvl(data.summonerLevel);
                setAccId(data.accountId);
                setId(data.id)
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    const handleGetSummoner = (e) => {
        e.preventDefault()
        getStats(`http://localhost:8080/https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`)
        getMaestry(`http://localhost:8080/https://eun1.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/${id}`)
        getRankedStats(`http://localhost:8080/https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`)

    }

    const getMaestry = (url) => {
        fetch(url, {
            method: "GET",
            // mode: "no-cors",
            headers: {
                "X-Riot-Token": "RGAPI-c8bf86ea-2073-4d6d-aa57-c3694114b679"
            }

        })
            .then(resp => {
                console.log(resp);
                return resp.json()
            })
            .then(data => {
                setTotalMaestry(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    const getRankedStats = (url) =>{
        fetch(url, {
            method: "GET",
            // mode: "no-cors",
            headers: {
                "X-Riot-Token": "RGAPI-c8bf86ea-2073-4d6d-aa57-c3694114b679"
            }

        })
            .then(resp => {
                console.log(resp);
                return resp.json()
            })
            .then(data => {
                setFlexStats(data[0])
                setSoloQstats(data[1])
            })
            .catch(err => console.log(err))
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
                        <input className={"formWrapper__name"} type={"text"} placeholder={"Imie Przywolywacza"}
                               onChange={handleSetName}/>
                        <select className={"formWrapper__select"}>
                            <option className={"formWrapper__select-option"}>Eune</option>
                            <option className={"formWrapper__select-option"}>Euw</option>
                            <option className={"formWrapper__select-option"}>Kor</option>
                        </select>
                    </div>
                    <div className={"formWrapper__2nd-row row"}>
                        <button className={"formWrapper__btn-submit"} onClick={handleGetSummoner} type={"submit"}>Szukaj
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
