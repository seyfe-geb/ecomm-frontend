import React from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import UserService from "../../services/user.service";
import {Link} from "react-router-dom";
import Header from "../../Pages/Header";
import AllBuyerDetails from "./AllBuyerDetails";

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
                    <div className="card card-container2">
                        <h4>Buyer Id : {buyer.id}</h4>
                        <h4>First Name : {buyer.firstName}</h4>
                        <h4>Last Name : {buyer.lastName}</h4>
                        <h4>Email : {buyer.email}</h4>
                        <h4>Is Account Enabled : {buyer.enabled + ''}</h4>
                        <h4>Is Account An Approved Seller: {buyer.approvedSeller + ''}</h4>
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
                                    {buyersList}
                            </div>
                        </td>
                        <td>
                            <div className="card card-container3">
                                <AllBuyerDetails/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>


    );
};

export default AllBuyers;