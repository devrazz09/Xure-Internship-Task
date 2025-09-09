const Cards = ({Img, Text}) => {
  return (
      <div className="w-60 h-40 flex flex-col justify-around items-center py-6 px-10 border rounded-md cursor-pointer">
        <img src={Img} alt={Img} />
        <p className="text-2xl font-poppins-medium">{Text}</p>
      </div>
    )
}
export default Cards;