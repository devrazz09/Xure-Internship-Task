import { Outlet } from "react-router"
import NavBar from "./components/navbar"
function App() {
  return(
   <div className="w-dvw h-dvh bg-linear-to-br from-[#262626] via-[#000000] to-[#262626]">
    <NavBar/>
    <Outlet/>
   </div> 
  )
}

export default App
