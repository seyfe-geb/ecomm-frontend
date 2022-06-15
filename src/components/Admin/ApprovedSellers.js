import React from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import UserService from "../../services/user.service";
import {Link} from "react-router-dom";
import Header from "../../Pages/Header";
import ApprovedSellersDetails from "./ApprovedSellersDetails";

const ApprovedSellers = () => {
    const [sellers, setSellers] = useState([]);
    const navigate = useNavigate();

    const fetchSellers = () => {
        UserService.getApprovedSellers()
            .then(response => setSellers(response.data))
            .catch(error => console.log("Error fetching"));
    };

    useEffect(() => {
        fetchSellers();
    }, [])

    let sellersList = null;
    if(sellers){
        sellersList = sellers.map(seller =>{
            return (
                <Link to={`${seller.id}`} key={seller.id} >
                    <div className="card card-container2">
                        <th>Seller Id : {seller.id}</th>
                        <th>First Name : {seller.firstName}</th>
                        <th>Last Name : {seller.lastName}</th>
                        <th>Email : {seller.email}</th>
                        <th>Is Account Enabled : {seller.enabled + ''}</th>
                        <th>Is Account An Approved Seller: {seller.approvedSeller + ''}</th>
                    </div>
                </Link>
            );
        });
    }


    return (
        <>
            <Header/>
            <div className="card card-container1">
                <table>
                    <tr>
                        <td>
                            <div className="card card-container2">
                                {sellersList}
                            </div>
                        </td>
                        <td>
                            <div className="card card-container3">
                                <ApprovedSellersDetails/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>


    );
};

export default ApprovedSellers;