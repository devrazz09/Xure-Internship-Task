import { Link } from "react-router"

const Exercise2 = () => {
  return(
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-2/5 h2/5 border border-white rounded-md font-poppins-medium">
        <div className="w-1/3 h-4/5 border border-white rounded-md">
          <Link to={"weatherapp"}>Weather App</Link>
        </div>
        <div className="w-1/3 h-4/5 border border-white rounded-md>
          <Link to={"ecommerce"}>E-commerce</Link>
        </div>
      </div>  
    </div>
  )
}
export default Exercise2;