import React from 'react';
import style from './Delivery-man.module.scss'
import Container from '../Container';
import seller from '../../assets/seller.png';
import RegisterCard from '../Register-card';

const DeliveryMan = () => {
    const STORE = [
        {
            title:"Join as Deliveryman" ,
            des:"Register as a seller and open shop for start your business" , 
            link:"/",
            image:seller.src
        }
    ]
    return (
        <Container>
            {STORE.map((item , index) => {
                return(
                    <div className={style.store_container} key={index}>
                        <RegisterCard data={item} />
                    </div>
                )
            })}
        </Container>
    )
}

export default DeliveryMan;
