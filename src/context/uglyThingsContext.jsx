/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const UglyThingsContext = React.createContext();

function UglyThingsContextProvider(props) {
    const [uglyThing, setUglyThing] = useState({
        title: "",
        description: "",
        imageUrl: ""
    })

    const [uglyThings, setUglyThings] = useState();

    // Function to Delete Ugly Thing
    function deleteItem(id) {
        const newItems = uglyThings.map((item) => item.id !== id);
        setUglyThings(prevState => ({
            ...prevState,
            ...newItems
        }))
    }

    // Function to Edit Ugly Thing
    function editItem(id) {
        const foundItem = uglyThings.find((item) => item.id === id);

        if (foundItem) {
            setUglyThing(prevState => ({
                ...prevState,
                title: foundItem.title,
                description: foundItem.description,
                imageUrl: foundItem.imageUrl
            }))
        }
    }

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
            uglyThing: uglyThing,
            uglyThings: uglyThings,
            delete: deleteItem,
            edit: editItem
        }}>
            {props.children}
        </UglyThingsContext.Provider>
    )
}

export { UglyThingsContext, UglyThingsContextProvider }