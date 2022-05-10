import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AllItems from "./Pages/AllItems/AllItems";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
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
                <Route path="/manage" element={<AllItems />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
