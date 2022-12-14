import React from "react";
import "../styles/showcartstyle.css";
const ShowCart = (props)=>{
    return (
        <div className="showcart">
            <img className="cartimg" src={props.product.image}></img>
            <div>{props.product.name}</div>
            <div>{props.product.price}</div>

        </div>
    )
}
export default ShowCart;
//cart image to be rendered when view cart is clicked