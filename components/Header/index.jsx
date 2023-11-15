import React, { useState } from 'react'
import style from './Header.module.scss';
import HeaderMenus from '../Header-menus';
import Container from '../Container';
import logo from '../../assets/logo.png';
import MobileMenu from '../Mobile-menu';
import Link from 'next/link';

const Header = () => {

  return (
        <div className={style.header_container}>
            <Container>
                <div className={style.header_menus}>
                    <div className={style.header_logo}>
                        <Link href={"/"}>
                            <img src={logo.src} alt="img" />
                        </Link>
                    </div>
                    <div className={style.header_item}>
                        <HeaderMenus />
                    </div>
                    <div className={style.mobile_menu}>
                        <MobileMenu />
                    </div>
                </div>
            </Container>
        </div>
  )
}

export default Header;
