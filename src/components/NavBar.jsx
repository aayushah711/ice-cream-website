import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";

const NavBarComponent = () => {
    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Navbar.Brand href="#home">Ice Cream Shop</Navbar.Brand>
            <Nav className="ml-auto">
                <div className="theme-switch-wrapper">
                    <label className="theme-switch">
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div>
                    </label>
                </div>
            </Nav>
        </Navbar>
    );
};

export default NavBarComponent;
