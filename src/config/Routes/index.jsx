import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Register, Home } from "../../pages";

const index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default index;
