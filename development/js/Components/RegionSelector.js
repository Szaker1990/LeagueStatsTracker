import React, {useEffect, useState} from 'react';

export const RegionSelector = ({eventChange}) => {
    const[region,setRegion] = useState("eun1.api.riotgames.com")
    const regions = [
        {key: 'BR1', value: "br1.api.riotgames.com"},
        {key: 'EUN1', value: "eun1.api.riotgames.com"},
        {key: 'EUW1', value: "euw1.api.riotgames.com"},
        {key: "JP1", value:"jp1.api.riotgames.com" },
        {key: "KR" , value: "kr.api.riotgames.com"},
        {key: "LA1", value: "la1.api.riotgames.com"},
        {key: "LA2", value: "la2.api.riotgames.com"},
        {key: "NA1", value: "na1.api.riotgames.com"},
        {key: "OC1", value: "oc1.api.riotgames.com"},
        {key: "TR1", value: "tr1.api.riotgames.com"},
        {key: "RU", value: "ru.api.riotgames.com" }
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