import React from 'react';
import AuthService from "../services/auth.service";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import UserService from "../services/user.service";
import {Link} from "react-router-dom";
import Product from "./Product";
import Header from "../Pages/Header";
import ProductDetails from "./ProductDetails";
import SellerProductDetails from "./SellerProductDetails";


const SellerProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const currentUser = AuthService.getCurrentUser();

    const fetchProducts = () => {
        UserService.getProductsBySellerId(currentUser.id)
    .then(response => setProducts(response.data))
            .catch(error => console.log("Error fetching"));
    };
    const productDetailsHandler = () => {
        navigate("/productdetails");
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    const productsList = products.map(product =>{
        return (
            <Link to={`${product.id}`} key={product.id} >
                <Product
                    id={product.id}
                    name={product.productName}
                    price={product.price}
                    pimage={product.productImage}
                    key={product.id}
                />
            </Link>
        );
    });

    return (
        <>
            <Header/>
            <div className="card card-container1">
                <table>
                    <tr>
                        <td>
                            <div className="card card-container2">
                                {productsList}
                            </div>
                        </td>
                        <td>
                            <div className="card card-container3">
                                <SellerProductDetails/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>


    );
};

export default SellerProducts;