import React from 'react';
import style from './Grocery.module.scss';
import GroceryCard from '../Grocery-card';
import phone from '../../assets/zappyy.jpg';

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
                            Zappy, your ultimate multivendor grocery shopping solution. We link users directly to trusted vendors, guaranteeing premium quality and effortless convenience. Transform your shopping experience with Zappy, your trusted destination for grocery shopping. Shop with confidence today!
                        </p>
                    </div>
                    <div className={`col-12 col-sm-6 ${style.card_img}`}>
                        <img src={phone.src} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grocery;
