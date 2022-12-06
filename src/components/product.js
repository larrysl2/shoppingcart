import React from "react";
const Product = (props)=>{
    return (
        <div>
            <div>{props.product.name}</div>
            <div>{props.product.price}</div>
            <button 
            onClick={(e)=>{
                props.addItem();
                props.addToCart();
                props.calcTotalCost();
            }}
            >{props.product.button}</button>
        </div>
    )
}
export default Product;