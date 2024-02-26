import React from 'react';
import style from './Contact-us.module.scss';
import Container from '@/components/Container';
import {FiPhoneCall} from 'react-icons/fi';
import {MdOutlineAttachEmail} from 'react-icons/md';
import {IoLocationOutline} from 'react-icons/io5';
import ContactCard from '@/components/Contact-card';
import ContactForm from '@/components/Contact-form';
import NewsLtrForm from '@/components/News-letter-form';

const Contact = () => {
    const ContactData = [
        { icon : <FiPhoneCall /> , title:"Call us" , link:"tel:+91 9778429687" , text:"+91 9778429687"},
        { icon : <MdOutlineAttachEmail /> , title:"Email" , link:"mailto:hello@zappyshopy.com" , text:"hello@zappyshopy.com"},
        { icon : <IoLocationOutline /> , title:"Address" , text:"Zapiens Innovation </br> Kakkanad, Kochi, Kerala"},
    ];

    return (
        <Container>
            <div className={style.contact_page}>
                <div className="row">
                    <div className={`col-12 col-lg-6 ${style.contact_card_sec}`}>
                            <div className="row">
                                {ContactData?.map((item, index) => {
                                    const isLastCard = index === ContactData.length - 1;
                                    const colClass = isLastCard ? 'col-12 ' : 'col-12 col-sm-6';
                                    return (
                                    <div key={index} className={`${colClass} ${style.contact_card}`}>
                                        <ContactCard data={item} />
                                    </div>
                                    );
                                })}
                            </div>
                    </div>
                    <div className={`col-12 col-lg-6 ${style.contact_form_sec}`}>
                        <div className={style?.form_wrapper}>
                        <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={style.news_letter}>
                <NewsLtrForm />
            </div> */}
        </Container>
    )
}

export default Contact;    
                     