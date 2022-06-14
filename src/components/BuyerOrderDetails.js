import React, {useState} from 'react';
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import Product from "./Product";

const BuyerOrderDetails = () => {
    const currentUser = AuthService.getCurrentUser();
    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        if(currentUser){
            UserService.getBuyerOrders(currentUser.id)
                .then(response => {setOrders(response.data); console.log("Success")})
                .catch(error => console.log("Error fetching"));
        }
    };
    // const productsList = products.map(product =>{
    //     return (
    //         <Link to={`${product.id}`} key={product.id} >
    //             <Product
    //                 id={product.id}
    //                 name={product.productName}
    //                 price={product.price}
    //                 pimage={product.productImage}
    //                 key={product.id}
    //             />
    //         </Link>
    //     );
    // });
    useEffect(() => {
        fetchOrders();
    }, [])
    return (
        <div>

        </div>
    );
};

export default BuyerOrderDetails;