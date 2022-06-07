import React from 'react';
import {useRef} from "react";
import {useNavigate} from "react-router";
import Header from "../Pages/Header";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const AddProduct = () => {
    const currentUser = AuthService.getCurrentUser();
    const addProductForm = useRef();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form  = addProductForm.current;
        const newProduct = {
            productName: form['productName'].value,
            price: form['price'].value,
            productDescription: form['productDescription'].value,
            quantity: form['quantity'].value,
            productImage: form['productImage'].value,
            userId: currentUser.id
        };
        UserService.addProduct(newProduct.productName, newProduct.price, newProduct.productDescription,
            newProduct.quantity, newProduct.productImage, newProduct.userId)
            .then(() => {
                console.log("Success");
                navigate("/home");
            })
            .catch(error => console.log("Error posting data!"));
    }

    function myFormat(num) {
        return num + '$';
    }

    return (
        <div className="col-md-12">
            <Header />
            <div className="card card-container" style={{marginLeft:"600px"}}>
                <form ref={addProductForm} onSubmit={handleRegister}>
                    <div className="card card-container">
                        <div className="form-group">
                            <label >Product Name</label>
                            <input type="text" label={'productName'} name={'productName'}/>
                        </div>
                        <div className="form-group">
                            <label >Price</label>
                            <input type="number" label={'price'} name={'price'}/>
                        </div>
                        <div className="form-group">
                            <label >Product Description</label>
                            <input type="text" label={'productDescription'} name={'productDescription'}/>
                        </div>

                        <div className="form-group">
                            <label>Quantity</label>
                            <input type="number" label={'quantity'} name={'quantity'} />
                        </div>

                        <div className="form-group">
                            <label>Product Image</label>
                            <input type="text" label={'productImage'} name={'productImage'}/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" style={{marginLeft:'100px'}}>Add Product</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;