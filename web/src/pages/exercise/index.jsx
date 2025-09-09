import { Outlet } from "react-router";

const ExercisePage = () => {
  return (
    <div className="w-full h-full text-white flex justify-center items-center overflow-hidden">
      <Outlet />
    </div>
  );
}
export default ExercisePage;