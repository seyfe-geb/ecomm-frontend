import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {useRef} from "react";
import AuthService from "../services/auth.service";
import Header from "../Pages/Header";
import {useNavigate} from "react-router";

const Register = () => {
    const signupForm = useRef();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form  = signupForm.current;
        const signup = {
            firstName: form['firstName'].value,
            lastName: form['lastName'].value,
            email: form['email'].value,
            username: form['username'].value,
            password: form['password'].value,
            role: form['role'].value,
            street: form['street'].value,
            city: form['city'].value,
            state: form['state'].value,
            zipcode: form['zipcode'].value,
            cardName: form['cardName'].value,
            cardType: form['cardType'].value,
            cardNumber: form['cardNumber'].value,
            cardCVV: form['cardCVV'].value
        };
        AuthService.register(signup.firstName, signup.lastName, signup.email, signup.username, signup.password, signup.role,
                            signup.street, signup.city, signup.state, signup.zipcode,
                            signup.cardName, signup.cardType, signup.cardNumber, signup.cardCVV)
            .then(() => {
                console.log("Success");
                navigate("/login");
            })
            .catch(error => console.log("Error posting data!"));
    }
    return (
        <div className="col-md-12">
            <Header />
            <div className="card card-container" style={{marginLeft:"300px"}}>
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <form ref={signupForm} onSubmit={handleRegister}>
                                <div className="card card-container">
                                    <div className="form-group">
                                        <label >First Name</label>
                                        <input type="text" label={'firstName'} name={'firstName'}/>
                                    </div>
                                    <div className="form-group">
                                        <label >Last Name</label>
                                        <input type="text" label={'lastName'} name={'lastName'}/>
                                    </div>
                                    <div className="form-group">
                                        <label >Email</label>
                                        <input type="text" label={'email'} name={'email'}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" label={'username'} name={'username'} />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" label={'password'} name={'password'}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Role</label>
                                        <select label={'role'} name={'role'}>
                                            <option>BUYER</option>
                                            <option>SELLER</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="card card-container">
                                    <div className="form-group">
                                        <label >Customer Address</label>
                                    </div>
                                    <div className="form-group">
                                        <label >Street</label>
                                        <input type="text" label={'street'} name={'street'}/>
                                    </div>
                                    <div className="form-group">
                                        <label >City</label>
                                        <input type="text" label={'city'} name={'city'}/>
                                    </div>

                                    <div className="form-group">
                                        <label>State</label>
                                        <select label={'state'} name={'state'}>
                                            <option>IA</option>
                                            <option>WA</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Zip Code</label>
                                        <input type="text" label={'zipcode'} name={'zipcode'}/>
                                    </div>
                                </div>

                    <div className="card card-container">
                        <div className="form-group">
                            <label>Payment Information</label>
                        </div>
                        <div className="form-group">
                            <label>Card Name</label>
                            <select label={'cardName'} name={'cardName'}>
                                <option>VISA</option>
                                <option>MASTERCARD</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Card Type</label>
                            <select label={'cardType'} name={'cardType'}>
                                <option>CREDIT</option>
                                <option>DEBIT</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label >Card Number</label>
                            <input type="text" label={'cardNumber'} name={'cardNumber'}/>
                        </div>
                        <div className="form-group">
                            <label>CSV</label>
                            <input type="text" label={'cardCVV'} name={'cardCVV'}/>
                        </div>
                    </div>
                            <br/>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" style={{marginLeft:'500px'}}>Sign Up</button>
                            </div>

                </form>
            </div>
        </div>
    );
};

export default Register;