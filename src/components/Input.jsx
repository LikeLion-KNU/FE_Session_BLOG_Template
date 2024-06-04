/* eslint-disable react/display-name */
import { forwardRef } from "react";

import styles from "./Input.module.css";

export const Input = forwardRef(({ ...rest }, ref) => {
    return <input className={styles.input} {...rest} ref={ref} />;
});
