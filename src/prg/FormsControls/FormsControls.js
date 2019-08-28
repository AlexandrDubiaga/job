import React from "react";
import styles from './FormsControls.module.css';

const FormContorll = ({ input, meta,...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControll + " " + (hasError ? styles.error : '')}>
            <div>  {props.children}</div>
            {hasError ? <span>{meta.error}</span> : ''}
        </div>
    )
}

export const Textarea = props => {
    const { input, meta, ...restProps } = props;
    return <FormContorll {...props}> <textarea {...input} {...restProps} /></FormContorll>
}

export const Input = props => {
    const { input, meta, ...restProps } = props;
    return <FormContorll {...props}><input {...input} {...restProps} /></FormContorll>
}


