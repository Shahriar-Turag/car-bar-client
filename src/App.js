import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AddItems from "./Pages/AddItems/AddItems";
import AllItems from "./Pages/AllItems/AllItems";
import Home from "./Pages/Home/Home/Home";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";

import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageItems from "./Pages/ManageItems/ManageItems";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

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
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
