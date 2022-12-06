import {Link} from "react-router-dom"
const Homepage = () =>{
    return (
        <div>
            <div>Welcome to Larry's Guitar Shop!</div>
            <button>
                <Link to ="/Catalog">Catalog</Link>
            </button>
        </div>
    )
}
export default Homepage;