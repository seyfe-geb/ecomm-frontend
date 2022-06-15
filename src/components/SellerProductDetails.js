import React from 'react';
import {useEffect, useState} from "react";
import UserService from "../services/user.service";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";

const SellerProductDetails = () => {
    const [productDetail, setProductDetail] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            UserService.getProductById(params.id)
                .then(response => setProductDetail(response.data))
                .catch(error => console.log("Error fetchinng data!"));
        }
    }, [params.id]);


    const removeProductButtonClicked = () => {
        UserService.deleteProductById(params.id)
            .then(response => window.open("/sellerproducts","_self"))
            .catch(error => console.log("Error deleting product"))
    };

    let productDetailDisplay = null;
    if (params.id) {
        productDetailDisplay =
            <div style={{backgroundColor:"gray"}}>
                <div>
                    Product Detail
                </div>
                <h3>Product Name: {productDetail.productName}</h3>
                <h3>
                    Price: {productDetail.price}
                    <br/>
                </h3>
                <img src={productDetail.productImage} width={250} height={250} alt={productDetail.productName}/><br/>
                <button onClick={removeProductButtonClicked}>Remove Product</button>


            </div>
    }

    return (
        <>
            {productDetailDisplay}
        </>
    );
};

export default SellerProductDetails;