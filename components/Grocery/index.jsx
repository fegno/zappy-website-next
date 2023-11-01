import React from 'react';
import style from './Grocery.module.scss';
import Container from '../Container';
import GroceryCard from '../Grocery-card';
import phone from '../../assets/seller.png';

const Grocery = () => {
    const GroceryData = [
        { 
            title:"We make grocery shopping even more easier",
            dec:"Find the greatest deals from the grocery stores near you",
        },
        { 
            title:"We make grocery",
            dec:"Find the greatest deals from the grocery stores near you",
        },
        { 
            title:"We make grocery shopping",
            dec:"Find the greatest deals from the grocery stores near you",
        }
    ]
    return (
        <div className={style.grocery_section}>
            <div className={style.grocery_head}>
                Your eCommerce venture starts here !
            </div>
            <div className={style.grocery_sub_head}>
                Enjoy one services in one platform
            </div>
            <div className={style.grocery_card_section}>
                <div className={style.grocery_card_detail}>
                    <div className={style.card_head}>
                        Grocery
                    </div>
                    {GroceryData.map((item) => {
                        return(
                            <div>
                                <GroceryCard data={item} />
                            </div>
                        )
                    })}
                </div>
                <div className={style.card_img}>
                    <img src={phone.src} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Grocery;
