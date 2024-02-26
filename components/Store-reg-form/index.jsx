import React, { useState , useEffect } from 'react';
import style from './Store-reg-form.module.scss';
import { Formik , ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {HiBuildingStorefront} from 'react-icons/hi2';
import {HiMiniUser} from 'react-icons/hi2';
import img from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import { http } from '../../axios/http';
import imgcon from '../../assets/contact.jpg';
import { toast } from 'react-toastify';

const StoreRegForm = () => {
    const [captcha, setCaptcha] = useState('');
    const [userInput, setUserInput] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageFile , setImageFile] = useState(null);
    const [captchaValidation, setCaptchaValidation] = useState('');
    const [zones, setZones] = useState([]);

    const INITIAL_VALUES = {
        storeName: '',
        storeAddress: '',
        tax: '',
        minDeliveryTime: '',
        maxDeliveryTime: '',
        fName: '',
        lName: '',
        phone: '',
        email: '',
        password: '',
        zoneId: '',
        moduleId: '',
        deliveryTimeType: '',
        confirm_password:'',
        // cover_photo:'',
        logo:'',
      };

    const VALIDATION = Yup.object().shape({
        storeName : Yup.string().required("please enter your name") ,
        storeAddress : Yup.string().required("please enter the address") ,
        zoneId: Yup.string().required("Please select a zone"),
        fName : Yup.string().required("please enter your first name") ,
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
        http.get('zone/list')
          .then(response => {
            setZones(response.data);  
          })
          .catch(error => {
            console.error('Error fetching zones:', error);
          });
    
        fetch('/api/captcha')
          .then(response => response.json())
          .then(data => setCaptcha(data.code))
          .catch(error => console.error('Error fetching captcha:', error));
      }, []);

    const handleCaptchaInputChange = (e) => {
        setUserInput(e.target.value);
    };
    
    const onSubmitHandler = (values , { resetForm }) => {
        if (userInput !== captcha) {
            setCaptchaValidation('Invalid captcha'); 
            return false;
        }
        setCaptchaValidation("");
        setUserInput("");

        values.minDeliveryTime = 0;
        values.maxDeliveryTime = 0;
        values.tax = 0;
        values.moduleId = 2;
        values.deliveryTimeType ="hours";

        const formData = new FormData();
        formData.append('name', values.storeName);
        formData.append('address', values.storeAddress);
        formData.append('tax', values.tax);
        formData.append('minimum_delivery_time', values.minDeliveryTime);
        formData.append('maximum_delivery_time', values.maxDeliveryTime);
        formData.append('f_name', values.fName);
        formData.append('phone', values.phone);
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('zone_id', values.zoneId);
        formData.append('module_id', values.moduleId);
        formData.append('delivery_time_type', values.deliveryTimeType);
        formData.append('logo', imageFile);

        http.post("auth/vendor/register", formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
          .then((res) => {
            resetForm(formData);
            setImageFile("");
            toast.success("Store registration successfull")
          })
          .catch((error) => {
            console.error('Error submitting form:', error);
            toast.error("Something went wrong")
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        });
    };
    
    return (
        <div className={style.store_form_container}>
            <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={VALIDATION}
                onSubmit={onSubmitHandler}
            >
            {({ values, handleSubmit, handleChange, handleBlur }) => (
                <form onSubmit={handleSubmit}>
                    <div className={style.info_sec}>
                        <HiBuildingStorefront />
                        <span>Store Information</span>
                    </div>
                    <div className={style.form_wrapper}>
                        <div className={style.mob_img_wrapper}>
                            <img src={imgcon.src} alt="contact" />
                        </div>
                        <div className={style.form_sec}>
                            <div className="row">
                                <div className="col-sm-6 col-12">
                                    <div className='row'>
                                        <div className="col-12">
                                            <div><label htmlFor="storeName">Store Name</label></div>
                                            <input
                                                type="text"
                                                name="storeName"
                                                value={values.storeName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Store Name"
                                            />
                                            <div className={style.err_msg}>
                                                <ErrorMessage name="storeName" />
                                            </div>
                                        </div>
                                        <div className={`col-12 ${style.hidden}`}>
                                            <div><label htmlFor="tax">VAT/TAX</label></div>
                                            <input
                                                type="text"
                                                name="tax"
                                                value="0"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="VAT/TAX"
                                                min="0" 
                                                step=".01"
                                                disabled
                                            />
                                            <div className={style.err_msg}>
                                                <ErrorMessage name="tax" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-12">
                                            <div><label htmlFor="storeAddress">Store Address</label></div>
                                            <textarea
                                                name="storeAddress"
                                                value={values.storeAddress}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Store Address"
                                            />
                                            <div className={style.err_msg}>
                                                <ErrorMessage name="storeAddress" />
                                            </div>
                                        </div>
                                        <div className={`col-12 ${style.hidden}`}>
                                            <div><label htmlFor="time">Approx Delivery Time</label></div>
                                            <div className={style.time_wrapper}>
                                                <input
                                                    type="number"
                                                    name="maxDeliveryTime"
                                                    value="0"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Max:20"
                                                    disabled
                                                />
                                                <input
                                                    type="number"
                                                    name="minDeliveryTime"
                                                    value="0"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    placeholder="Min: 10"
                                                    disabled
                                                />
                                                <select name="deliveryTimeType">
                                                    <option value={values.deliveryTimeType}>Hours</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <div className="col-12 col-sm-6">
                                            {selectedFile ? (
                                                <div className={style.selected_img}>
                                                    <img src={URL.createObjectURL(selectedFile)} alt="Selected Image" />
                                                </div>
                                            ) : (<div className={style.no_img_wrapper}>
                                                    <img src={img.src} />
                                                </div>
                                            ) 
                                            }
                                            <div className={style.image}><label htmlFor="cover_photo">Upload Cover Photo<span>(Ratio 2:1)</span></label></div>
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
                                        </div> */}
                                        <div className="col-12">
                                            {imageFile ? (
                                                <div className={style.selected_logo}>
                                                    <img src={URL.createObjectURL(imageFile )} alt="Selected Image" />
                                                </div>
                                            ) : (<div className={style.no_logo_wrapper}>
                                                    <img src={img2.src} />
                                                </div>
                                            ) 
                                            }
                                            <div className={style.image}><label htmlFor="logo">Store Logo<span>(Ratio 2:1)</span></label></div>
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
                                            <div className="col-12">
                                                <div><label htmlFor="zoneId">Zone</label></div>
                                                <select
                                                    name="zoneId"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.zoneId}
                                                >
                                                    <option value="" disabled selected>Select zone</option>
                                                    {zones.map(zone => (
                                                    <option key={zone.id} value={zone.id}>
                                                        {zone.name}
                                                    </option>
                                                    ))}
                                                </select>
                                                <div className={style.err_msg}>
                                                    <ErrorMessage name="zoneId" />
                                                </div>
                                            </div>
                                            <div className={`col-12 ${style.hidden}`}>
                                                <div><label htmlFor="moduleId">System Module</label></div>
                                                <select name="moduleId" 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.moduleId}
                                                >
                                                    <option value="" disabled selected>Select Module</option>
                                                    <option value="2">2</option>
                                                </select>
                                                <div className={style.err_msg}>
                                                    <ErrorMessage name="moduleId" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className={style.img_wrapper}>
                                        <img src={imgcon.src} alt="contact" />
                                    </div>
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
                                <div><label htmlFor="fName">First Name</label></div>
                                <input
                                    type="text"
                                    name="fName"
                                    value={values.f_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="First Name"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="fName" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div><label htmlFor="lName">Last Name</label></div>
                                <input
                                    type="text"
                                    name="lName"
                                    value={values.lName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Last Name"
                                />
                                <div className={style.err_msg}>
                                    <ErrorMessage name="lName" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div><label htmlFor="phone">Phone</label></div>
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
                                <div><label htmlFor="email">Email</label></div>
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
                                <div><label htmlFor="password">Password</label></div>
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
                                <div><label htmlFor="confirm_password">Password</label></div>
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
