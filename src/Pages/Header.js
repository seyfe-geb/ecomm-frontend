import React from 'react';
import AuthService from "../services/auth.service";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const currentUser = AuthService.getCurrentUser();
    const [showStudentBoard, setShowStudentBoard] = useState(false);
    const [showFacultyBoard, setShowFacultyBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    useEffect(() => {
        if(currentUser){
            setShowStudentBoard(currentUser.roles.includes("ROLE_BUYER"));
            setShowFacultyBoard(currentUser.roles.includes("ROLE_SELLER"));
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
                <div className="navbar-nav mr-auto" style={{marginLeft:"300px"}}>
                    <li className="nav-item">
                        <Link to={"/home"} className="nav-link">
                            Home
                        </Link>
                    </li>
                    {showFacultyBoard && (
                        <li className="nav-item" style={{marginLeft:"100px"}}>
                            <Link to={"/seller"} className="nav-link">
                                Seller Board
                            </Link>
                        </li>
                    )}
                    {showAdminBoard && (
                        <li className="nav-item" style={{marginLeft:"100px"}}>
                            <Link to={"/admin"} className="nav-link">
                                Admin Board
                            </Link>
                        </li>
                    )}
                    {showStudentBoard && (
                        <li className="nav-item" style={{marginLeft:"100px"}}>
                            <Link to={"/buyer"} className="nav-link">
                                Buyer Board
                            </Link>
                        </li>
                    )}
                </div>
                {currentUser ? (
                    <div className="navbar-nav ml-auto" style={{marginLeft:"1000px"}}>
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item" style={{marginLeft:"20px"}}>
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto" style={{marginLeft:"1000px"}}>
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item" style={{marginLeft:"20px"}}>
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