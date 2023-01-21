import { Route, Routes } from "react-router-dom";
import Mens from "./Products/Mens/Mens";
import Womens from "./Products/Womens/Womens";
import Kids from "./Products/Kids/Kids";
import Home from "./Home";
import SinglePage from "./singlepage/Singlepage";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/kids" element={<Kids/>} />
      <Route path="/singlepage/:direction" element={<SinglePage />} />

    </Routes>
  );
};

export default MainRoute;
