import React, {useState} from 'react';
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import {useEffect} from "react";

const BuyerOrderDetails = () => {
    const currentUser = AuthService.getCurrentUser();
    const [orders, setOrders] = useState([]);

    const fetchProducts = () => {
        UserService.getBuyersOrders(currentUser.id)
            .then(response => setOrders(response.data))
            .catch(error => console.log("Error fetching"));
    };
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div>
            {orders[0].id}
        </div>
    );
};

export default BuyerOrderDetails;