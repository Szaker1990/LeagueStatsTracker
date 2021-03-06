import React from 'react'

export const PlayerCard = ({
                               summonerName, summonerLevel, maestry, soloWins, soloLoss, soloRank, soloTier,
                               soloPoints, soloWinRate, flexWins, flexLoss, flexRank, flexTier, flexPoints, flexWinRate
                           }) => {
    return (
        <>
            <div className={"cardWrapper"}>
                <div className={"summonerStats"}>
                    <h1> Name: {summonerName}</h1>
                    <h2> Level: {summonerLevel}</h2>
                    <h2> Total Champion Maestry : {maestry}</h2>
                </div>
                <div className={"soloStats"}>
                    <h2>Solo Stats</h2>
                    <p>Division : {soloTier} {soloRank}</p>
                    <p>League Points : {soloPoints} LP</p>
                    <p>Wins {soloWins} / Losses {soloLoss}</p>
                    <p>Win Rate {soloWinRate}</p>
                </div>
                <div className={"flexStats"}>
                    <h2>Flex 5v5 Stats</h2>
                    <p>Division: {flexTier} {flexRank}</p>
                    <p>League Points : {flexPoints} LP</p>
                    <p>Wins {flexWins} / Losses {flexLoss} </p>
                    <p>Win Rate {flexWinRate}</p>
                </div>
            </div>

        </>
    )
}