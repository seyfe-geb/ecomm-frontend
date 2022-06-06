import React from 'react';
import {useEffect, useState} from "react";
import UserService from "../services/user.service";
import Header from "../Pages/Header";

const AdminBoard = () => {

    const[content, setContent] = useState("");

    useEffect(() => {
        UserService.getAdminBoard()
            .then(res => setContent(res.data))
            .catch(err =>  console.log(err));

    }, [])

    return (
        <>
            <Header/>
            <div className="container">
                <header className="jumbotron">
                    <h3>{content}</h3>
                </header>
            </div>
        </>
    );
};

export default AdminBoard;