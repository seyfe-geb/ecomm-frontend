import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";
import UserService from "../../services/user.service";

const AllSellerDetails = () => {
    const [userDetail, setUserDetail] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            UserService.getUserById(params.id)
                .then(response => setUserDetail(response.data))
                .catch(error => console.log("Error fetchinng data!"));
        }
    }, [params.id]);


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

export default AllSellerDetails;