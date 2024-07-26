import "./ugly-things-list.css";
import UglyThing from '../UglyThing/UglyThing';
import {UglyThingsContext} from "../../context/uglyThingsContext";
import {useContext} from "react";

export default function UglyThingsList() {
    const context = useContext(UglyThingsContext);

    return (
        <div id="ugly-things-list-container">
            <h1 id="main-heading">List of Things Considered Ugly</h1>
            <ul id="list-items-container">
                    {context.uglyThings.map((item) => <li key={item._id}><UglyThing id={item._id} title={item.title} description={item.description} imgUrl={item.imgUrl}/></li>)}
            </ul>
        </div>
    )
}