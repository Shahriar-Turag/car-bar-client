import React from "react";
import {
    useAuthState,
    useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] =
        useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return (
            <div className="text-center mt-5">
                <h3 className="text-warning py-2">
                    Your Email is not verified!!
                </h3>
                <h5 className="text-white py-2">
                    {" "}
                    Please check your email and click the link to verify your
                    email
                </h5>
                <button
                    className="btn btn-manage mt-4"
                    onClick={async () => {
                        await sendEmailVerification();
                        toast("Email sent");
                    }}
                >
                    Send Verification Email Again
                </button>
                <ToastContainer></ToastContainer>
            </div>
        );
    }

    return children;
};

export default RequireAuth;
