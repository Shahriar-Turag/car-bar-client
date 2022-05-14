import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                sticky="top"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h2>CAR BAR</h2>
                        {/* <img height={30} src={logo} alt="" /> */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="inventory">
                                Inventory
                            </Nav.Link>
                            <Nav.Link as={Link} to="add">
                                Add Items
                            </Nav.Link>
                            <Nav.Link as={Link} to="manage">
                                Manage Items
                            </Nav.Link>
                            <Nav.Link as={Link} to="about">
                                About
                            </Nav.Link>
                            {user ? (
                                <button
                                    className="btn btn-link text-white text-decoration-none"
                                    onClick={handleSignOut}
                                >
                                    sign out
                                </button>
                            ) : (
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
