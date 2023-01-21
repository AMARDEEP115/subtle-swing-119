import { Route, Routes } from "react-router-dom";
import Mens from "./Products/Mens/Mens";
import Womens from "./Products/Womens/Womens";
import Kids from "./Products/Kids/Kids";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/kids" element={<Kids/>} />
    </Routes>
  );
};

export default MainRoute;
