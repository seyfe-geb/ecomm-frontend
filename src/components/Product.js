import React from 'react';
import {useNavigate} from "react-router";

const Product = (props) => {
    const navigate = useNavigate();
    return (
        <div className="card card-container" onClick={()=>navigate("/ productdetails")}>
            <p>Id: {props.id}</p>
            <p>Name: {props.name}</p>
            <div className="Field">Price: {props.price}</div>
            <img src={props.pimage} width={250} height={250} alt={props.name}/>
        </div>
    );
};

export default Product;