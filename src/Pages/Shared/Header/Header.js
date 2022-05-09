import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar className="bg-dark">
                <Container>
                    <Navbar.Brand className="text-white" href="#home">
                        Car Bar
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link className="text-white" href="#home">
                            Home
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#inventory">
                            Inventory
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#myItems">
                            My Items
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#Manage">
                            Manage Items
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
