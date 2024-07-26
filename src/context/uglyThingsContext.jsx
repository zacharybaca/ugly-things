/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const UglyThingsContext = React.createContext();

function UglyThingsContextProvider(props) {
    const [uglyThing, setUglyThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    const [updateThing, setUpdateThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })

    const [uglyThings, setUglyThings] = useState([]);

    const [show, setShow] = useState(false);

    function handleChange(e) {
        const {name, value} = e.target;
        setUglyThing(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleChangeUpdatedForm(e) {
        const {name, value} = e.target;
        setUpdateThing(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // Function to Add Ugly Thing
    function addItem(e) {
        e.preventDefault();
        
        fetch("https://api.vschool.io/zacharybaca/thing", {
            method: "POST",
            body: JSON.stringify(uglyThing),
            headers: {
                "Content-type": "application/json"
            }
        })
       .then(res => res.json())
       .then(data => setUglyThings(prevState => [...prevState, data]))
       .catch(error => {
        console.error("Error Adding Item: ", error);
       });
        
    }

    // Function to Delete Ugly Thing
    function deleteItem(id) {

        fetch(`https://api.vschool.io/zacharybaca/thing/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(() => {
            setUglyThings(prevState => prevState.filter(item => item.id !== id));
        })
        .catch(error => {
            console.error("Error Deleting Item: ", error);
        });
    }

    // Function to Edit Ugly Thing
    function editItem(id) {
        console.log('Item ID: ', id)
        const foundItem = uglyThings.find((item) => item._id === id);

        if (foundItem) {
            setUpdateThing({
                title: foundItem.title,
                description: foundItem.description,
                imgUrl: foundItem.imgUrl
            })
        }

        setShow(true);
    }

    function updateItem(id) {
        
        fetch(`https://api.vschool.io/zacharybaca/thing/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateThing)
        })
        .then(res => res.json())
        .then(data => {
            setUglyThings(prevState => prevState.map(item => item._id === id ? data : item));
        })
        .catch(error => {
            console.error("Error Updating Item: ", error);
        });
    }

    useEffect(() => {
        const getUglyThings = async () => {
            const data = await fetch("https://api.vschool.io/zacharybaca/thing")
            const json = await data.json()
            setUglyThings(json)
        }
        getUglyThings();
        
    }, [])

    
    return (
        <UglyThingsContext.Provider value={{
            uglyThing: uglyThing,
            uglyThings: uglyThings,
            updatedThing: updateThing,
            delete: deleteItem,
            edit: editItem,
            add: addItem,
            update: updateItem,
            show: show,
            setShow: setShow,
            handleChange: handleChange,
            handleChangeUpdate: handleChangeUpdatedForm
        }}>
            {props.children}
        </UglyThingsContext.Provider>
    )
}

export { UglyThingsContext, UglyThingsContextProvider }