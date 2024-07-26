/* eslint-disable react/prop-types */
import "./ugly-thing.css";
import {UglyThingsContext} from "../../context/uglyThingsContext";
import {useContext} from "react";
import UpdateForm from "../UpdateForm/UpdateForm";



export default function UglyThing(props) {
    const context = useContext(UglyThingsContext);
    

    return (
        <div id="ugly-thing-main-container">
            <div id="ugly-thing-container">
                <h1 id="ugly-thing-title">{props.title}</h1>
                <h4 id="ugly-thing-description">{props.description}</h4>
                <img src={props.imgUrl} id="ugly-thing-img" alt="ugly thing" />
            </div>
            
            <button type="submit" id="delete-button" onClick={() => context.delete(props.id)}>Delete</button>
            <button type="submit" id="edit-button" onClick={() => context.edit(props.id)}>Edit</button>
            <UpdateForm id={props.id}/>
        </div>
    )
}