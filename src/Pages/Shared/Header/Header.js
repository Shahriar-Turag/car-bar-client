import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

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
                        <h2>
                            CAR <span className="text-warning">BAR</span>
                        </h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link
                                as={NavLink}
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="inventory"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Inventory
                            </Nav.Link>
                            {user && (
                                <Nav.Link
                                    as={NavLink}
                                    to="add"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Add Items
                                </Nav.Link>
                            )}
                            {user && (
                                <Nav.Link
                                    as={NavLink}
                                    to="reviews"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Reviews
                                </Nav.Link>
                            )}

                            {user && (
                                <Nav.Link
                                    as={NavLink}
                                    to="manage"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Manage Items
                                </Nav.Link>
                            )}
                            <Nav.Link
                                as={NavLink}
                                to="blogs"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Blogs
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="about"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                About
                            </Nav.Link>
                            {user && (
                                <Nav.Link
                                    as={NavLink}
                                    to="myItems"
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    My Items
                                </Nav.Link>
                            )}
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
