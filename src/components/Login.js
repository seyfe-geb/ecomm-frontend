
import React, {useRef} from 'react';
import AuthService from "../services/auth.service";
import {useNavigate} from "react-router";
import Header from "../Pages/Header";

const Login = (props) => {


    const newLoginForm = useRef();
    const navigate = useNavigate();


    const loginHandler = (e) => {
        e.preventDefault();
        const form  = newLoginForm.current;
        const login = {
            username:form['username'].value,
            password:form['password'].value
        };
        AuthService.login(login.username, login.password)
            .then(() => {
                console.log("Success");
                navigate("/profile");
            })
            .catch(error => console.log("Error posting data!"));
    };



    return (
        <>
            <Header />
            <div className="card card-container" style={{marginLeft:"500px", minWidth:"500px"}}>
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
            <form ref={newLoginForm} onSubmit={loginHandler}>
                <h1>Login</h1>

                <label>Username</label>
                <input type="text" label={'username'} name={'username'}/>

                <br/><br/>

                <label>Password</label>
                <input type="password" label={'password'} name={'password'}/>

                <br/><br/>

                <button>Login</button>
            </form>
            </div>
        </>
    );
};

export default Login;