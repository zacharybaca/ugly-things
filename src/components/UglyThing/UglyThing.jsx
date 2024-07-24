import "./ugly-thing.css";
import {useContext} from "react";
import {UglyThingsContext} from "../../context/uglyThingsContext";


export default function UglyThing() {
    const context = useContext(UglyThingsContext);

    return (
        <>
            <div id="ugly-thing-container">
                <h1>Title</h1>
                <h4>Description</h4>
                <img src="#" alt="ugly thing" />
            </div>
            <button type="submit" onClick={() => context.delete(context.uglyThing._id)}>Delete</button>
            <button type="submit" onClick={() => context.edit(context.uglyThing._id)}>Edit</button>
        </>
    )
}