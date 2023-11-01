import React from 'react';
import style from './Footer-contact.module.scss';
import mail   from '../../assets/mail.png'; 
import location from '../../assets/location.png';
import phone from '../../assets/call.png';
import Link from 'next/link';

const FooterContact = () => {
    const CONTACT = [
        {img: mail.src ,name:"send us mail" , link:"mailto:support@zappy.com" , text:"support@zappy.com"},
        {img: phone.src , name :"contact us" , link:"tel:0170000000" , text:"0170000000"},
        {img: location.src ,name :"find us here" , text:"House 0.0 , Road:00 , City-000 , Country", link:"/"}
    ];
    return (
        <div className={style.footer_con_wrapper}>
            <div className="row">
                {CONTACT.map((item) => {
                    return(
                        <div className={`col-12 col-sm-4 ${style.contacts}`}>
                            <img src={item.img} alt="icon"/>
                            <div className={style.text}>
                                {item.name}
                            </div>
                            <Link href={item?.link}>{item.text}</Link>
                        </div> 
                    )
                })}
            </div>
        </div>
                    
    )
}

export default FooterContact;
