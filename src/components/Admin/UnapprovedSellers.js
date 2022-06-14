import React from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import UserService from "../../services/user.service";
import {Link} from "react-router-dom";
import Header from "../../Pages/Header";
import UserDetails from "./UserDetails";

const UnapprovedSellers = () => {
    const [sellers, setSellers] = useState([]);
    const navigate = useNavigate();

    const fetchSellers = () => {
        UserService.getUnapprovedSellers()
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
                    <tr>
                        <td>Seller Id : {seller.id}</td>
                        <td>First Name : {seller.firstName}</td>
                        <td>Last Name : {seller.lastName}</td>
                        <td>Email : {seller.email}</td>
                        <td>Is Account Enabled : {seller.enabled + ''}</td>
                        <td>Is Account An Approved Seller: {seller.approvedSeller + ''}</td>
                    </tr>
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
                                <table>
                                    {sellersList}
                                </table>
                            </div>
                        </td>
                        <td>
                            <div className="card card-container3">
                                <UserDetails/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>


    );
};

export default UnapprovedSellers;