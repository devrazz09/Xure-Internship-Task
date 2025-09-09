import Form from "../../../components/form"
import UserModal from "../../../modal/usermodal"
import { FetchDataFromLocalStorage } from "../../../hooks/fetchDataFromLocalStorage"
import { useEffect, useState } from "react"
const Exercise1 = () => {
  
  const [modalData, setModalData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    suffix: '',
    age: '',
    address: '',
    birthdate: ''
  })
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState(false)
  const [data, setData] = useState([])
  
  const toggleModal = (value) => {
    setModal(value)
  }
  const toggleForm = (value) => {
    setForm(value)
  }
  
  useEffect(()=>{
    setData(FetchDataFromLocalStorage())
  },[])
  return(
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/5 h-4/5 flex flex-col justify-around items-center rounded-2xl">
      <button 
      className="place-self-end bg-green-500 py-2 px-10 rounded-md cursor-pointer font-poppins-medium"
      onClick={()=>{
        setForm(!form)
      }}
      >Add</button>
        <div className="w-full h-[90%] shadow-sm shadow-cyan-500/50 flex flex-col rounded-2xl">
          <div className="w-full h-16 bg-[#262626] rounded-t-2xl flex justify-around items-center">
            <p className="w-1/5 text-center text-md text-white font-poppins-medium">Users</p>
            <p className="w-1/5 text-center text-md text-white font-poppins-medium">Age</p>
            <p className="w-1/5 text-center text-md text-white font-poppins-medium">Birthdate</p>
            <p className="w-1/5 text-center text-md text-white font-poppins-medium">Address</p>
            <p className="w-1/5 text-center text-md text-white font-poppins-medium">Actions</p>
          </div>
          {data.map((item, index) => {
            const {firstName ,lastName ,age ,birthdate ,address ,middleName ,suffix} = item
            return (
              
              <div className="w-full h-16 flex items-center justify-around hover:bg-gray-600 cursor-pointer" key={index}>
                <div className="w-4/5 flex justify-around" 
                onClick={()=>{
                setModal(!modal)
                setModalData({
                  firstName: firstName,
                  lastName: lastName,
                  middleName: middleName,
                  suffix: suffix,
                  age: age,
                  address: address,
                  birthdate: birthdate                  
                })
              }} >
                  <p className="w-1/5 text-center text-md text-white font-poppins-medium">{`${firstName} ${middleName} ${lastName} ${suffix}`}</p>
                  <p className="w-1/5 text-center text-md text-white font-poppins-medium">{age}</p>
                  <p className="w-1/5 text-center text-md text-white font-poppins-medium">{birthdate}</p>
                  <p className="w-1/5 text-center text-md text-white font-poppins-medium text-wrap">{address}</p>
                </div>
                
                <div className="w-1/5 flex justify-center items-center font-poppins-medium">
                  <button className="bg-red-400 px-10 py-2 rounded-md cursor-pointer"
                   onClick={
                    ()=>{
                      localStorage.removeItem(firstName);
                      setData(FetchDataFromLocalStorage())
                    }
                  }>Delete</button>
                </div>
                
              </div>
            )
          })}
        </div>
      </div>
      {form ? <Form toggleForm={toggleForm}/> : null}
      {modal ? <UserModal toggleModal={toggleModal} data={modalData}/> : null}
    </div>
  )
}
export default Exercise1