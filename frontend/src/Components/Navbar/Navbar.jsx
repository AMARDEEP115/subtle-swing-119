import { React } from "react";
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";
import logo from "./SHOP-IT-EASY.png";
import { InputLeftElement, InputGroup, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={Style.navMainDiv}>
      <div className={Style.navSubDiv1}>
        <img src={logo} alt="logo" className={Style.logoSize} />
      </div>
      <div className={Style.navSubDiv2}>
        <div className={Style.navSubDiv2Men}>
          <Link
            style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}
            to="/Men"
          >
            MEN
          </Link>
          <div className={Style.navSubDiv2MenSec}>
            <div>
              <div>
                <ul>
                  <li>Topwear</li>
                  <li>T-Shirts</li>
                  <li>Casual Shirts</li>
                  <li>Formal Shirts</li>
                  <li>Sweatshirts</li>
                  <li>Sweaters</li>
                  <li>Jackets</li>
                  <li>Blazers & Coats</li>
                  <li>Suits</li>
                  <li>Rain Jackets</li>
                </ul>
                <ul class="nextul">
                  <li>Indian & Festive Wear</li>
                  <li>Kurtas & Kurta Sets</li>
                  <li>Sherwanis</li>
                  <li>Nehru Jackets</li>
                  <li>Dhotis</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Bottom Wear</li>
                  <li>Jeans</li>
                  <li>Casual Trousers</li>
                  <li>Formal Trousers</li>
                  <li>Shorts</li>
                  <li>Track Pants & Joggers</li>
                </ul>

                <ul class="nextul">
                  <li>Innerwear & Sleepwear</li>
                  <li>Briefs & Trunks</li>
                  <li>Boxers</li>
                  <li>Vests</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Thermals</li>
                </ul>
                <ul class="nextul">
                  <li>Plus Size</li>
                  <li>S, M, L, XL, XXl, XXl</li>
                </ul>
              </div>
              <div className="a1">
                <ul>
                  <li>Footwear</li>
                  <li>Casual Shoes</li>
                  <li>Sports Shoes</li>
                  <li>Formal Shoes</li>
                  <li>Sneakers</li>
                  <li>Sandals & Floaters</li>
                  <li>Flip Flops</li>
                  <li>Socks</li>
                </ul>
                <ul class="nextul">
                  <li>Personal Care & Grooming</li>
                  <li>Lotions</li>
                  <li>Shaving kit</li>
                </ul>
                <ul clss="nextul">
                  <li>Watches</li>
                  <li>Fastrack</li>
                  <li>Puma</li>
                  <li>Rado</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Sports & Active Wear</li>
                  <li>Sports Shoes</li>
                  <li>Sports Sandals</li>
                  <li>Active T-Shirts</li>
                  <li>Track Pants & Shorts</li>
                  <li>Tracksuits</li>
                  <li>Jackets & Sweatshirts</li>
                  <li>Sports Accessories</li>
                  <li>Swimwear</li>
                </ul>
                <ul class="nextul">
                  <li>Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
                  <li>Fashion Accessories</li>
                  <li>Wallets</li>
                  <li>Belts</li>
                  <li>Perfumes & Body Mists</li>
                  <li>Trimmers</li>
                  <li>Deodorants</li>
                  <li>Ties, Cufflinks & Pocket Squares</li>
                  <li>Accessory Gift Sets</li>
                  <li>Caps & Hats</li>
                  <li>Mufflers, Scarves & Gloves</li>
                  <li>Phone Cases</li>
                  <li>Rings & Wristwear</li>
                  <li>Helmets</li>
                </ul>
                <ul class="nextul">
                  <li>Bags & Backpacks</li>
                  <li>Reebok</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.navSubDiv2Women}>
          <Link
            style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}
            to="/Men"
          >
            WOMEN
          </Link>
          <div className={Style.navSubDiv2WomenSec} style={{marginLeft: "-100px",}}>
            <div>
              <div>
                <ul>
                  <li>Indian & Fusion Wear</li>
                  <li>Kurtas & Suits</li>
                  <li>Kurtis, Tunics & Tops</li>
                  <li>Ethnic Wear</li>
                  <li>Leggings, Salwars & Churidars</li>
                  <li>Skirts & Palazzos</li>
                  <li>Sarees</li>
                  <li>Dress Materials</li>
                  <li>Lehenga Cholis</li>
                  <li>Dupattas & Shawls</li>
                  <li>Jackets</li>
                </ul>

                <ul class="nextul">
                  <li>Belts, Scarves & More</li>
                </ul>
                <ul class="nextul">
                  <li>Watches & Wearables</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Western Wear</li>
                  <li>Dresses</li>
                  <li>Jumpsuits</li>
                  <li>Tops</li>
                  <li>Jeans</li>
                  <li>Trousers & Capris</li>
                  <li>Shorts & Skirts</li>
                  <li>Shrugs</li>
                  <li>Sweaters & Sweatshirts</li>
                  <li>Jackets & Coats</li>
                  <li>Blazers & Waistcoats</li>
                </ul>

                <ul class="nextul">
                  <li>Plus Size</li>
                </ul>
                <ul class="nextul">
                  <li>Sunglasses & Frames</li>
                </ul>
              </div>
              <div className="a1">
                <ul>
                  <li>Footwear</li>
                  <li>Flats</li>
                  <li>Casual Shoes</li>
                  <li>Heels</li>
                  <li>Boots</li>
                  <li>Sports Shoes & Floaters</li>
                </ul>

                <ul class="nextul">
                  <li>Sports & Active Wear</li>
                  <li>Clothing</li>
                  <li>Footwear</li>
                  <li>Sports Accessories</li>
                  <li>Sports Equipment</li>
                </ul>
              </div>
              <div className="a2">
                <ul>
                  <li>Lingerie & Sleepwear</li>
                  <li>Bra</li>
                  <li>Briefs</li>
                  <li>Shapewear</li>
                  <li>Sleepwear & Loungewear</li>
                  <li>Swimwear</li>
                  <li>Camisoles & Thermals</li>
                </ul>

                <ul class="nextul">
                  <li>Beauty & Personal Care</li>
                  <li>Makeup</li>
                  <li>Skincare</li>
                  <li>Premium Beauty</li>
                  <li>Lipsticks</li>
                  <li>Fragrances</li>
                </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
                  <li>Gadgets</li>
                  <li>Smart Wearables</li>
                  <li>Fitness Gadgets</li>
                  <li>Headphones</li>
                  <li>Speakers</li>
                </ul>

                <ul class="nextul">
                  <li>Jewellery</li>
                  <li>Fashion Jewellery</li>
                  <li>Fine Jewellery</li>
                  <li>Earrings</li>
                </ul>
                <ul class="nextul">
                  <li>Backpacks</li>
                </ul>
                <ul class="nextul">
                  <li>Handbags, Bags & Wallets</li>
                </ul>
                <ul class="nextul">
                  <li>Luggages & Trolleys</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.navSubDiv2Kids}>
          <Link
            style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}
            to="/Men"
          >
            KIDS
          </Link>
          <div className={Style.navSubDiv2KidsSec} style={{marginLeft: "-200px",}}>
            <div>
              <div>
              <ul>
              <li>Boys Clothing</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
              <li>Shorts</li>
              <li>Jeans</li>
              <li>Trousers</li>
              <li>Clothing Sets</li>
              <li>Ethnic Wear</li>
              <li>Track Pants & Pyjamas</li>
              <li>Jacket, Sweater & Sweatshirts</li>
              <li>Party Wear</li>
              <li>Innerwear & Thermals</li>
              <li>Nightwear & Loungewear</li>
              <li>Value Packs</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Girls Clothing</li>
              <li>Dresses</li>
              <li>Tops</li>
              <li>Tshirts</li>
              <li>Clothing Sets</li>
              <li>Lehenga choli</li>
              <li>Kurta Sets</li>
              <li>Party wear</li>
              <li>Dungarees & Jumpsuits</li>
              <li>Skirts & shorts</li>
              <li>Tights & Leggings</li>
              <li>Jeans, Trousers & Capris</li>
              <li>Jacket, Sweater & Sweatshirts</li>
              <li>Innerwear & Thermals</li>
              <li>Nightwear & Loungewear</li>
              <li>Value Packs</li>
            </ul>
              </div>
              <div className="a1">
              <ul>
              <li>Footwear</li>
              <li>Casual Shoes</li>
              <li>Flipflops</li>
              <li>Sports Shoes</li>
              <li>Flats</li>
              <li>Sandals</li>
              <li>Heels</li>
              <li>School Shoes</li>
              <li>Socks</li>
            </ul>

            <ul class="nextul">
              <li>Toys</li>
              <li>Learning & Development</li>
              <li>Activity Toys</li>
              <li>Soft Toys</li>
              <li>Action Figure / Play set</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Infants</li>
              <li>Bodysuits</li>
              <li>Rompers & Sleepsuits</li>
              <li>Clothing Sets</li>
              <li>Tshirts & Tops</li>
              <li>Dresses</li>
              <li>Bottom wear</li>
              <li>Winter Wear</li>
              <li>Innerwear & Sleepwear</li>
              <li>Infant Care</li>
            </ul>

            <ul class="nextul">
              <li>Home & Bath</li>
            </ul>
            <ul class="nextul">
              <li>Home & Bath</li>
            </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
              <li>Kids Accessories</li>
              <li>Bags & Backpacks</li>
              <li>Watches</li>
              <li>Jewellery & Hair accessory</li>
              <li>Sunglasses</li>
              <li>Masks & Protective Gears</li>
              <li>Caps & Hats</li>
            </ul>

            <ul class="nextul">
              <li>Brands</li>
              <li>H&M</li>
              <li>Max Kids</li>
              <li>Pantaloons</li>
              <li>United Colors Of Benetton Kids</li>
              <li>YK</li>
              <li>U.S. Polo Assn. Kids</li>
              <li>Mothercare</li>
              <li>HRX</li>
            </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.navSubDiv2Home}>
          <Link
            style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}
            to="/Men"
          >
            HOME & LIVING
          </Link>
          <div className={Style.navSubDiv2HomeSec} style={{marginLeft: "-300px",}}>
            <div>
              <div>
              <ul>
              <li>Bed Linen & Furnishing</li>
              <li>Bedsheets</li>
              <li>Bedding Sets</li>
              <li>Blankets, Quilts & Dohars</li>
              <li>Pillows & Pillow Covers</li>
              <li>Bed Covers</li>
            </ul>

            <ul class="nextul">
              <li>Flooring</li>
              <li>Carpets</li>
              <li>Floor Mats & Dhurries</li>
              <li>Door Mats</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Bath</li>
              <li>Bath Towels</li>
              <li>Hand & Face Towels</li>
              <li>Beach Towels</li>
              <li>Towels Set</li>
              <li>Bath Rugs</li>
              <li>Bath Robes</li>
              <li>Bathroom Accessories</li>
            </ul>

            <ul class="nextul">
              <li>Lamps & Lighting</li>
              <li>Floor Lamps</li>
              <li>Ceiling Lamps</li>
              <li>Table Lamps</li>
              <li>Wall Lamps</li>
              <li>Outdoor Lamps</li>
              <li>String Lights</li>
            </ul>
              </div>
              <div className="a1">
              <ul>
              <li>Home Décor</li>
              <li>Plants & Planters</li>
              <li>Aromas & Candles</li>
              <li>Clocks</li>
              <li>Mirrors</li>
              <li>Wall Décor</li>
              <li>Wall Shelves</li>
              <li>Fountains</li>
              <li>Showpieces & Vases</li>
            </ul>

            <ul class="nextul">
              <li>Cushions & Cushion Covers</li>
            </ul>

            <ul class="nextul">
              <li>Curtains</li>
            </ul>

            <ul class="nextul">
              <li>Home Gift Sets</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Kitchen & Table</li>
              <li>Dinnerware & Serveware</li>
              <li>Cups and Mugs</li>
              <li>Bakeware & Cookware</li>
              <li>Kitchen Storage & Tools</li>
              <li>Bar & Drinkware</li>
              <li>Table Covers & Furnishings</li>
            </ul>

            <ul class="nextul">
              <li>Storage</li>
              <li>Organisers</li>
              <li>Hooks & Holders</li>
            </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                <ul>
              <li>Brands</li>
              <li>Home Centre</li>
              <li>Spaces</li>
              <li>D'Decor</li>
              <li>Portico New York</li>
              <li>Pure Home & Living</li>
              <li>Swayam</li>
              <li>Raymond Home</li>
              <li>Maspar</li>
              <li>Corelle</li>
              <li>Trident</li>
              <li>Cortina</li>
              <li>Story@Home</li>
              <li>Random</li>
              <li>Ellementry</li>
              <li>ROMEE</li>
              <li>SEJ by Nisha Gupta</li>
            </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.navSubDiv2Beauty}>
          <Link
            style={{
              fontWeight: "bold",
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}
            to="/Men"
          >
            BEAUTY
          </Link>
          <div className={Style.navSubDiv2BeautySec} style={{marginLeft: "-400px",}}>
            <div className="flex">
              <div className="a1">
              <ul>
              <li>Makeup</li>
              <li>Lipstick</li>
              <li>Lip Gloss</li>
              <li>Lip Liner</li>
              <li>Mascara</li>
              <li>Eyeliner</li>
              <li>Kajal</li>
              <li>Eyeshadow</li>
              <li>Foundation</li>
              <li>Primer</li>
              <li>Concealer</li>
              <li>Compact</li>
              <li>Nail Polish</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Skincare, Bath & Body</li>
              <li>Face Moisturiser</li>
              <li>Cleanser</li>
              <li>Masks & Peel</li>
              <li>Sunscreen</li>
              <li>Serum</li>
              <li>Face Wash</li>
              <li>Eye Cream</li>
              <li>Lip Balm</li>
              <li>Body Lotion</li>
              <li>Body Wash</li>
              <li>Body Scrub</li>
              <li>Hand Cream</li>
            </ul>

            <ul class="nextul">
              <li>Baby Care</li>
            </ul>

            <ul class="nextul">
              <li>Masks</li>
            </ul>
              </div>
              <div className="a1">
              <ul>
              <li>Haircare</li>
              <li>Shampoo</li>
              <li>Conditioner</li>
              <li>Hair Cream</li>
              <li>Hair Oil</li>
              <li>Hair Gel</li>
              <li>Hair Color</li>
              <li>Hair Serum</li>
              <li>Hair Accessory</li>
            </ul>

            <ul class="nextul">
              <li>Fragrances</li>
              <li>Perfume</li>
              <li>Deodorant</li>
              <li>Body Mist</li>
            </ul>
              </div>
              <div className="a2">
              <ul>
              <li>Appliances</li>
              <li>Hair Straightener</li>
              <li>Hair Dryer</li>
              <li>Epilator</li>
            </ul>

            <ul class="nextul">
              <li>Men's Grooming</li>
              <li>Trimmers</li>
              <li>Beard Oil</li>
              <li>Hair Wax</li>
            </ul>

            <ul class="nextul">
              <li>Beauty Gift & Makeup Set</li>
              <li>Beauty Gift</li>
              <li>Makeup Kit</li>
            </ul>

            <ul class="nextul">
              <li>Premium Beauty</li>
            </ul>

            <ul class="nextul">
              <li>Wellness & Hygiene</li>
            </ul>
              </div>
              <div
                className="a1"
                style={{
                  paddingRight: "25px",
                }}
              >
                 <ul>
              <li>Top Brands</li>
              <li>Lakme</li>
              <li>Maybelline</li>
              <li>LOreal</li>
              <li>Philips</li>
              <li>Bath & Body Works</li>
              <li>THE BODY SHOP</li>
              <li>Biotique</li>
              <li>Mamaearth</li>
              <li>MCaffeine</li>
              <li>Nivea</li>
              <li>Lotus Herbals</li>
              <li>LOreal Professionnel</li>
              <li>KAMA AYURVEDA</li>
              <li>M.A.C</li>
              <li>Forest Essentials</li>
            </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.navSubDiv2Studio}>
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
      <div className={Style.navSubDiv3}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
          </InputLeftElement>
          <Input type="tel" placeholder="Search..." />
        </InputGroup>
      </div>
      <div className={Style.navSubDiv4}>
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

export { Navbar };
