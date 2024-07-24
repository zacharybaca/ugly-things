import "./ugly-things-list.css";
import UglyThing from '../UglyThing/UglyThing';

export default function UglyThingsList() {
    return (
        <div id="ugly-things-list-container">
            <h1>List of Things Considered Ugly</h1>
            <ul id="list-items-container">
                <li><UglyThing /></li>
            </ul>
        </div>
    )
}