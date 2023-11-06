import React from 'react';
import style from './Contact-form.module.scss';
import { Formik , ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputField from '../Input-field';

const ContactForm = () => {
    const INITIAL_VALUES = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };
    const VALIDATION = Yup.object().shape({
        name : Yup.string().required("please enter your name") ,
        email : Yup.string().required("Please enter email").email("Enter a valid email"),
        subject : Yup.string().required("please enter the subject") ,
        message : Yup.string().required("please enter the message") ,
    });
    const handleSubmit = ( values , {resetForm} ) => {
        console.log("values" , values);
        resetForm();
    }
    return (
        <div className={style.contact_form_wrapper}>
            <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={VALIDATION}
                onSubmit={handleSubmit}
            >
            {({ values, handleSubmit, handleChange, handleBlur }) => (
                <form onSubmit={handleSubmit}>
                    <div className={style.contact_form}>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <InputField
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your name"
                                    className={style.small_width}
                                />
                                <div className={style.error_msg}>
                                    <ErrorMessage name="name" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <InputField 
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={style.small_width}
                                />
                                <div className={style.error_msg}>
                                    <ErrorMessage name="email" />
                                </div>
                            </div>
                        </div>
                        <div className={style.subject_fld}>
                            <InputField
                                type="text"
                                name="subject"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Subject"
                                className={style.full_width}
                            />
                            <div className={style.error_msg}>
                                <ErrorMessage name="subject" />
                            </div>
                        </div>
                        <div className={style.msg_fld}>
                            <textarea
                                name="message" 
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Message"
                            />
                            <div className={style.error_msg}>
                                <ErrorMessage name="message" />
                            </div>
                        </div>
                        <div className={style.btn_wrapper}>
                            <button type="submit">
                                send message
                            </button>
                        </div>
                    </div>
                </form>
            )}  
            </Formik>
        </div>
    )
}

export default ContactForm;
