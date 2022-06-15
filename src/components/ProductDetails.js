import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router';
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const ProductDetails = (props) => {
    const [productDetail, setProductDetail] = useState({});
    const [checkoutButtonShow, setCheckoutButtonShow] = useState(false);
    const currentUser = AuthService.getCurrentUser();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(currentUser&&currentUser.roles[0]==='ROLE_BUYER'){
            setCheckoutButtonShow(true);
        }else{
            setCheckoutButtonShow(false);
        }
        if (params.id) {
            UserService.getProductById(params.id)
                .then(response => setProductDetail(response.data))
                .catch(error => console.log("Error fetchinng data!"));
        }
    }, [params.id]);


    const checkoutButtonClicked = () => {
        if(currentUser){
            // UserService.removeProduct();
            UserService.setSelectedProduct(params.id);
            window.open("/checkout","_self");
        }else{
            alert("Please sign in!");
            navigate("/login");
        }

    };

    let productDetailDisplay = null;
    if (params.id) {
        productDetailDisplay =
            <div style={{backgroundColor:"white"}}>
                <div>
                    Product Detail
                </div>
                <h3>Product Name: {productDetail.productName}</h3>
                <h3>
                    Price: {productDetail.price}
                    <br/>
                </h3>
                <img src={productDetail.productImage} width={250} height={250} alt={productDetail.productName}/><br/>
                {
                    checkoutButtonShow && (<button onClick={checkoutButtonClicked}> Checkout</button>)
                }

            </div>
    }

    return (
        <>
            {productDetailDisplay}
        </>
    );
};

export default ProductDetails;