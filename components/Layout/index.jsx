import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './Layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={style.layout}>
            <Header />
            <div className={style.content}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
