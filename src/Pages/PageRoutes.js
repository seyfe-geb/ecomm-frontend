import React from 'react';
import {Navigate, Routes} from "react-router";
import {Route} from "react-router-dom";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import BuyerBoard from "../components/BuyerBoard";
import SellerBoard from "../components/SellerBoard";
import AdminBoard from "../components/AdminBoard";
import AddProduct from "../components/AddProduct";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Checkout from "../components/Checkout";
import SellerProducts from "../components/SellerProducts";
import BuyerOrderDetails from "../components/BuyerOrderDetails";
import AllSellers from "../components/Admin/AllSellers";
import AllBuyerDetails from "../components/Admin/AllBuyerDetails";
import AllBuyers from "../components/Admin/AllBuyers";
import UnapprovedSellers from "../components/Admin/UnapprovedSellers";
import UnapprovedUsersDetails from "../components/Admin/UnapprovedUsersDetails";
import BuyerOrders from "../components/BuyerOrders";
import SellerOrders from "../components/SellerOrders";
import SellerOrderDetails from "../components/SellerOrderDetails";
import SellerProductDetails from "../components/SellerProductDetails";

const PageRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Navigate replace to="/products"/>} />
                <Route path="/home" element={<Navigate replace to="/products"/>} />
                <Route path="products" element={<Products/>}>
                    <Route path=":id" element={<ProductDetails/>}/>
                </Route>
                <Route path="/productdetails" element={<ProductDetails/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/buyer" element={<BuyerBoard />}/>
                <Route path="/seller" element={<SellerBoard />} />

                <Route path="/addproduct" element={<AddProduct/>} />
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/sellerproducts" element={<SellerProducts />}>
                    <Route path=":id" element={<SellerProductDetails/>}/>
                </Route>

                <Route path="/admin" element={<AdminBoard />} />
                <Route path={'/sellers'} element={<AllSellers/>}>
                    <Route path=":id" element={<AllBuyerDetails/>}/>
                </Route>
                <Route path={'/unapprovedsellers'} element={<UnapprovedSellers/>}>
                    <Route path=":id" element={<UnapprovedUsersDetails/>}/>
                </Route>
                <Route path={'/buyers'} element={<AllBuyers/>}>
                    <Route path=":id" element={<AllBuyerDetails/>}/>
                </Route>
                <Route path="/buyerorders" element={<BuyerOrders/>}>
                    <Route path=":id" element={<BuyerOrderDetails/>}/>
                </Route>
                <Route path="/sellerorders" element={<SellerOrders/>}>
                    <Route path=":id" element={<SellerOrderDetails/>}/>
                </Route>
            </Routes>
    );
};

export default PageRoutes;