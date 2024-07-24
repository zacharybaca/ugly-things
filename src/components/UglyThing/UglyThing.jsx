/* eslint-disable react/prop-types */
import "./ugly-thing.css";
import {UglyThingsContext} from "../../context/uglyThingsContext";
import {useContext} from "react";



export default function UglyThing(props) {
    const context = useContext(UglyThingsContext);

    return (
        <>
            <div id="ugly-thing-container">
                <h1>{props.item.title}</h1>
                <h4>{props.item.description}</h4>
                {/* <img src={props.item.imgUrl} alt="ugly thing" /> */}
            </div>
            <button type="submit" onClick={() => context.delete(context.uglyThing._id)}>Delete</button>
            <button type="submit" onClick={() => context.edit(context.uglyThing._id)}>Edit</button>
        </>
    )
}