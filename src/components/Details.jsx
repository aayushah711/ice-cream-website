import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toggleToast } from "../redux/actions";
import { useDispatch } from "react-redux";

const Details = ({ modal, hideModal, showModal }) => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    const cart = useSelector((state) => state.cart);
    const history = useHistory();
    const [details, setDetails] = useState({
        name: "",
        address: "",
        phone: "",
    });
    const [disabled, setDisabled] = useState(true);

    const onSubmit = () => {
        dispatch(
            toggleToast({
                status: true,
                message: "Thank you for placing order with us!",
            })
        );
        history.push("/");
    };
    const styles =
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";

    useEffect(
        () =>
            setDisabled(!!details.name && !!details.address && !!details.phone),
        [details.name, details.address, details.phone]
    );

    const onDetailsChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDetails({
            ...details,
            [name]: value,
        });
    };

    return (
        <Modal show={modal} onHide={hideModal}>
            <Modal.Header className={styles}>
                <Modal.Title>Contact Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles}>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Name"
                            name="name"
                            value={details.name}
                            onChange={onDetailsChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            placeholder="Address"
                            name="address"
                            value={details.address}
                            onChange={onDetailsChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone no.</Form.Label>
                        <Form.Control
                            type="mobile"
                            placeholder="Phone"
                            name="phone"
                            value={details.phone}
                            onChange={onDetailsChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className={styles}>
                <Button variant="danger" onClick={hideModal}>
                    Close
                </Button>
                <Button
                    variant={theme === "dark" ? "light" : "dark"}
                    onClick={onSubmit}
                    disabled={!disabled}
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Details;
