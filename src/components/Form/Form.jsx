import "./form.css";

export default function Form() {
    return (
        <div id="form-container">
            <form id="form-inputs" name="ugly-things-form">
                <input type="text" name="title" id="title-input" placeholder="Title" required={true} />
                <input type="text" name="description" id="description-input" placeholder="Description" required={true} />
                <input type="text" name="imageUrl" id="image-url-input" placeholder="Image URL" required={true} />
               
            </form>
            <div id="button-container">
                    <button type="submit">Submit</button>
                </div>
        </div>
    )
}