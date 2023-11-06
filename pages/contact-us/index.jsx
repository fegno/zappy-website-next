import React from 'react';
import style from './Contact-us.module.scss';
import Container from '@/components/Container';
import {FiPhoneCall} from 'react-icons/fi';
import {MdOutlineAttachEmail} from 'react-icons/md';
import{IoLocationOutline} from 'react-icons/io5';
import {BsClockHistory} from 'react-icons/bs';
import ContactCard from '@/components/Contact-card';
import ContactForm from '@/components/Contact-form';
import NewsLetter from '@/components/Newsletter';

const Contact = () => {
    const ContactData = [
        { icon : <FiPhoneCall /> , title:"Call us" , link:"tel:+880123456789" , text:"+880123456789"},
        { icon : <MdOutlineAttachEmail /> , title:"Email" , link:"mailto:admin@gmail.com" , text:"admin@gmail.com"},
        { icon : <IoLocationOutline /> , title:"Address" , text:"Test"},
        { icon : <BsClockHistory /> , title:"Time" , text:"Sunday- Saturday 5:30 AM- 5:30 AM"},
    ];

    return (
        <Container>
            <div className={style.contact_page}>
                <div className="row">
                    <div className={`col-12 col-md-6 ${style.contact_card_sec}`}>
                            <div className="row">
                                {ContactData?.map(( item ) => {
                                    return(
                                        <div className={`col-12 col-sm-6 ${style.contact_card}`}>
                                            <ContactCard data={item} />
                                        </div>
                                    )
                                })}
                            </div>
                    </div>
                    <div className={`col-12 col-md-6 ${style.contact_form_sec}`}>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div>
                <NewsLetter />
            </div>
        </Container>
    )
}

export default Contact;    
                     