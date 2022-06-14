import React from 'react';
import {Fragment, useContext, useEffect, useState} from "react";
import UserService from "../../services/user.service";
import AuthService from "../../services/auth.service";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import {SetSelectedId} from "../../store/SetSelectedId";

const UserDetails = () => {
    const [userDetail, setUserDetail] = useState({});
    const currentUser = AuthService.getCurrentUser();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            UserService.getUserById(params.id)
                .then(response => setUserDetail(response.data))
                .catch(error => console.log("Error fetchinng data!"));
        }
    }, [params.id]);


    // const checkoutButtonClicked = () => {
    //     if(currentUser){
    //         UserService.removeProduct();
    //         UserService.setSelectedProduct(params.id);
    //         window.open("/checkout","_self");
    //     }else{
    //         alert("Please sign in!");
    //         navigate("/login");
    //     }
    //
    // };
    let productDetailDisplay = null;
    if (params.id) {
        productDetailDisplay =
            <div style={{backgroundColor:"gray"}}>
                <div>
                    Product Detail
                </div>
                <h3>Product Name: {userDetail.productName}</h3>
                <h3>
                    Price: {userDetail.price}
                    <br/>
                </h3>

            </div>
    }

    return (
        <>
            {productDetailDisplay}
        </>
    );
};

export default UserDetails;