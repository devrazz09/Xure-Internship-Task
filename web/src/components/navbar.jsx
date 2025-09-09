import Logo from "../assets/imgs/logo.png"
import { Link } from "react-router";
const NavBar = () => {
  return (
    <div className="w-full h-24 absolute flex justify-between items-center">
        <Link to={"/"}><img className="h-12 ml-20"src={Logo} alt="logo" /></Link>
        <Link className="text-white font-poppins-medium text-xl mr-20 transition hover:text-[#5ce1e6]" to={"exercise"}>Exercises</Link>
    </div>
  )
}

export default NavBar;