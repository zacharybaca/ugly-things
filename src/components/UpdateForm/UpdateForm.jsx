/* eslint-disable react/prop-types */
import "./update-form.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from "react";
import {UglyThingsContext} from "../../context/uglyThingsContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function UpdateForm(props) {
    const context = useContext(UglyThingsContext);

    

    function handleClose() {
        context.setShow(false);
    }

    return (
        <>
            <Modal show={context.show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{`Update For Item ID: ${props.id}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div id="update-form-container">
                    <form id="update-form-inputs" name="ugly-things-form">
                        <input type="text" name="title" id="title-input" placeholder="Title" value={context.updatedThing.title} onChange={context.handleChangeUpdate} required={true} />
                        <input type="text" name="description" id="description-input" placeholder="Description" value={context.updatedThing.description} onChange={context.handleChangeUpdate} required={true} />
                        <input type="text" name="imgUrl" id="image-url-input" placeholder="Image URL" value={context.updatedThing.imgUrl} onChange={context.handleChangeUpdate} required={true} />
                    </form>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => context.update(props.id)}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}