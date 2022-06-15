import React from 'react';
import {Fragment, useContext, useEffect, useState} from "react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import {SetSelectedId} from "../store/SetSelectedId";

const SellerProductDetails = () => {
    const [productDetail, setProductDetail] = useState({});
    const [checkoutButtonShow, setCheckoutButtonShow] = useState(false);
    const product = UserService.getSelectedProduct();
    const currentUser = AuthService.getCurrentUser();
    const params = useParams();
    const navigate = useNavigate();
    const setSelectedId = useContext(SetSelectedId);

    useEffect(() => {
        if(currentUser&&currentUser.roles[0]==='ROLE_BUYER'){
            setCheckoutButtonShow(true);
        }else{
            setCheckoutButtonShow(false);
        }
        if (params.id) {
            UserService.getProductById(params.id)
                .then(response => setProductDetail(response.data))
                .catch(error => console.log("Error fetchinng data!"));
        }
    }, [params.id]);


    const removeProductButtonClicked = () => {
        UserService.deleteProductById(params.id)
            .then(response => navigate("/products"))
            .catch(error => console.log("Error deleting product"))
    };

    const space = <Fragment>&nbsp;&nbsp;</Fragment>;
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
                <button onClick={removeProductButtonClicked}>Remove Prodduct</button>)


            </div>
    }

    return (
        <>
            {productDetailDisplay}
        </>
    );
};

export default SellerProductDetails;