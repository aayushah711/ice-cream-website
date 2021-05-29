import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
    const theme = useSelector((state) => state.theme);
    const history = useHistory();
    const [form, setForm] = useState({
        step1: "plain",
        step2: "vanilla",
        step3: {
            tuttiFruiti: false,
            chocolateChips: false,
            roastedAlmonds: false,
        },
    });
    const [validated, setValidated] = useState(null);

    const checkValidity = () => {
        const { tuttiFruiti, chocolateChips, roastedAlmonds } = form.step3;
        if (tuttiFruiti && chocolateChips && roastedAlmonds) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        if (checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(false);
            return;
        }

        setValidated(true);
        history.push("/cart");
    };

    const onChange = (e) => {
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
                        {validated === false && (
                            <Form.Text className="text-danger">
                                Please select any 2 toppings.
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
                            className="mt-5"
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Home;
