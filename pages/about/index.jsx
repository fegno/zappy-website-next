import React from 'react';
import style from './about.module.scss';
import store from '../../assets/store.png';
import Container from '@/components/Container';
import NewsLetter from '@/components/Newsletter';

const About = () => {
    return (
        <Container>
            <div className={style.about_page_wrapper}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className={style.about_title}>
                            StackFood is Best Delivery Service Near
                        </div>
                        <div className={style.below_title}>
                            You
                        </div>
                        <div className={style.des}>
                            <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className={style.about_img}>
                            <img src={store.src} alt="img" />
                        </div>
                    </div>
                </div>
                <div>
                    <NewsLetter />
                </div>
            </div>
        </Container>
    )
}

export default About;
