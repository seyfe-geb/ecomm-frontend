import React, {useEffect, useState} from 'react';
import Header from "../Pages/Header";
import UserService from "../services/user.service";
import Products from "./Products";

const Home = () => {

    const[content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent()
            .then(res => setContent(res.data))
            .catch(err =>  console.log(err));

    }, [])
    return (
        <>
            {/*<Header/>*/}
            {/*<div className="container">*/}
                {/*<header className="jumbotron">*/}
                {/*    <h3>{content}</h3>*/}
                {/*</header>*/}
                <Products/>
            {/*</div>*/}
        </>
    );
};

export default Home;