/* eslint-disable no-unused-vars */
import "./form.css";
import { useContext } from "react";
import { UglyThingsContext } from "../../context/uglyThingsContext";

export default function Form(props) {
    const context = useContext(UglyThingsContext);

    const shouldDisableButton = !context.uglyThing.title || !context.uglyThing.description || !context.uglyThing.imgUrl;
    
    return (
        <div id="form-container">
            <form id="form-inputs" name="ugly-things-form">
                <input type="text" name="title" id="title-input" placeholder="Title" value={context.uglyThing.title}onChange={context.handleChange} required={true} />
                <input type="text" name="description" id="description-input" placeholder="Description" value={context.uglyThing.description} onChange={context.handleChange} required={true} />
                <input type="text" name="imgUrl" id="image-url-input" placeholder="Image URL" value={context.uglyThing.imgUrl} onChange={context.handleChange} required={true} />
               
            </form>
            <div id="button-container">
                    <button type="submit" onClick={context.add} disabled={shouldDisableButton}>Submit</button>
                </div>
        </div>
    )
}