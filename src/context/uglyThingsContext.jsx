/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const UglyThingsContext = React.createContext();

function UglyThingsContextProvider(props) {
    return (
        <UglyThingsContext.Provider>
            {props.children}
        </UglyThingsContext.Provider>
    )
}

export { UglyThingsContext, UglyThingsContextProvider }