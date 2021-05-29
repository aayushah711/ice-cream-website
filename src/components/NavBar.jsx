import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/actions";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";

const styles = {
    dark: "text-light",
    light: "text-dark",
};

const NavBarComponent = () => {
    const [themeSwitch, setThemeSwitch] = useState(false);
    const theme = useSelector((state) => state.theme);

    const dispatch = useDispatch();

    useEffect(
        () =>
            themeSwitch
                ? dispatch(changeTheme("dark"))
                : dispatch(changeTheme("light")),
        [themeSwitch, dispatch]
    );

    const onThemeChange = () => {
        setThemeSwitch(!themeSwitch);
    };

    return (
        <Navbar bg={theme} variant={theme} fixed="top">
            <Link to="/">
                <Navbar.Brand>Ice Cream Shop</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="d-none d-md-block">
                        <Link to="/" className={styles[theme]}>
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="d-none d-md-block">
                        <Link to="/purchase" className={styles[theme]}>
                            Purchase
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/cart" className={styles[theme]}>
                            Cart
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav className="ml-auto">
                <div className="theme-switch-wrapper">
                    <label className="theme-switch">
                        <input
                            type="checkbox"
                            value={themeSwitch}
                            onChange={onThemeChange}
                        />
                        <div className="slider round"></div>
                    </label>
                </div>
            </Nav>
        </Navbar>
    );
};

export default NavBarComponent;
