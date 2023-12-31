import React , {useState} from 'react'
import style from './Header-menu.module.scss';
import Link from 'next/link';
import { LiaAngleDownSolid } from 'react-icons/lia';
import ClickAwayListener from 'react-click-away-listener';

const HeaderMenus = () => {
    const [subMenu, setSubMenu] = useState(false);

    const MENUS = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/about" },
        { name: "Contact us", link: "/contact-us"  },
        { name: "Join us", link: "/join-us" },
      ];

    const toggleSubmenu = () => {
        setSubMenu(!subMenu);
    };
    return (
        <div className={style.header_menus}>
            {MENUS.map((item, index) => {
                if (item.name === "Join us") {
                    return (
                        <div className={style.dropdown} key={index}>
                            <span className={style.item_name} onClick={toggleSubmenu}>
                                <div className={style.join_us}>{item.name}</div>
                                <LiaAngleDownSolid className={`${style.caretIcon} ${subMenu ? style.rotateIcon : ''}`} />
                            </span>
                            {subMenu && (
                                <ClickAwayListener onClickAway={()=>setSubMenu(false)}>
                                    <div className={style.submenu}>
                                        <Link href="/store-registration">Register as a store</Link>
                                    </div>
                                </ClickAwayListener>
                            )}
                        </div>
                    );
                } else {
                    return (
                        <Link className={style.items} key={index} href={item.link}>
                            {item.name}
                        </Link>
                    );
                }
            })}
        </div>
    );
}

export default HeaderMenus;
