import "./ugly-thing.css";


export default function UglyThing() {
    return (
        <>
            <div id="ugly-thing-container">
                <h1>Title</h1>
                <h4>Description</h4>
                <img src="#" alt="ugly thing" />
            </div>
            <button type="submit">Delete</button>
            <button type="submit">Edit</button>
        </>
    )
}