import "../styles/headerstyle.css";
import {Link} from "react-router-dom"
const Header =()=>{
    return(
        <div className="HeaderContainer">
            <Link className="shopname"  to ="/Homepage">Larry's Guitar Shop</Link>
            <div className="links">
                <Link to ="/Homepage" className="home">Home</Link>
                <Link to ="/Catalog" className="catalog">Catalog</Link>
            </div>
        </div>
    );
}
export default Header;