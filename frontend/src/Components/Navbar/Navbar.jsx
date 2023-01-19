import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./SHOP-IT-EASY.png";
import { InputLeftElement, InputGroup, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  show
    ? (document.querySelector("body").style.overflow = "hidden")
    : (document.querySelector("body").style.overflow = "");

  return (
    <div className={styles.navMainDiv}>
      <div className={styles.navSubDiv1}>
        <img src={logo} alt="logo" className={styles.logoSize} />
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
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
          </InputLeftElement>
          <Input type="tel" placeholder="Search..." />
        </InputGroup>
      </div>
      <div className={styles.navSubDiv4}>
        <div style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}>Profile</div>
        <div style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}>Wishlist</div>
        <div style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}>Bag</div>
      </div>
    </div>
  );
};

export {Navbar};