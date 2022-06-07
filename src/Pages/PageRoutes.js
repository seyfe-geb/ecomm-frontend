import React from 'react';
import {Routes} from "react-router";
import {Route} from "react-router-dom";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import BuyerBoard from "../components/BuyerBoard";
import SellerBoard from "../components/SellerBoard";
import AdminBoard from "../components/AdminBoard";
import Home from "../components/Home";
import AddProduct from "../components/AddProduct";

const PageRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/buyer" element={<BuyerBoard />}/>
                <Route path="/seller" element={<SellerBoard />} />
                <Route path="/admin" element={<AdminBoard />} />
                <Route path="/addproduct" element={<AddProduct/>} />
            </Routes>
    );
};

export default PageRoutes;