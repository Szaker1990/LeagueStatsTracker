import React, {Component} from "react";
import ReactDOM from "react-dom";

export const MainPage = () => {

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
                    <input className={"formWrapper__name"} type={"text"} placeholder={"Imie Przywolywacza"}/>
                    <select className={"formWrapper__select"}>
                        <option className={"formWrapper__select-option"}>Eune</option>
                        <option className={"formWrapper__select-option"}>Euw</option>
                        <option className={"formWrapper__select-option"}>Kor</option>
                    </select>
                    </div>
                    <div className={"formWrapper__2nd-row row"}>
                    <button className={"formWrapper__btn-submit"} type={"submit"}>Szukaj</button>
                    </div>
                </form>
            </div>
        </>
    )
}