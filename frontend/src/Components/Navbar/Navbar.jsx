import React, { Fragment, useState } from 'react'
import styles from "./Navbar.module.css";
import { Link,Navigate,useNavigate } from "react-router-dom";
import logo from "./SHOP-IT-EASY.png";
import { FaRegHeart,FaUserAlt,FaShoppingBag } from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi'

//uncomment this after adding the action product location
// import {Allproduct} from '../action/productAction'
import {useDispatch } from 'react-redux'

const Navbar = () => {
  const [show, setShow] = useState(false);

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  const navi=useNavigate();

  show
    ? (document.querySelector("body").style.overflow = "hidden")
    : (document.querySelector("body").style.overflow = "");


    // uncomment this after adding the path of the product action 
    // const [state, setstate] = useState("")
    // const dispatch = useDispatch()
    // const navigate = useNavigate ()
    // function searchenter(e) {
    //     e.preventDefault();
    //     if (state.trim()) {
    //         navigate(`/products?keyword=${state}`)
    //         dispatch(Allproduct())
    //     } else {
    //         navigate('/products')
    //     }
     
    // }
    const token=localStorage.getItem("token");
    const LoggedinName=localStorage.getItem("LoggedinName");
    const LoggedinEmail=localStorage.getItem("LoggedinEmail");

    const handleLogout=()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("LoggedinName");
      localStorage.removeItem("LoggedinEmail");
      return navi("/");
    }


  return (
    <div className={styles.navMainDiv}>
      <div className={styles.navSubDiv1}>
        <Link to="/"><img src={logo} alt="logo" className={styles.logoSize}/></Link>
      </div>
      <div className={styles.navSubDiv2}>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover1 && styles.tabStyles}`}>
            MEN
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Topwear</p>
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                <Link to="/mens">T-Shirts</Link>
                <Link to="/mens">Casual Shirts</Link>
                <Link to="/mens">Formal Shirts</Link>
                <Link to="/mens">Sweatshirts</Link>
                <Link to="/mens">Sweaters</Link>
                <Link to="/mens">Jackets</Link>
                <Link to="/mens">Blazers & Coats</Link>
                <Link to="/mens">Suits</Link>
                <Link to="/mens">Rain Jackets</Link><br/>
                <p className={styles.dropHeadings}>Indian & Festive Wear</p>
                <Link to="/mens">Kurtas & Kurta Sets</Link>
                <Link to="/mens">Nehru Jackets</Link>
                <Link to="/mens">Sherwanis</Link>
                <Link to="/mens">Dhotis</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Bottom Wear</p>
                <a href="/">Jeans</a>
                <a href="/">Casual Trousers</a>
                <a href="/">Formal Trousers</a>
                <a href="/">Track Pants & Joggers</a><br/>
                <p className={styles.dropHeadings}>Innerwear & Sleepwear</p>
                <a href="/">Track Pants & Joggers</a>
                <a href="/">Boxers</a>
                <a href="/">Vests</a>
                <a href="/">Sleepwear & Loungewear</a>
                <a href="/">Thermals</a><br/>
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/">Casual Shoes</a>
                <a href="/">Sports Shoes</a>
                <a href="/">Formal Shoes</a>
                <a href="/">Sneakers</a>
                <a href="/">Sandals & Floaters</a>
                <a href="/">Flip Flops</a>
                <a href="/">Socks</a><br/>
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br/>
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br/>
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br/>
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br/>
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br/>
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover2 && styles.tabStyles}`}>
          WOMEN
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Topwear</p>
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                <Link to="/womens">T-Shirts</Link>
                <Link to="/womens">Casual Shirts</Link>
                <Link to="/womens">Formal Shirts</Link>
                <Link to="/womens">Sweatshirts</Link>
                <Link to="/womens">Sweaters</Link>
                <Link to="/womens">Jackets</Link>
                <Link to="/womens">Blazers & Coats</Link>
                <Link to="/womens">Suits</Link>
                <Link to="/womens">Rain Jackets</Link><br/>
                <p className={styles.dropHeadings}>Indian & Festive Wear</p>
                <Link to="/womens">Kurtas & Kurta Sets</Link>
                <Link to="/womens">Nehru Jackets</Link>
                <Link to="/womens">Sherwanis</Link>
                <Link to="/womens">Dhotis</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Bottom Wear</p>
                <a href="/">Jeans</a>
                <a href="/">Casual Trousers</a>
                <a href="/">Formal Trousers</a>
                <a href="/">Track Pants & Joggers</a><br/>
                <p className={styles.dropHeadings}>Innerwear & Sleepwear</p>
                <a href="/">Track Pants & Joggers</a>
                <a href="/">Boxers</a>
                <a href="/">Vests</a>
                <a href="/">Sleepwear & Loungewear</a>
                <a href="/">Thermals</a><br/>
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/">Casual Shoes</a>
                <a href="/">Sports Shoes</a>
                <a href="/">Formal Shoes</a>
                <a href="/">Sneakers</a>
                <a href="/">Sandals & Floaters</a>
                <a href="/">Flip Flops</a>
                <a href="/">Socks</a><br/>
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br/>
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br/>
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br/>
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br/>
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br/>
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover3 && styles.tabStyles}`}>
          KIDS
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Topwear</p>
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                <Link to="/kids">T-Shirts</Link>
                <Link to="/kids">Casual Shirts</Link>
                <Link to="/kids">Formal Shirts</Link>
                <Link to="/kids">Sweatshirts</Link>
                <Link to="/kids">Sweaters</Link>
                <Link to="/kids">Jackets</Link>
                <Link to="/kids">Blazers & Coats</Link>
                <Link to="/kids">Suits</Link>
                <Link to="/kids">Rain Jackets</Link><br/>
                <p className={styles.dropHeadings}>Indian & Festive Wear</p>
                <Link to="/kids">Kurtas & Kurta Sets</Link>
                <Link to="/kids">Nehru Jackets</Link>
                <Link to="/kids">Sherwanis</Link>
                <Link to="/kids">Dhotis</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Bottom Wear</p>
                <a href="/">Jeans</a>
                <a href="/">Casual Trousers</a>
                <a href="/">Formal Trousers</a>
                <a href="/">Track Pants & Joggers</a><br/>
                <p className={styles.dropHeadings}>Innerwear & Sleepwear</p>
                <a href="/">Track Pants & Joggers</a>
                <a href="/">Boxers</a>
                <a href="/">Vests</a>
                <a href="/">Sleepwear & Loungewear</a>
                <a href="/">Thermals</a><br/>
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/">Casual Shoes</a>
                <a href="/">Sports Shoes</a>
                <a href="/">Formal Shoes</a>
                <a href="/">Sneakers</a>
                <a href="/">Sandals & Floaters</a>
                <a href="/">Flip Flops</a>
                <a href="/">Socks</a><br/>
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br/>
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br/>
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br/>
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br/>
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br/>
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover4 && styles.tabStyles}`}>
          HOME & LIVING
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover4(true)}
            onMouseLeave={() => setHover4(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Topwear</p>
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                <a href="/">T-Shirts</a>
                <a href="/">Casual Shirts</a>
                <a href="/">Formal Shirts</a>
                <a href="/">Sweatshirts</a>
                <a href="/">Sweaters</a>
                <a href="/">Jackets</a>
                <a href="/">Blazers & Coats</a>
                <a href="/">Suits</a>
                <a href="/">Rain Jackets</a><br/>
                <p className={styles.dropHeadings}>Indian & Festive Wear</p>
                <a href="/">Kurtas & Kurta Sets</a>
                <a href="/">Nehru Jackets</a>
                <a href="/">Sherwanis</a>
                <a href="/">Dhotis</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Bottom Wear</p>
                <a href="/">Jeans</a>
                <a href="/">Casual Trousers</a>
                <a href="/">Formal Trousers</a>
                <a href="/">Track Pants & Joggers</a><br/>
                <p className={styles.dropHeadings}>Innerwear & Sleepwear</p>
                <a href="/">Track Pants & Joggers</a>
                <a href="/">Boxers</a>
                <a href="/">Vests</a>
                <a href="/">Sleepwear & Loungewear</a>
                <a href="/">Thermals</a><br/>
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/">Casual Shoes</a>
                <a href="/">Sports Shoes</a>
                <a href="/">Formal Shoes</a>
                <a href="/">Sneakers</a>
                <a href="/">Sandals & Floaters</a>
                <a href="/">Flip Flops</a>
                <a href="/">Socks</a><br/>
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br/>
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br/>
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br/>
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br/>
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br/>
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover5 && styles.tabStyles}`}>
          BEAUTY
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover5(true)}
            onMouseLeave={() => setHover5(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Topwear</p>
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                <Link to="/womens">T-Shirts</Link>
                <Link to="/womens">Casual Shirts</Link>
                <Link to="/womens">Formal Shirts</Link>
                <Link to="/womens">Sweatshirts</Link>
                <Link to="/womens">Sweaters</Link>
                <Link to="/womens">Jackets</Link>
                <Link to="/womens">Blazers & Coats</Link>
                <Link to="/womens">Suits</Link>
                <Link to="/womens">Rain Jackets</Link><br/>
                <p className={styles.dropHeadings}>Indian & Festive Wear</p>
                <Link to="/womens">Kurtas & Kurta Sets</Link>
                <Link to="/womens">Nehru Jackets</Link>
                <Link to="/womens">Sherwanis</Link>
                <Link to="/womens">Dhotis</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Bottom Wear</p>
                <a href="/">Jeans</a>
                <a href="/">Casual Trousers</a>
                <a href="/">Formal Trousers</a>
                <a href="/">Track Pants & Joggers</a><br/>
                <p className={styles.dropHeadings}>Innerwear & Sleepwear</p>
                <a href="/">Track Pants & Joggers</a>
                <a href="/">Boxers</a>
                <a href="/">Vests</a>
                <a href="/">Sleepwear & Loungewear</a>
                <a href="/">Thermals</a><br/>
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/">Casual Shoes</a>
                <a href="/">Sports Shoes</a>
                <a href="/">Formal Shoes</a>
                <a href="/">Sneakers</a>
                <a href="/">Sandals & Floaters</a>
                <a href="/">Flip Flops</a>
                <a href="/">Socks</a><br/>
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br/>
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br/>
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br/>
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br/>
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br/>
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
        <Link
            style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}
            to="/Men"
          >
            STUDIO
          </Link>
        </div>
      </div>
      <div className={styles.navSubDiv3}>
        <Fragment>
            <form className={styles.self_center} >
            {/* add this on the form: onSubmit={searchenter} */}
            <span className={styles.search_div}>
                <button className={styles.searchbtn} ><FiSearch  /></button>  
                {/* add onClick={searchenter} in the above */}
            <input type="text" placeholder='Search for products, brands and more' 
            className={styles.search} />
            {/* onChange={(e)=>setstate(e.target.value)} add is above in input tag */}
            </span>
            </form>
        </Fragment>
      </div>
      <div className={styles.navSubDiv4}>
        {/* <div style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}>Profile</div> */}
            <div className={styles.dropdown}>
            
          <p className={`${styles.dropbtn} ${hover1 && styles.tabStyles}`}>
          <FaUserAlt style={{marginLeft:"18px"}}/>
            Profile
          </p>
          <div
            className={styles.dropdownContentProfile}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <div className={styles.dropdownFlex}>
              <div style={{width:"500px"}}>
                <p className={styles.dropHeadings}>Welcome</p>
                {LoggedinName!=null && <h3>{LoggedinName}</h3>}
                {LoggedinEmail!=null && <h3>{LoggedinEmail}</h3> }
                {LoggedinName===null && <a>To access account and manage orders</a>}
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                
                {token===null && <Link to="/login"> <button className={styles.loginSignButtom}>Login / SignUp</button> </Link>}
                {token!=null && <button className={styles.loginSignButtom} onClick={handleLogout}>Logout</button>}
                <br/>
                <p className={styles.dropHeadings}>----------------------</p>
                <a href="/">Orders</a>
                <a href="/">Wishlist</a>
                <a href="/">Gift Cards</a>
                <a href="/">Contact Us</a>
                <a href="/">Myntra Insider</a>
                <p className={styles.dropHeadings}>----------------------</p>
                <a href="/">Myntra Credit</a>
                <a href="/">Coupons</a>
                <a href="/">Saved VPA</a>
                <a href="/">Saved Cards</a>
                <a href="/">Saved Address</a>
              </div>
              
            </div>
          </div>
        </div>
        <div style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}><FaRegHeart  style={{marginLeft:"20px"}}/>Wishlist</div>
        <Link to="/bag"><div style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}><FaShoppingBag style={{marginLeft:"5px"}}/>Bag</div></Link>
      </div>
    </div>
  );
};

export {Navbar};