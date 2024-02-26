import React from "react";
import style from "./about.module.scss";
import store from "../../assets/store.png";
import Container from "@/components/Container";
import NewsLtrForm from "@/components/News-letter-form";

const About = () => {
  return (
    <Container>
      <div className={style.about_page_wrapper}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={style.title_wrapper}>
              <div className={style.about_title}>
                Elevate Your Grocery Shopping Experience with
              </div>
              <span className={style.below_title}> Zappy</span>
            </div>
            <div className={style.des}>
              <p>
                In the bustling realm of online grocery shopping, Zappy emerged
                in 2023 as a game-changer, revolutionizing the industry by
                connecting discerning users directly to a network of nearby
                vendor. From the very outset, Zappy set out on a mission to
                redefine the grocery shopping experience, recognizing the need
                for a platform that not only bridges the gap between users and
                vendor nearby but also guarantees an unparalleled standard of
                quality.
              </p>
              <p>
                At the heart of Zappy's success story is our commitment to
                delivering excellence. During our initial launch, we
                meticulously onboarded a select group of premium vendors,
                ensuring that users have immediate access to a curated selection
                of top-tier products. Our focus on quality from day one has
                positioned Zappy as a trusted destination for those seeking
                nothing but the best in their grocery haul.
              </p>
              <p>
                What truly sets Zappy apart is the dedicated team of energetic
                individuals who have propelled our platform toward success.
                Comprising industry experts, tech enthusiasts, and passionate
                individuals, our team shares a common vision: to elevate the
                grocery shopping experience. With an unwavering commitment to
                transparency and user satisfaction, we have cultivated an
                environment where innovation thrives, ensuring that Zappy
                remains at the forefront of delivering high-quality experiences
                with every click.
              </p>
              <p>
                As we continue to grow, Zappy remains steadfast in its mission
                to redefine convenience, quality, and trust in online grocery
                shopping. Our journey is marked by a relentless pursuit of
                excellence, and we invite you to be part of this exciting
                chapter. Experience the difference with Zappy – where
                high-quality products, seamless shopping, and a dynamic team
                converge to create an unparalleled grocery shopping experience.
                Shop with confidence, shop with Zappy.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={style.about_img}>
              <img src={store.src} alt="img" />
            </div>
          </div>
        </div>
        {/* <div className={style.news_letter}>
                    <NewsLtrForm />
                </div> */}
      </div>
    </Container>
  );
};

export default About;
