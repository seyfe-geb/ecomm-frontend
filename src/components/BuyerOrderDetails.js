import React, {useState} from 'react';
import UserService from "../services/user.service";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";

const BuyerOrderDetails = () => {
    const [orderDetail, setOrderDetail] = useState({});
    const [productDetail, setProductDetail] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            UserService.getOrderProductDetailByOrderId(params.id)
                .then(response => setOrderDetail(response.data))
                .catch(error => console.log("Error fetchinng data!"));
        }
    }, [params.id]);


    // const approveButtonClicked = (e) => {
    //     e.preventDefault();
    //     alert("Hi");
    //     const approval = {
    //         id:orderDetail.id,
    //         approve:false
    //     };
    //     UserService.approveUser(approval.id, approval.approve)
    //         .then(() => {
    //             console.log("Success");
    //             navigate("/unapprovedsellers");
    //         })
    //         .catch(error => console.log("Error posting data!"));
    // };
    let orderDetailDisplay = null;
    if (params.id) {
        orderDetailDisplay =
            <div style={{backgroundColor:"gray"}}>
                <div>
                    Order Detail
                </div>
                <h3>Order Id: {orderDetail.id}</h3>
                <h3>Product Price: {orderDetail.price}</h3>
                <h3>Quantity: {orderDetail.quantity}</h3>
                <h2>Product Detail</h2>
                <h3>Product Name: {orderDetail.productName}</h3>
                <img src={orderDetail.productImage} width={250} height={250} alt={orderDetail.productName}/>
            </div>

    }

    return (
        <>
            {orderDetailDisplay}
        </>
    );
};

export default BuyerOrderDetails;