/* eslint-disable react/prop-types */
import "./ugly-thing.css";
import {UglyThingsContext} from "../../context/uglyThingsContext";
import {useContext} from "react";



export default function UglyThing(props) {
    const context = useContext(UglyThingsContext);
    

    return (
        <div id="ugly-thing-main-container">
            <div id="ugly-thing-container">
                <h1 id="ugly-thing-title">{props.item.title}</h1>
                <h4 id="ugly-thing-description">{props.item.description}</h4>
                <img src={props.item.imgUrl} id="ugly-thing-img" alt="ugly thing" />
            </div>
            
            <button type="submit" id="delete-button" onClick={() => context.delete(props.item._id)}>Delete</button>
            <button type="submit" id="edit-button" onClick={() => context.edit(props.item._id)}>Edit</button>
        </div>
    )
}