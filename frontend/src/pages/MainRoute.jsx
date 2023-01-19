import { Route, Routes } from "react-router-dom";
import Mens from "./Products/Mens/Mens";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/mens" element={<Mens />} />
    </Routes>
  );
};

export default MainRoute;
