import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        LET'S CONNECT: WE'R HERE TO HELP , AND YOU WE DO LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION , COMMENT ,OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THIS CONTACT FORM TO THIS PAGE , OR BY PHONE ,
        EMAIL , OR SOCIAL MEDIA .
      </p>
    </div>
  );
}

export default ContactHeader;
