import React, { useState , useEffect } from 'react';
import style from './Store-reg-form.module.scss';
import { Formik , ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {HiBuildingStorefront} from 'react-icons/hi2';
import {HiMiniUser} from 'react-icons/hi2';
import img from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import Map from '../Map'

const StoreRegForm = () => {
    const [captcha, setCaptcha] = useState('');
    const [userInput, setUserInput] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageFile , setImageFile] = useState(null);
    const [captchaValidation, setCaptchaValidation] = useState('');

    const INITIAL_VALUES = {
        name: "",
        tax:"",
        address:"",
        time:[],
        cover_photo:"",
        logo:"",
        zone:"",
        module:"",
        first_name:"",
        last_name:"",
        phone:"",
        email: "",
        password: "",
        confirm_password: "",
    };

    const VALIDATION = Yup.object().shape({
        name : Yup.string().required("please enter your name") ,
        tax:Yup.number().required("Please enter tax"),
        address : Yup.string().required("please enter the address") ,
        zone: Yup.string().required("Please select a zone"),
        module: Yup.string().required("Please select a module"),
        first_name : Yup.string().required("please enter your first name") ,
        last_name : Yup.string().required("please enter your last name") ,
        phone : Yup.string().required("please enter your phone") ,
        email : Yup.string().required("Please enter email").email("Enter a valid email"),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    useEffect(() => {
        fetch('/api/captcha') 
        .then((response) => response.json())
        .then((data) => setCaptcha(data.code));
    }, []);

    const handleCaptchaInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (values, { resetForm }) => {
        if (userInput !== captcha) {
            setCaptchaValidation('Invalid captcha'); 
            return false;
        }
        setCaptchaValidation("");
        setCaptcha("");
        console.log('updated:', values);
        resetForm();
    };
    
    return (
        <div className={style.store_form_container}>
            <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={VALIDATION}
                onSubmit={handleSubmit}
            >
            {({ values, handleSubmit, handleChange, handleBlur }) => (
                <form onSubmit={handleSubmit}>
                    <div className={style.info_sec}>
                        <HiBuildingStorefront />
                        <span>Store Information</span>
                    </div>
                    <div className={style.form_wrapper}>
                        <div className='row'>
                            <div className="col-12 col-sm-6">
                                <div><label for="name">Store Name</label></div>
                                <input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Store Name"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="name" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div><label for="tax">VAT/TAX</label></div>
                                <input
                                    type="number"
                                    name="tax"
                                    value={values.tax}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="VAT/TAX"
                                    min="0" 
                                    step=".01"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="tax" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-12 col-sm-6">
                                <div><label for="address">Store Address</label></div>
                                <textarea
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Store Address"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="address" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div><label for="tax">Approx Delivery Time</label></div>
                                <div className={style.time_wrapper}>
                                    <input
                                        type="number"
                                        name="maximun_delivery_time"
                                        value={values.maximun_delivery_time}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Max:20"
                                    />
                                    <input
                                        type="number"
                                        name="minimum_delivery_time"
                                        value={values.minimum_delivery_time}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Min: 10"
                                    />
                                    <select name="time">
                                        <option value="minutes">Minutes</option>
                                        <option value="hours">Hours</option>
                                        <option value="days">Days</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                {selectedFile ? (
                                    <div className={style.selected_img}>
                                        <img src={URL.createObjectURL(selectedFile)} alt="Selected Image" />
                                    </div>
                                ) : (<div className={style.no_img_wrapper}>
                                        <img src={img.src} />
                                    </div>
                                ) 
                                }
                                <div className={style.image}><label for="tax">Upload Cover Photo<span>(Ratio 2:1)</span></label></div>
                                <input 
                                    type="file"
                                    name="cover_photo"
                                    value={values.cover_photo}
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setSelectedFile(file);
                                    }}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                {imageFile ? (
                                    <div className={style.selected_logo}>
                                        <img src={URL.createObjectURL(imageFile )} alt="Selected Image" />
                                    </div>
                                ) : (<div className={style.no_logo_wrapper}>
                                        <img src={img2.src} />
                                    </div>
                                ) 
                                }
                                <div className={style.image}><label for="tax">Store Logo<span>(Ratio 2:1)</span></label></div>
                                    <input 
                                        type="file"
                                        name="logo"
                                        value={values.logo}
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            setImageFile(file);
                                        }}
                                        onBlur={handleBlur}
                                    />
                            </div>
                        </div>
                        <div className={style.select_wrapper}>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <div><label for="zone">Zone</label></div>
                                    <select name="zone" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.zone}
                                    >
                                        <option value="" disabled selected>Select zone</option>
                                        <option value="test">test</option>
                                        <option value="test1">test1</option>
                                        <option value="test2">test2</option>
                                        <option value="test3">test3</option>
                                    </select>
                                    <div className={style.err_msg}>
                                        <ErrorMessage name="zone" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div><label for="module">System Module</label></div>
                                    <select name="module" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.module}
                                    >
                                        <option value="" disabled selected>Select Module</option>
                                        <option value="test">test</option>
                                        <option value="test1">test1</option>
                                        <option value="test2">test2</option>
                                        <option value="test3">test3</option>
                                    </select>
                                    <div className={style.err_msg}>
                                        <ErrorMessage name="module" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.map}>
                            <Map />
                        </div>
                    </div>
                    <div className={style.info_sec}>
                        <HiMiniUser />
                        <span>Owner Information</span>
                    </div>
                    <div className={style.form_wrapper}>
                        <div className="row">
                            <div className="col-4">
                                <div><label for="first_name">First Name</label></div>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={values.first_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="First Name"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="first_name" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div><label for="last_name">Last Name</label></div>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={values.last_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Last Name"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="last_name" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div><label for="phone">Phone</label></div>
                                <input
                                    type="text"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Phone"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="phone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.info_sec}>
                        <HiMiniUser />
                        <span>Owner Information</span>
                    </div>
                    <div className={style.form_wrapper}>
                        <div className="row">
                            <div className="col-4">
                                <div><label for="email">Email</label></div>
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Email"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="email" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div><label for="password">Password</label></div>
                                <input
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="6+ characters required"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="password" />
                                </div>
                            </div>
                            
                            <div className="col-4">
                                <div><label for="confirm_password">Password</label></div>
                                <input
                                    type="password"
                                    name="confirm_password"
                                    value={values.confirm_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="6+ characters required"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="confirm_password" />
                                </div>
                            </div>
                        </div>
                        <div className={style.captcha_wrapper}>
                            <input
                                type="text"
                                name="captcha"
                                value={userInput}
                                onChange={handleCaptchaInputChange}
                                placeholder='Enter captcha value'
                            />
                            <div className={style.captcha_container}>
                                {captcha}
                            </div> 
                        </div>
                        <div className={style.err_msg}>
                            {captchaValidation}
                        </div>
                    </div>
                    <div className={style.btn_wrapper}>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            )}
            </Formik>
        </div>
    )
}

export default StoreRegForm;
