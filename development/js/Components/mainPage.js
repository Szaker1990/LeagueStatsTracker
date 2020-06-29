import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {RegionSelector} from "./RegionSelector"
import {keyApi}  from "../Components/currAPIkey"
import {ServerError} from "./ServerError";


export const MainPage = () => {
    const [name, setName] = useState("")
    const [puuid, setPuuid] = useState("")
    const [accId, setAccId] = useState("")
    const [summonerLvl, setSummonerLvl] = useState(0)
    const [id, setId] = useState(null)
    const [totalMaestry, setTotalMaestry] = useState(0)
    const [region, setRegion] = useState("eun1.api.riotgames.com")
    const [flexStats, setFlexStats] = useState({
        tier: "",
        rank: "",
        leaguePoints: 0,
        hotStreak: false,
        wins: 0,
        losses: 0

    })
    const [soloQstats, setSoloQstats] = useState({
        tier: "",
        rank: "",
        leaguePoints: 0,
        hotStreak: false,
        wins: 0,
        losses: 0
    })


    const handleSetName = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {

    }, [totalMaestry])

    const getStats = (url) => {
        fetch(url, {
            method: "GET",
            // mode: "no-cors",
            headers: {
                "X-Riot-Token": `${keyApi}`
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
        getStats(`http://localhost:8080/https://${region}/lol/summoner/v4/summoners/by-name/${name}`)


    }
    useEffect(() => {
        if (id !== null) {
            getMaestry(`http://localhost:8080/https://${region}/lol/champion-mastery/v4/scores/by-summoner/${id}`)
            getRankedStats(`http://localhost:8080/https://${region}/lol/league/v4/entries/by-summoner/${id}`)
        }
    }, [id])

    const getMaestry = (url) => {
        fetch(url, {
            method: "GET",
            // mode: "no-cors",
            headers: {
                "X-Riot-Token": `${keyApi}`
            }

        })
            .then(resp => {
                console.log(resp);
                return resp.json()
            })
            .then(data => {
                setTotalMaestry(data)
            })
            .catch(err => console.log(err))
    }

    const getRankedStats = (url) => {
        fetch(url, {
            method: "GET",
            // mode: "no-cors",
            headers: {
                "X-Riot-Token": `${keyApi}`
            }

        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                const newFlexStats = {
                    tier: data[0].tier,
                    rank: data[0].rank,
                    leaguePoint: data[0].leaguePoints,
                    wins: data[0].wins,
                    losses: data[0].losses

                }
                setFlexStats(newFlexStats)
                const newRankedStats ={
                    tier: data[1].tier,
                    rank: data[1].rank,
                    leaguePoint: data[1].leaguePoints,
                    wins: data[1].wins,
                    losses: data[1].losses

                }
                setSoloQstats(newRankedStats)
            })
            .catch(err => console.log(err))
    }

    const handleChangeRegion = (newRegion) => {
        setRegion(newRegion)
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
                        <RegionSelector eventChange={handleChangeRegion}/>

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
