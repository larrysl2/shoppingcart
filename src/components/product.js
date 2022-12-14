import React from "react";
import "../styles/productstyle.css";
import "../styles/style.css";
const Product = (props)=>{
    return (
       
            <div className="itemcontainer">
                <img className ="productimg" src = {props.product.image}/>
                <div className="deetz">
                <div>{props.product.name}</div>
                <div>${props.product.price}</div>
                <button className = "button1"
                onClick={(e)=>{
                    props.addItem();
                    props.addToCart();
                    props.calcTotalCost();
                }}
                >{props.product.button}</button>
                </div>
            </div>
      
    )
}
export default Product;
//product component rendered when a product is clicked