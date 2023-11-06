import React from 'react';
import style from './Footer.module.scss';
import Container from '../Container';
import logo from '../../assets/logo.png';
import {AiOutlineInstagram , AiOutlineTwitter} from 'react-icons/ai';
import {BiLogoFacebook , BiLogoLinkedin , BiLogoPinterestAlt} from 'react-icons/bi';
import Link from 'next/link';
import Download from '../download';
import FooterContact from '../Footer-contact';

const Footer = () => {
    const SOCIAL = [
        {icon:<AiOutlineInstagram />, link:"/"} ,
        {icon:<BiLogoFacebook />, link:"/"} ,
        {icon:<BiLogoLinkedin />, link:"/"} ,
        {icon:<AiOutlineTwitter />, link:"/"} ,
        {icon:<BiLogoPinterestAlt />, link:"/"} 
    ];
  
    const FOOTERLINKS = [
        { name : "About Us" , link:"/about"},
        { name : "Contact Us" , link:"/contact-us"},
        { name : "Register As a Store" , link:"/store-registration"},
        { name : "Privacy Policy" , link:"/privacy-policy"},
        { name : "Terms and Conditions" , link:"/terms-and-conditions"},
    ];
    return (
            <div className={style.footer_container}>
                <Container>
                    <div className={style.footer_wrapper}>
                        <div className='row'>
                            <div className="col-lg-4 col-md-5">
                                <div className={style.footer_dec_wrapper}>
                                    <div className={style.logo}>
                                        <img src={logo.src} alt="img"/>
                                    </div>
                                    <div className={style.footer_dec}>
                                        Subscribe to our news letter to get latest updates
                                    </div>
                                    {SOCIAL.map((item) => {
                                        return(
                                            <Link className={style.social_icon} href={item.link}>
                                                {item.icon}
                                            </Link>
                                        )
                                    })}
                                    <div className={style.app_links}>
                                        <Download />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className={style.footer_link_wrapper}>
                                    <div className={style.footer_links}>
                                        {FOOTERLINKS.map((item) => {
                                            return(
                                                <Link href={item.link}>{item.name}</Link>
                                            )
                                        })}
                                    </div>
                                    <div className={style.footer_contact}>
                                        <FooterContact />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className={style.footer_end}>
                    @ 2023 Fegno Technologies
                </div>
            </div>
    )
    }

export default Footer;
