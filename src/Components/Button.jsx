import styles from "./Button.module.css";

const Button = ({is_secondary , icon , text , ...rest}) => {
  return (
    <button {...rest} 
        className={is_secondary ? styles.secondary_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  );
};

export default Button;
