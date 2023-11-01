import React from 'react'
import style from './Cantainer.module.scss';

const Container = ({children}) => {
    return (
        <div className={style.container_section}>
            {children}
        </div>
    )
}

export default Container
