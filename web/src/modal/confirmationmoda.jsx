const ConfirmationModal = ({Text}) => {
  return(
    <div className="w-full h-full absolute backdrop-blur-md top-0 flex justify-center items-center font-poppins-medium">
      <div className="w-1/5 h-40 border flex flex-col justify-around items-center">
        <p>{Text}</p>
        <div className="w-4/5 h-4/5 flex justify-around items-center">
          <button className="w-2/5 h-16 text-white font-poppins-medium bg-green-500">Yes</button>
          <button className="w-2/5 h-16 text-white font-poppins-medium bg-red-400">No</button>
        </div>
      </div>
    </div>
  )
}
export default ConfirmationModal;