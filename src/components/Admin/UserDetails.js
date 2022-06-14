import React from 'react';
import {useEffect, useState} from "react";
import UserService from "../../services/user.service";
import {useParams} from "react-router-dom";

const UserDetails = () => {
    const [userDetail, setUserDetail] = useState({});
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
                        User Detail
                    </div>
                    <h3>First Name: {userDetail.firstName}</h3>
                    <h3>Last Name: {userDetail.lastName}</h3>
                </div>

    }

    return (
        <>
            {productDetailDisplay}
        </>
    );
};

export default UserDetails;