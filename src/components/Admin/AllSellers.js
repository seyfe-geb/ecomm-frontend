import React from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import UserService from "../../services/user.service";
import {Link} from "react-router-dom";
import Header from "../../Pages/Header";
import AllSellerDetails from "./AllSellerDetails";

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    const navigate = useNavigate();

    const fetchSellers = () => {
        UserService.getAllSellers()
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
                        <h4>Seller Id : {seller.id}</h4>
                        <h4>First Name : {seller.firstName}</h4>
                        <h4>Last Name : {seller.lastName}</h4>
                        <h4>Email : {seller.email}</h4>
                        <h4>Is Account Enabled : {seller.enabled + ''}</h4>
                        <h4>Is Account An Approved Seller: {seller.approvedSeller + ''}</h4>
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
                                <AllSellerDetails/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>


    );
};

export default AllSellers;