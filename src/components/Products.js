import React, {useEffect} from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";
import UserService from "../services/user.service";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Header from "../Pages/Header";
import {useNavigate} from "react-router";
import Split from "react-split";

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = () => {
        UserService.getAllProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log("Error fetching"));
    };
    
    useEffect(() => {
        fetchProducts();
        }, [])

    const productsList = products.map(product =>{
        return (
            <Link to={`${product.id}`} key={product.id} >
                <Product
                    id={product.id}
                    name={product.productName}
                    price={product.price}
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

export default Products;