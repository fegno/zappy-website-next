import React from 'react';
import style from './Privacy-policy.module.scss';
import Container from '@/components/Container';
import NewsLetter from '@/components/Newsletter';

const PrivacyPolicy = () => {
    return (
        <Container>
            <h2 className={style.heading_wrapper}>
                Privacy
                <span className={style.head}> Policy</span>
            </h2>
            <div className={style.privacy_policy_warpper}>
                <div className={style.privacy_body}>
                    <p>
                        Privacy Policy <br />
                        Welcome to ZAPPY. At ZAPPY, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our application. By using the ZAPPY Application, you agree to the practices described in this Privacy Policy.
                    </p>
                    <p>Information we collect: <br />
                        Personal Information: When you sign up for ZAPPY, we may collect your name, email address, phone number, and delivery address.<br />
                        Purchase History:
                        We collect information about your past orders, preferences, and shopping habits to enhance your experience.<br/>
                        Device and Usage Information: We may gather data about the devices you use to access our application, such as IP address, browser type, operating system, and timestamps.
                    </p>
                    <p>How we use your information:<br />
                        Order Processing: We use your personal and payment information to process and deliver your grocery orders.<br />
                        Account Management: Your information helps us manage your account and communicate with you about your orders and promotions. <br />
                        Improving Services: We may use your data to analyse and enhance our services, customize your experience, and offer personalized recommendations.<br />
                        Customer Support: Your information allows us to provide efficient customer support and address any issues you may encounter.<br />
                        Marketing and Promotions: We may use your email address to send you marketing communications and promotional offers, but you can opt-out anytime. 
                    </p>
                    <p>
                        Data Sharing and Disclosure <br />
                        Third-Party Service Providers: We may share your information with trusted third-party service providers who help us operate our application, process payments, and deliver orders. <br />
                        Legal Requirements: We may disclose your data if required by law, court order, or government request, or to protect the rights, property, or safety of ZAPPY, our users, or others. <br />
                        Business Transfers: If ZAPPY undergoes a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction. 
                    </p>
                    <p>
                        Data Security <br />
                        We implement security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <p>
                        Cookies and Tracking Technologies <br />
                        ZAPPY uses cookies and similar tracking technologies to enhance user experience and gather information about website usage. <br />
                        You can control cookies through your browser settings, but disabling them may limit some features of the application.
                    </p>
                    <p>
                        Children’s Privacy <br />
                        ZAPPY is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children.
                    </p>
                    <p>
                        Your choice and rights <br />
                        You can access and update your personal information in your ZAPPY account settings. <br />
                        You can opt-out of marketing emails by clicking the unsubscribe link in the email or contacting our customer support. <br />
                        You have the right to request access to your data, its correction, or deletion, subject to applicable laws. 
                    </p>
                    <p>
                        Changes to the privacy policy <br />
                        We may update this Privacy Policy from time to time. The revised version will be posted on our application with the effective date.
                    </p>
                    <p>
                        Contact Us. <br />
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at hello@zappyshopy.com <br />
                        By continuing to use the ZAPPY Application, you acknowledge that you have read and understood this Privacy Policy.
                    </p>
                </div>
            </div>
            <div className={style.news_letter}>
                <NewsLetter />
            </div>
        </Container>
    )
}

export default PrivacyPolicy
