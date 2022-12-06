import React from "react";
import { items } from "../items";
import Product from "../components/product";
import ShowCart from "../components/showcart";
import "../styles/style.css";
const Catalog =()=>{
    const [addproduct, setaddproduct] = React.useState(0);
    const [totalcost, settotalcost] = React.useState(0);
    let [cart, setcart] = React.useState([]);
    const addItem = (product)=>{
        let carttmp = cart.slice();
        carttmp.push(product);
        cart=carttmp;
        setcart(cart);
        console.log(cart)
    };
    //map out cart
    const showcart = cart.map((product)=>(
        <ShowCart
        
            id={product.id}
            product={product}
            />
    ));
    const calcTotalCost = (product)=>{
        settotalcost(totalcost+product.price);
    };
    const addToCart = ()=>{
        setaddproduct((prevProduct)=>prevProduct+1);
    }
    const toggleCartViewOff = () =>{
        let showcart = document.querySelector(".CartDisplay");
        showcart.classList.remove("CartDisplay")
        showcart.classList.add("hidecart");
        
    }
    const toggleCartViewOn = () =>{
        let showcart = document.querySelector(".hidecart");
        showcart.classList.remove("hidecart")
        showcart.classList.add("CartDisplay");
    }
    const products = items.map((product) => (
        <Product
            key={product.id}
            id={product.id}
            product={product}
            addItem={() => addItem(product)}
            calcTotalCost={() => calcTotalCost(product)}
            addToCart={() => addToCart(product)}
        />
    ));
    
    return(
        <div>
            <div onClick={toggleCartViewOn}> Shopping Cart 
                <div>Total items: {addproduct}</div>
            </div>

            <div>{products}</div>

            <div className="hidecart">
                <div>{showcart}</div>
                <div>Total items: {addproduct}</div>
                <div>Total cost: {totalcost}</div>
                <button>Checkout</button>
                <button onClick={toggleCartViewOff}>Go Back</button>
            </div>

            

        </div>
    )    
}


export default Catalog;