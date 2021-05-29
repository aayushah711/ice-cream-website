import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { changeTheme } from "../redux/actions";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
    const [themeSwitch, setThemeSwitch] = useState(false);
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const onThemeChange = () => {
        setThemeSwitch(!themeSwitch);
    };
    useEffect(
        () =>
            themeSwitch
                ? dispatch(changeTheme("dark"))
                : dispatch(changeTheme("light")),
        [themeSwitch, dispatch]
    );
    return (
        <Navbar bg={theme} variant={theme} fixed="top">
            <Link to="/">
                <Navbar.Brand>Ice Cream Shop</Navbar.Brand>
            </Link>
            <Nav className="ml-auto">
                <div className="theme-switch-wrapper">
                    <label className="theme-switch">
                        <input
                            type="checkbox"
                            id="checkbox"
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
