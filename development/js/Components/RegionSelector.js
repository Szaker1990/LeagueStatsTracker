import React, {useEffect, useState} from 'react';

export const RegionSelector = ({eventChange}) => {
    const[region,setRegion] = useState("eun1.api.riotgames.com")
    const regions = [
        {key: 'BR1', value: "br1.api.riotgames.com"},
        {key: 'EUN1', value: "eun1.api.riotgames.com"},
        {key: 'EUW1', value: "euw1.api.riotgames.com"},
        // EUN1: "eun1.api.riotgames.com",
        // EUW1: "euw1.api.riotgames.com",
        // JP1: "jp1.api.riotgames.com",
        // KR: "kr.api.riotgames.com",
        // LA1: "la1.api.riotgames.com",
        // LA2: "la2.api.riotgames.com",
        // NA1: "na1.api.riotgames.com",
        // OC1: "oc1.api.riotgames.com",
        // TR1: "tr1.api.riotgames.com",
        // RU: "ru.api.riotgames.com"

    ]

    useEffect(()=>{
        if(typeof eventChange === "function"){
            eventChange(region)
        }

    },[region])

    return (
        <>
            <select className={"formWrapper__select"} value={region} onChange={event => setRegion(event.target.value)}>
                {regions.map((element) => <option
                    className={'formWrapper__select-option'} key={element.key} value={element.value}>{element.key}</option>)}
            </select>
        </>

    )


}