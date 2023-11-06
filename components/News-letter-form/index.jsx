import React from 'react';
import style from './News-letter.module.scss';
import InputField from '../Input-field';
import { Formik , ErrorMessage} from 'formik';
import * as Yup from "yup";
import {LiaAngleRightSolid} from 'react-icons/lia';

const NewsLtrForm  = () => {

  const INITIAL_VALUES = {
      email: "",
  };

  const VALIDATION = Yup.object().shape({
      email: Yup.string().required("Please enter email").email("Enter a valid email"),
  });

  const handleFormSubmit = (values , {resetForm}) =>{
    console.log('Form submitted with values:', values);
    resetForm();
  }

  return (
        <div className={style.news_letter_section}>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={VALIDATION}
            onSubmit={handleFormSubmit}
          >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <div className={style.form_wrapper}>
                    <div className={style.form_fields}>
                        <InputField 
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="Enter your email address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={style.small_field}
                        />
                    </div>
                    <div className={style.button_wrapper}>
                      <button type="submit">
                        <LiaAngleRightSolid />
                      </button>
                    </div>
                </div>
                <div className={style.error_msg}>
                    <ErrorMessage name="email" />
                </div>
              </form>
          )}
          </Formik>
        </div>
  )
}

export default NewsLtrForm;
