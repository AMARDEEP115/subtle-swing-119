import css from "./womens.module.css";
import { Checkbox, Stack, Radio, RadioGroup } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getProductsMens,
  getProductsWomens,
} from "../../../Redux/Products/action";
import { useState } from "react";
import Filter from "../../../Components/Filter/Filter";

import { useParams } from "react-router-dom";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Footer } from "../../../Components/Footer/Footer";
const Womens = () => {
  const [total, setTotal] = useState([]);

  const prod = useSelector((store) => store.products);

  const dispatch = useDispatch();

  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || prod.length == 0) {
      const dataparams = {
        params: {
          _sort: "product-discountedPrice",
          _order: searchParams.get("sort"),
          "product-brand": searchParams.getAll("category"),
        },
      };
      // console.log(dataparams);
      dispatch(getProductsWomens(dataparams));
    }
  }, [searchParams, dispatch, location]);

  return (
    <>
    <Navbar />
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className={css.main_section}>
        <Filter
          one="Lakme"
          six="Renee"
          seven="SWISS BEAUTY"
          two="Maybelline"
          three="FACES CANADA"
          four="Colorbar"
          five="LOreal"
        />

        <div className={css.product_section}>
          {prod.length > 0 &&
            prod.map((list) => {
              return (
                <ProductCard
                  key={list.id}
                  direction="beauty"
                  image={list["img-responsive src"]}
                  rating={list["product-ratingsContainer"]}
                  count={list["product-ratingsCount"]}
                  name={list["product-product"]}
                  brand={list["product-brand"]}
                  price={list["product-discountedPrice"]}
                  off_price={list["product-strike"]}
                  address={list["product-base href"]}
                />
              );
            })}
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Womens;
