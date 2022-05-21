import axios from "axios";
import React, { useRef } from "react";
import { Form, Button, ToastContainer } from "react-bootstrap";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);

    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post(
            "https://hidden-forest-40696.herokuapp.com/login",
            {
                email,
            }
        );
        localStorage.setItem("accessToken", data.accessToken);
        navigate(from, { replace: true });
    };

    const navigateRegister = (event) => {
        navigate("/register");
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent email");
        } else {
            toast("please enter your email address");
        }
    };

    return (
        <div className="container w-50">
            <PageTitle title="Login"></PageTitle>
            <h2 className=" fw-bold text-center mt-2">PLEASE LOGIN</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button
                    className="login"
                    variant=" w-50 mx-auto d-block mb-2"
                    type="submit"
                >
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>
                New to CAR BAR?{" "}
                <Link
                    to="/register"
                    className="text-warning pe-auto text-decoration-none"
                    onClick={navigateRegister}
                >
                    Please Register
                </Link>{" "}
            </p>
            <p>
                Forget Password?{" "}
                <button
                    className="btn btn-link text-warning pe-auto text-decoration-none"
                    onClick={resetPassword}
                >
                    Reset Password
                </button>{" "}
            </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;
