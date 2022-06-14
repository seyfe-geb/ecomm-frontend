import React from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import UserService from "../../services/user.service";
import {Link} from "react-router-dom";
import Header from "../../Pages/Header";
import UserDetails from "./UserDetails";

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    const navigate = useNavigate();

    const fetchBuyers = () => {
        UserService.getAllBuyers()
            .then(response => setBuyers(response.data))
            .catch(error => console.log("Error fetching"));
    };

    useEffect(() => {
        fetchBuyers();
    }, [])

    let buyersList = null;
    if(buyers){
        buyersList = buyers.map(buyer =>{
            return (
                <Link to={`${buyer.id}`} key={buyer.id} >
                    <tr>
                        <td>Buyer Id : {buyer.id}</td>
                        <td>First Name : {buyer.firstName}</td>
                        <td>Last Name : {buyer.lastName}</td>
                        <td>Email : {buyer.email}</td>
                        <td>Is Account Enabled : {buyer.enabled + ''}</td>
                        <td>Is Account An Approved Seller: {buyer.approvedSeller + ''}</td>
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
                                    {buyersList}
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

export default AllBuyers;