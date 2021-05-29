import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const theme = useSelector((state) => state.theme);
    const cart = useSelector((state) => state.cart);
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h3 className="mt-5">Cart</h3>
                    <hr></hr>
                </Col>
            </Row>
            {cart.length > 0 ? (
                cart.map((item) => (
                    <Card
                        key={item.id}
                        className={
                            theme === "dark"
                                ? "py-3 mb-3 bg-dark"
                                : "py-3 mb-3 bg-light"
                        }
                    >
                        <Row className="pl-3">
                            <Col xs={2}>
                                <Image
                                    src="images/cart.png"
                                    height="100"
                                    rounded
                                />
                            </Col>
                            <Col className="text-left">
                                <p>
                                    <span className="">Cone Wafer: </span>
                                    <span>{item.step1}</span>
                                </p>

                                <p>
                                    <span className="text-left">
                                        Base Flavour:{" "}
                                    </span>
                                    {item.step2}
                                </p>
                                <p>
                                    <span className="text-left">
                                        Toppings:{" "}
                                    </span>
                                    <span>
                                        {!!item.toppings.length &&
                                            item.toppings.join(", ")}
                                    </span>
                                </p>
                            </Col>
                            <Col xs={3} className="text-success">
                                ₹ 100 /-
                            </Col>
                        </Row>
                    </Card>
                ))
            ) : (
                <Row>
                    <Col>
                        <h6>Your cart is empty</h6>
                    </Col>
                </Row>
            )}
            <Row>
                <Col>
                    {!!cart.length ? (
                        <Button variant={theme === "dark" ? "light" : "dark"}>
                            Pay ₹{cart.length * 100} /-
                        </Button>
                    ) : (
                        <Link to="/purchase">
                            <Button
                                variant={theme === "dark" ? "light" : "dark"}
                            >
                                Buy Now!
                            </Button>
                        </Link>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
