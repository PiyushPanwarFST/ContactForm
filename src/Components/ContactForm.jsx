import { MdMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Button from "./Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Piyush");
  const [email, setEmail] = useState("piyush2002panwar@gamil.com");
  const [text, setText] = useState("Subscribe to this channel");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px"></MdMessage>}
          ></Button>
          <Button
            text="VIA CALL"
            icon={<IoCallSharp fontSize="24px"></IoCallSharp>}
          ></Button>
        </div>
        <Button
          is_secondary={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px"></MdEmail>}
        ></Button>

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON"></Button>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image"/>
      </div>
    </section>
  );
};

export default ContactForm;
