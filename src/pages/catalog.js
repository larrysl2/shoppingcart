import React from "react";
import { items } from "../items";
import Product from "../components/product";
import ShowCart from "../components/showcart";
import "../styles/style.css";
import shoppingcartimage from "../img/shoppingcart.png"
import "../styles/cartstyle.css"
const Catalog =()=>{
    const [addproduct, setaddproduct] = React.useState(0);
    const [totalcost, settotalcost] = React.useState(0);
    let [cart, setcart] = React.useState([]);
    //setting states for counting total items, total cost, and items in cart
    const addItem = (product)=>{ //pushing clicked item into cart and setting state
        let carttmp = cart.slice();
        carttmp.push(product);
        cart=carttmp;
        setcart(cart);
        console.log(cart)
    };
   
    const showcart = cart.map((product)=>( //cart is mapped out and displayed
        <ShowCart
            id={product.id}
            product={product}
            />
    ));
    const calcTotalCost = (product)=>{ //cost is calculated and rounded for hundreth place
        settotalcost(Math.round((totalcost+product.price)*100)/100);
    };
    const addToCart = ()=>{ //cart count updated
        setaddproduct((prevProduct)=>prevProduct+1);
    }
    const toggleCartViewOff = () =>{ //toggles when cart is hidden
        let showcart = document.querySelector(".CartDisplay");
        showcart.classList.remove("CartDisplay");
        showcart.classList.add("hidecart");
        
    }
    const toggleCartViewOn = () =>{ //toggles when cart is shown
        let showcart = document.querySelector(".hidecart");
        showcart.classList.remove("hidecart")
        showcart.classList.add("CartDisplay");
    }
    const products = items.map((product) => ( //maps out each product in product component and renders
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
        <div className="page">
            
            <div className ="ShoppingCartButton" onClick={toggleCartViewOn}> 
            {/* shopping cart button which on click displays cart */}
                <img className = "ShoppingCartImg" src = {shoppingcartimage}/>
                <div className="itemcount">Total items: {addproduct}</div>
            </div> 
            
            <div className="productcontainer">
            <div className ="productdetailscontainer" >{products}</div>
            {/* contains all the products */}
            </div>

            <div className="hidecart">
                {/* cart details when clicked, shows total cost, items in cart, and total items */}
                <div className="showcartcontainer">{showcart}</div>
                <div className="cartdetails">
                <div>Total items: {addproduct}</div>
                <div>Total cost: ${totalcost}</div>
                <button className="button1">Checkout</button>
                <button className="button1" onClick={toggleCartViewOff}>Go Back</button>
                </div>
            </div>
        </div>
    )    
}


export default Catalog;