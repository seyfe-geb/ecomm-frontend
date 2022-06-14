import React from 'react';
import AuthService from "../services/auth.service";
import {useEffect, useState} from "react";
import UserService from "../services/user.service";
import {Link} from "react-router-dom";
import Header from "../Pages/Header";
import BuyerOrderDetails from "./BuyerOrderDetails";

const BuyerOrders = () => {
    const currentUser = AuthService.getCurrentUser();
    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        if(currentUser){
            UserService.getBuyerOrders(currentUser.id)
                .then(response => setOrders(response.data))
                .catch(error => console.log("Error fetching"));
        }
    };
    let ordersList = null;
    if(orders){
        ordersList = orders.map(order =>{
            return (
                <Link to={`${order.id}`} key={order.id} >
                    <div className="card card-container2">
                        <h4>Order Price : {order.price}</h4>
                        <h4>Order Quantity : {order.quantity}</h4>
                        <h4>Product Id: {order.productId}</h4>
                    </div>
                </Link>
            );
        });
    }
    useEffect(() => {
        fetchOrders();
    }, [])
    return (
        <>
            <Header/>
            <div className="card card-container1">
                <table>
                    <tr>
                        <td>
                            <div className="card card-container2">
                                    {ordersList}
                            </div>
                        </td>
                        <td>
                            <div className="card card-container3">
                                <BuyerOrderDetails/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default BuyerOrders;