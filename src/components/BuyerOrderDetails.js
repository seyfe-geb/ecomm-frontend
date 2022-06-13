import React, {useState} from 'react';
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import {useEffect} from "react";

const BuyerOrderDetails = () => {
    const currentUser = AuthService.getCurrentUser();
    const [orders, setOrders] = useState([]);

    const fetchProducts = () => {
        if(currentUser){
            UserService.getBuyersOrders(currentUser.id)
                .then(response => {setOrders(response.data); console.log("Success")})
                .catch(error => console.log("Error fetching"));
        }
    };
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div>
            Hi
        </div>
    );
};

export default BuyerOrderDetails;