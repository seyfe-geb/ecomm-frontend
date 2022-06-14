import React from 'react';
import AuthService from "../services/auth.service";
import {useRef} from "react";
import {useNavigate} from "react-router";
import UserService from "../services/user.service";
import Header from "../Pages/Header";
import {useContext, useEffect, useState} from "react";
import {SelectedId} from "../store/SelectedId";
import {useParams} from "react-router-dom";

const Checkout = (props) => {
    const currentUser = AuthService.getCurrentUser();
    const product = UserService.getSelectedProduct();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const handleCheckout = (e) => {
        const newOrder = {
            price: product.price,
            productQuantity:quantity,
            productId: product.id,
            userId: currentUser.id
        };
        UserService.newOrder(newOrder.price, newOrder.productQuantity, newOrder.productId, newOrder.userId)
            .then(() => {
                console.log("Success");
                navigate("/products");
            })
            .catch(error => console.log("Error posting data!"));
    }
    const cancelOperation = () =>{
        UserService.removeProduct();
        navigate("/buyerorders");
    }

    return (
        <div className="col-md-12">
            <Header />
            <div className="card card-container" style={{marginLeft:"600px"}}>
                    <div className="card card-container">
                        Product Info<br/>
                        Price: {product.price}<br/>
                        Product Id : {product.id}<br/>
                        User Id: {currentUser.id}<br/>
                        Quantity: <input
                                        type="number"
                                        value={quantity}
                                        maxLength = {2}
                                        onChange={(e) =>
                                            setQuantity((v) => (e.target.validity.valid ? e.target.value : v))
                                        }
                                        style={{maxWidth:'50px'}}
                                    />
                    </div>
                    <img src={product.productImage} width={250} height={250} alt={product.productName}/><br/>
                    <br/>
                    <button className="btn btn-primary btn-block" style={{marginLeft:'100px'}} onClick={handleCheckout}>Buy Product</button>
                    <button className="btn btn-primary btn-block" style={{marginLeft:'100px'}} onClick={cancelOperation}>Cancel</button>
            </div>
        </div>
    );
};

export default Checkout;