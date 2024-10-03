import "../navbar/Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <Link to="/"><h3 className="logo" >ORDER NOW</h3></Link>
        <img className="profile"src={assets.profile_image} alt="profile_image" />
    </div>
    </>
  )
}

export default Navbar;