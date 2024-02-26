import React from "react";
import style from "./Footer-contact.module.scss";
import mail from "../../assets/mail.png";
import location from "../../assets/location.png";
import phone from "../../assets/call.png";
import Link from "next/link";

const FooterContact = () => {
  const CONTACT = [
    {
      img: mail.src,
      name: "send us mail",
      link: "mailto:hello@zappyshopy.com",
      text: "hello@zappyshopy.com",
    },
    {
      img: phone.src,
      name: "contact us",
      link: "tel:+91 9778429687",
      text: "+91 9778429687",
    },
    {
      img: location.src,
      name: "find us here",
      text: "Kakkanad, Kochi, Kerala",
      link: "",
    },
  ];
  return (
    <div className={style.footer_con_wrapper}>
      <div className="row">
        {CONTACT.map((item) => {
          return (
            <div className={`col-12 col-sm-4 ${style.contacts}`}>
              <img src={item.img} alt="icon" />
              <div className={style.text}>{item.name}</div>
              {item?.link ? (
                <Link href={item?.link}>{item.text}</Link>
              ) : (
                item.text
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterContact;
