import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart, toggleToast } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Home = () => {
    const theme = useSelector((state) => state.theme);
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const history = useHistory();

    const initState = {
        step1: "",
        step2: "",
        step3: {
            tuttiFruiti: false,
            chocolateChips: false,
            roastedAlmonds: false,
        },
    };
    const [form, setForm] = useState(initState);

    const initErr = {
        err: false,
        step: 0,
    };
    const [err, setErr] = useState(initErr);

    const [validated, setValidated] = useState(null);

    const checkValidity = () => {
        // step 1 validation
        const cone = form.step1;
        if (cone === "") {
            setErr({
                err: "Please select any 1 cone wafer.",
                step: 1,
            });
            return false;
        }

        // step 2 validation
        const flavour = form.step2;
        if (flavour === "") {
            setErr({
                err: "Please select any 1 base flavour.",
                step: 2,
            });
            return false;
        }

        // step 3 validation
        const { tuttiFruiti, chocolateChips, roastedAlmonds } = form.step3;
        if (tuttiFruiti && chocolateChips && roastedAlmonds) {
            setErr({
                err: "Please select any 2 toppings.",
                step: 3,
            });
            return false;
        }

        setErr(initErr);
        return true;
    };

    useEffect(() => {
        if (err.err) {
            checkValidity();
        }
    }, [form]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (checkValidity() === false) {
            setValidated(false);
            return;
        }

        // Changing data structure for toppings
        const toppings = [];
        for (let key in form.step3) {
            if (form.step3[key]) {
                toppings.push(key);
            }
        }

        // Adding to cart
        dispatch(
            addToCart({
                step1: form.step1,
                step2: form.step2,
                toppings,
                id: uuid(),
            })
        );

        // Success message toast
        dispatch(
            toggleToast({
                status: true,
                message: "Successfully added Ice cream to cart",
            })
        );

        // Resetting form
        setForm(initState);
    };

    const onChange = (e) => {
        // Different on change function for step 3
        if (e.target.name === "step3") {
            return;
        }

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onStep3Change = (e) => {
        const value = e.target.value;
        setForm({
            ...form,
            step3: {
                ...form.step3,
                [value]: !form.step3[value],
            },
        });
    };

    const showCart = (e) => {
        history.push("/cart");
    };

    return (
        <Container>
            <Form validated={validated} onSubmit={handleSubmit} id="form">
                <Row>
                    <Col>
                        <h3 className="mt-5">Step 1</h3>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Choose cone wafer type</h4>
                        {err.err && err.step === 1 && (
                            <Form.Text className="text-danger">
                                {err.err}
                            </Form.Text>
                        )}
                        <Form.Check
                            inline
                            label="Plain"
                            name="step1"
                            type="radio"
                            value="plain"
                            checked={form.step1 === "plain"}
                            onChange={onChange}
                        />
                        <Form.Check
                            inline
                            label="Chocolate"
                            name="step1"
                            type="radio"
                            value="chocolate"
                            checked={form.step1 === "chocolate"}
                            onChange={onChange}
                        />
                        <Form.Check
                            inline
                            label="Waffle"
                            name="step1"
                            type="radio"
                            value="waffle"
                            checked={form.step1 === "waffle"}
                            onChange={onChange}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3 className="mt-5">Step 2</h3>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Choose base flavour</h4>
                        {err.err && err.step === 2 && (
                            <Form.Text className="text-danger">
                                {err.err}
                            </Form.Text>
                        )}
                        <Form.Check
                            inline
                            label="Vanilla"
                            name="step2"
                            type="radio"
                            value="vanilla"
                            checked={form.step2 === "vanilla"}
                            onChange={onChange}
                        />
                        <Form.Check
                            inline
                            label="Chocolate"
                            name="step2"
                            type="radio"
                            value="chocolate"
                            checked={form.step2 === "chocolate"}
                            onChange={onChange}
                        />
                        <Form.Check
                            inline
                            label="Mango"
                            name="step2"
                            type="radio"
                            value="mango"
                            checked={form.step2 === "mango"}
                            onChange={onChange}
                        />
                        <Form.Check
                            inline
                            label="Strawberry"
                            name="step2"
                            type="radio"
                            value="strawberry"
                            checked={form.step2 === "strawberry"}
                            onChange={onChange}
                        />
                        <Form.Check
                            inline
                            label="Coconut"
                            name="step2"
                            type="radio"
                            value="coconut"
                            checked={form.step2 === "coconut"}
                            onChange={onChange}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3 className="mt-5">Step 3</h3>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Choose Toppings [Any 2]</h4>
                        {err.err && err.step === 3 && (
                            <Form.Text className="text-danger">
                                {err.err}
                            </Form.Text>
                        )}

                        <Form.Check
                            inline
                            label="Tutti Fruiti"
                            name="step3"
                            type="checkbox"
                            value="tuttiFruiti"
                            checked={form.step3.tuttiFruiti}
                            onChange={onStep3Change}
                        />
                        <Form.Check
                            inline
                            label="Chocolate Chips"
                            name="step3"
                            type="checkbox"
                            value="chocolateChips"
                            checked={form.step3.chocolateChips}
                            onChange={onStep3Change}
                        />
                        <Form.Check
                            inline
                            label="Roasted Almonds"
                            name="step3"
                            type="checkbox"
                            value="roastedAlmonds"
                            checked={form.step3.roastedAlmonds}
                            onChange={onStep3Change}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button
                            variant={theme === "dark" ? "light" : "dark"}
                            type="submit"
                            className="mt-5 mx-3"
                        >
                            Add to Cart
                        </Button>
                        {!!cart.length && (
                            <Button
                                variant={theme === "dark" ? "light" : "dark"}
                                className="mt-5 mx-3"
                                onClick={showCart}
                            >
                                Show Cart
                            </Button>
                        )}
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Home;
