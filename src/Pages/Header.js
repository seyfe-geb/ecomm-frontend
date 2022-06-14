import React from 'react';
import AuthService from "../services/auth.service";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const currentUser = AuthService.getCurrentUser();
    const [showBuyerBoard, setShowBuyerBoard] = useState(false);
    const [showSellerBoard, setShowSellerBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    useEffect(() => {
        if(currentUser){
            setShowBuyerBoard(currentUser.roles.includes("ROLE_BUYER"));
            setShowSellerBoard(currentUser.roles.includes("ROLE_SELLER"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    const logOut = () => {
        AuthService.logout();
    }
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    Ecomm
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/products"} className="nav-link">
                            Home
                        </Link>
                    </li>
                    {showSellerBoard && currentUser.approvedSeller?(
                        <>
                            <li className="nav-item">
                                <Link to={"/seller"} className="nav-link">
                                    Seller Board
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/addproduct"} className="nav-link">
                                    Add New Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/sellerproducts"} className="nav-link">
                                    All Products
                                </Link>
                            </li>
                        </>
                    ):showSellerBoard &&(
                        <>
                            <li className="nav-item">
                                <Link to={"/seller"} className="nav-link">
                                    Seller Board
                                </Link>
                            </li>
                        </>
                    )}
                    {showAdminBoard && (
                        <>
                            <li className="nav-item" style={{marginLeft:"100px"}}>
                                <Link to={"/admin"} className="nav-link">
                                    Admin Board
                                </Link>
                            </li>
                            <li className="nav-item" style={{marginLeft:"100px"}}>
                                <Link to={"/unapprovedsellers"} className="nav-link">
                                    Unapproved Sellers
                                </Link>
                            </li>
                            <li className="nav-item" style={{marginLeft:"100px"}}>
                                <Link to={"/sellers"} className="nav-link">
                                    Sellers
                                </Link>
                            </li>
                            <li className="nav-item" style={{marginLeft:"100px"}}>
                                <Link to={"/buyers"} className="nav-link">
                                    Buyers
                                </Link>
                            </li>
                        </>
                    )}
                    {showBuyerBoard && (
                        <>
                            <li className="nav-item" >
                                <Link to={"/buyer"} className="nav-link">
                                    Buyer Board
                                </Link>
                            </li>
                            <li className="nav-item" >
                                <Link to={"/buyerorders"} className="nav-link">
                                    Orders
                                </Link>
                            </li>
                        </>

                    )}
                </div>
                {currentUser ? (
                    <div className="navbar-nav ml-auto" >
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item" style={{marginLeft:"500px"}}>
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto" style={{marginLeft:"50px"}}>
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item" style={{marginLeft:"500px"}}>
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Header;