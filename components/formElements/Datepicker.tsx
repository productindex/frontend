import React from "react";
import Label from '@productindex/components/formElements/Label'
import styles from './elements.module.css'
import FieldError from '@productindex/components/formElements/FieldError'
interface TextFieldProps {
  name?: string;
  valueLabel?: string;
  onChange?: any;
  value?: string;
  error?: string;
  //TODO: add onBlur
}

const Datepicker: React.FC<TextFieldProps> = ({
  name,
  valueLabel,
  onChange,
  error,
  value
}) => {
  return (
    <div className={styles.textContainer}>
      <Label name={name} valueLabel={valueLabel}/>
      <input
        type="date"
        id={name}
        name={name}
        onChange={onChange}
        className={`${styles.textbox} ${styles.datePicker}`}
        value={value}
      />
      <FieldError errorMessage={error}/>
    </div>
  );
};
export { Datepicker };
