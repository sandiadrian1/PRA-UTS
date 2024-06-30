import { Link } from "react-router-dom";
export default function Header()
{
    return(
         <div className="Header-Container">
            <h1>Product Store</h1>
             <div>
                 <ul className="head-child">
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/product">Product</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                 </ul>
             </div>
         </div>
    )
}