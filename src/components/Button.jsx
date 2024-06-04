import { useRef } from "react";
import style from "./Button.module.css";

export const Button = ({ children, ...rest }) => {
    const ref = useRef();

    return (
        <button ref={ref} className={style.button} {...rest}>
            {children}
        </button>
    );
};
