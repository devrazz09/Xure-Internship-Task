import { Link } from "react-router"
import Exercise1 from '../../assets/imgs/exercise1.png'
import Cards from "../../components/cards"
const ExerciseHomePage = () => {
  return(
    <div className="w-full h-full flex b justify-center items-center gap-6">
      <Link to={"exercise1"}>
        <Cards Img={Exercise1} Text={"Exercise 1"}/>
      </Link>
      <Link to={"exercise2"}>
        <Cards Img={'OnProgress'} Text={"Exercise 2"}/>
      </Link>
    </div>
  ) 
}
export default ExerciseHomePage