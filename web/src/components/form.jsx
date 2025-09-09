import { useState } from "react";
import { ValidateInput } from "../utils/validator";
const Form = ({toggleForm}) => {
  const toggleFormInternal = () => {
    toggleForm(!toggleForm)
  }
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    suffix: '',
    age: '',
    address: '',
    birthdate: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({...prev, [name]: value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validatedData = ValidateInput(data);
    if(!validatedData) return;
    console.log(data);
    localStorage.setItem(data.firstName , JSON.stringify(data));
    toggleFormInternal(toggleForm)
    window.location.reload();
  }
  return (
    <div className="w-full h-full absolute backdrop-blur-md top-0 flex justify-center items-center font-poppins-medium"> 
      <form className="w-1/4 h-3/4 text-base relative bg-linear-to-br from-[#262626] via-[#000000] to-[#262626] border border-[#FFFFF0] rounded-lg flex flex-col justify-around items-center">
        <div className="absolute top-4 right-6 bg-red-600 px-3 rounded-md text-white text-2xl cursor-pointer" onClick={toggleFormInternal}>
          x
        </div>
        <p className="text-3xl">Add User</p>
        <div className="w-4/5 h-2/4 flex flex-col justify-center items-center">
          <input type="text" placeholder="First Name" name="firstName" value={data.firstName} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 my-2"/>
          <input type="text" placeholder="Last Name" name="lastName" value={data.lastName} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 my-2"/>
          <input type="text" placeholder="Age" name="age" value={data.age} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 my-2"/>
          <input type="date" placeholder="Birthdate" name="birthdate" value={data.birthdate} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 my-2"/>
          <input type="text" placeholder="Adress" name="address" value={data.address} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 my-2"/>
          
          <div className="w-full flex flex-col justify-around mt-4">
            <p>Optional</p>
            <input type="text" placeholder="Middle Name" name="middleName" value={data.middleName} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 my-2"/>
            <input type="text" placeholder="Suffix" name="suffix" value={data.suffix} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 my-2"/>
          </div>
        </div>
        <button onClick={handleSubmit} className=" w-4/5 bg-blue-500 text-white rounded-md p-2 m-2 cursor-pointer">Submit</button>
      </form>
    </div>
  )
}
export default Form;