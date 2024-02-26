import React from "react";
import style from "./Grocery.module.scss";
import GroceryCard from "../Grocery-card";
import phone from "../../assets/zappyy.jpg";

const Grocery = () => {
  return (
    <div className={style.grocery_section}>
      <div className={style.grocery_head}>
        Your eCommerce venture starts here !
      </div>
      <div className={style.grocery_sub_head}>
        Enjoy one services in one platform
      </div>
      <div className={style.grocery_card_section}>
        <div className="row">
          <div className={`col-12 col-sm-6 ${style.grocery_card_detail}`}>
            <p>
              Welcome to Zappy, your ultimate vendor-centric grocery shopping
              solution! At Zappy, we've redefined the grocery shopping
              experience by connecting users directly to a nearby trusted
              vendor. Say goodbye to the uncertainty of quality and the
              inconvenience of navigating multiple platforms. We bring you a
              curated selection of products, ensuring a seamless and reliable
              shopping journey.
            </p>
            <p>
              Discover the simplicity of Zappy's user-friendly platform,
              designed to make your grocery shopping effortless. With a diverse
              range of high-quality products from our trusted vendors, you can
              easily explore and add items to your cart, streamlining the entire
              process. Our commitment to transparency means you can shop with
              confidence, knowing that each vendor on Zappy meets our stringent
              quality standards.
            </p>
            <p>
              Zappy is not just a marketplace; it's a transformative solution
              for those who seek premium quality experience and convenience in
              their grocery shopping. Experience the ease of direct connections
              to trusted vendors, elevate your shopping game, and make Zappy
              your go-to destination for a reliable and enjoyable grocery
              shopping experience. Shop smart, shop Zappy!
            </p>
          </div>
          <div className={`col-12 col-sm-6 ${style.card_img}`}>
            <img src={phone.src} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
