import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Mens from "./Products/Mens/Mens";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/mens" element={<Mens />} />
    </Routes>
  );
};

export default MainRoute;
