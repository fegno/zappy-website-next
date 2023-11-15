import React from 'react';
import style from './Store-registration.module.scss';
import Container from '@/components/Container';
import StoreRegForm from '@/components/Store-reg-form';
import NewsLtrForm from '@/components/News-letter-form';

const StoreReg = () => {
    return (
        <Container>
            <div className={style.Store_reg_container}>
                <StoreRegForm />
            </div>
            {/* <div className={style.news_letter}>
                <NewsLtrForm />
            </div> */}
        </Container>
    )
}

export default StoreReg;
