import styles from "./index.less";

interface ButtonProps {
    theme?: "light" | "dark";
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { theme = "light", children, onClick } = props;
    return (
        <div className={`${styles.button} ${styles[theme]}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Button;
