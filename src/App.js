import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./Pages/About/About";
import AddItems from "./Pages/AddItems/AddItems";
import AllItems from "./Pages/AllItems/AllItems";
import Home from "./Pages/Home/Home/Home";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageItems from "./Pages/ManageItems/ManageItems";
import MyItems from "./Pages/MyItems/MyItems";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import AddReviews from "./Pages/AddReviews/AddReviews";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/inventory" element={<AllItems />} />

                <Route
                    path="/item/:itemId"
                    element={
                        <RequireAuth>
                            <ItemDetails />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/manage"
                    element={
                        <RequireAuth>
                            <ManageItems />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/add"
                    element={
                        <RequireAuth>
                            <AddItems />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/reviews"
                    element={
                        <RequireAuth>
                            <AddReviews />
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/myItems"
                    element={
                        <RequireAuth>
                            <MyItems />
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
