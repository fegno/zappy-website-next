import React, { useState } from 'react';
import style from './Mobile-menu.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Sidebar from '../Sidebar';

const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleSidebar = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <div className={style.mobile_menu_wrapper}>
                <button type='button' onClick={toggleSidebar}>
                    {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>
            <div>
                {showMenu &&
                    <div className={style.sidebar}>
                        <div className={style.sidebar_section}>
                            <Sidebar onClose={toggleSidebar} />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default MobileMenu;
