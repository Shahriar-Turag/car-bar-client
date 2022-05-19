import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="page container ">
            <div className="about-box ">
                <h2>
                    About CAR <span className="text-warning">BAR</span>
                </h2>
                <p>
                    Inventory management for car dealerships allows you to
                    organize your vehicles, find essential details about your
                    used vehicles within seconds, and merchandise your lot
                    online. While customers used to visit dealerships to look at
                    cars, most of that process has become entirely digital.
                </p>
            </div>
        </div>
    );
};

export default About;
