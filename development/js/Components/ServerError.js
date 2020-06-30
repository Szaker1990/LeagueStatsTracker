import React from 'react'
import {Link} from "react-router-dom";

export const ServerError = () => {


    return (
        <>
            <div className={"main__header"}>
                <div className={"headerWrapper"}>
                    <h1 className={"headerWrapper__title"}>League Stats Tracker v.0.1</h1>
                    <h2 className={"headerWrapper__greeting"}>ERROR WRONG DATA</h2>
                </div>
            </div>
            <div className={"error__wrapper"}>
                <Link className={"error__link"} to={'/'}>Return</Link>
            </div>
        </>
    )
}