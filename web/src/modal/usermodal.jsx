import { useEffect, useState } from "react"

const UserModal = ({data, toggleModal}) =>{ 
  const {firstName, lastName, age, birthdate, address, middleName, suffix} = data
  const toggleFormInternal = () => {
    toggleModal(!toggleModal)
  }
  return(
    <div className="w-full h-full absolute backdrop-blur-md top-0 flex justify-center items-center font-poppins-medium">
      <div className="w-1/4 h-3/4 text-base relative bg-linear-to-br from-[#262626] via-[#000000] to-[#262626] border border-[#FFFFF0] rounded-lg flex flex-col justify-evenly items-center">
        <p className="text-3xl">User Details</p>
        <div className="w-4/5 h-2/4 flex flex-col justify-around">
          <p className="text-xl">First Name: {firstName}</p>
          <p className="text-xl">Last Name: {lastName}</p>
          <p className="text-xl">Age: {age}</p>
          <p className="text-xl">BirthDate: {birthdate}</p>
          <p className="text-xl">Address: {address}</p>
          <p className="text-xl">Middle Name: {middleName ? middleName : "N/A"}</p>
          <p className="text-xl">Suffix: {suffix ? middleName : "N/A"}</p>
        </div>
        <button onClick={toggleFormInternal} className="w-4/5 bg-red-400 py-2 rounded-lg">
          Close
        </button>
      </div>
    </div>
  
  )
}
export default UserModal