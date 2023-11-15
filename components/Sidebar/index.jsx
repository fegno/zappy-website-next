import React, { useState } from 'react';
import style from './Sidebar.module.scss';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineCaretDown } from 'react-icons/ai';
import { LiaAngleDownSolid } from 'react-icons/lia';

const Sidebar = ({ onClose }) => {
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    const MENUS = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "about" },
        { name: "Contact Us", link: "/contact-us" },
        { name: "Join Us", link: "/", hasSubmenu: true },
    ];

    const toggleSubmenu = () => {
        setIsSubmenuVisible(!isSubmenuVisible);
    };

    return (
        <div className={style.sidebar_wrapper}>
            <div className={style.close_btn}>
                <button onClick={onClose}><AiOutlineClose /></button>
            </div>
            <ul>
                {MENUS.map((item, index) => (
                    <li className={style.menu_items} key={index}>
                        {item.hasSubmenu ? (
                            <div>
                                <span className={style.menus} onClick={toggleSubmenu}>
                                    <div className={style.menu_list}>{item.name}</div>
                                    <LiaAngleDownSolid />
                                </span>
                                {isSubmenuVisible && (
                                    <div className={style.submenu}>
                                        <Link href="/store-registration">Register as a store</Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link href={item.link} onClick={onClose}>{item.name}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
