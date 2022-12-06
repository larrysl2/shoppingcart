import React from "react";
const ShowCart = (props)=>{
    return (
        <div>
            <div>{props.product.name}</div>
            <div>{props.product.price}</div>
        </div>
    )
}
export default ShowCart;