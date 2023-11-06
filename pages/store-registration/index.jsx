import React from 'react';
import style from './Store-registration.module.scss';
import Container from '@/components/Container';
import StoreRegForm from '@/components/Store-reg-form';
import NewsLetter from '@/components/Newsletter';

const StoreReg = () => {
    return (
        <Container>
            <div className={style.Store_reg_container}>
                <StoreRegForm />
            </div>
            <div>
                <NewsLetter />
            </div>
        </Container>
    )
}

export default StoreReg;
