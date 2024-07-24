/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const UglyThingsContext = React.createContext();

function UglyThingsContextProvider(props) {
    const [uglyThings, setUglyThings] = useState();

    useEffect(() => {
        const getUglyThings = async () => {
            const data = await fetch("https://api.vschool.io/zacharybaca/thing");
            const json = await data.json();
            setUglyThings(json);
            console.log(uglyThings)
        }
        getUglyThings();
    }, [uglyThings])

    return (
        <UglyThingsContext.Provider value={{
            uglyThings: uglyThings
        }}>
            {props.children}
        </UglyThingsContext.Provider>
    )
}

export { UglyThingsContext, UglyThingsContextProvider }