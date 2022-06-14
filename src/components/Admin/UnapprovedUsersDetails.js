import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UserService from "../../services/user.service";

const UnapprovedUsersDetails = () => {
    const [userDetail, setUserDetail] = useState({});
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            UserService.getUserById(params.id)
                .then(response => setUserDetail(response.data))
                .catch(error => console.log("Error fetchinng data!"));
        }
    }, [params.id]);


    const approveButtonClicked = (e) => {
        e.preventDefault();
        alert("Hi");
        // if(currentUser){
        //     UserService.removeProduct();
        //     UserService.setSelectedProduct(params.id);
        //     window.open("/checkout","_self");
        // }else{
        //     alert("Please sign in!");
        //     navigate("/login");
        // }

    };
    let productDetailDisplay = null;
    if (params.id) {
        productDetailDisplay =
            <div style={{backgroundColor:"gray"}}>
                <div>
                    User Detail
                </div>
                <h3>First Name: {userDetail.firstName}</h3>
                <h3>Last Name: {userDetail.lastName}</h3>
                <button onClick={approveButtonClicked}>Approve Seller</button>
            </div>

    }

    return (
        <>
            {productDetailDisplay}
        </>
    );
};

export default UnapprovedUsersDetails;