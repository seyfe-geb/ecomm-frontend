import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import {Link} from "react-router-dom";
import Product from "./Product";
import Header from "../Pages/Header";
import ProductDetails from "./ProductDetails";

const OrderedItems = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const currentUser = AuthService.getCurrentUser();

    const fetchOrders = () => {
        UserService.getOrdersBySellerId(currentUser.id)
            .then(response => setProducts(response.data))
            .catch(error => console.log("Error fetching"));
    };
    const productDetailsHandler = () => {
        navigate("/productdetails");
    }
    useEffect(() => {
        fetchOrders();
    }, [])

    const productsList = products.map(product =>{
        return (
            <Link to={`${product.id}`} key={product.id} >
                <Product
                    id={product.id}
                    name={product.productName}
                    price={product.price}
                    // quantity={product.quantity}
                    pimage={product.productImage}
                    key={product.id}
                />
            </Link>
        );
    });

    return (
        <>
            <Header/>
            <div className="card card-container1">
                <table>
                    <tr>
                        <td>
                            <div className="card card-container2">
                                {productsList}
                            </div>
                        </td>
                        <td>
                            <div className="card card-container3">
                                <ProductDetails/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>


    );
};
export default OrderedItems