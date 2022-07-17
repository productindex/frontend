import React, {useState} from 'react';
import styles from './elements.module.css'
import { formatTelephone } from '@productindex/util/formatTelephoneNumber'
import Label  from './Label'
import FieldError from '@productindex/components/formElements/FieldError';

interface TextFieldProps  {
    name?: string;
    valueType?: string;
    valuePlaceholder?: string;
    valueLabel?: string;
    onChange?: any;
    value?: string;
    className?: string;
    error?: string;
    show?: boolean;
    isOptional?: boolean;
    disabled?: boolean;
    onBlur: any;
    showLabel: boolean;

}

const TextField: React.FC<TextFieldProps>  = ({ 
    name,
    valueType,
    valuePlaceholder,
    value,
    valueLabel,
    className,
    onChange,
    error,
    disabled,
    onBlur,
    isOptional,
    showLabel
}) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleType = () => {
      if (valueType == 'password' && showPassword) {
        return 'text'
      }
      if (valueType.toLowerCase().startsWith("tel")) return 'tel'
      return valueType
    }

    const showPass = () => {
      setShowPassword(true)
    }
    const hidePass = () => {
      setShowPassword(false)
    }
    return (
        <div className={styles.textContainer}>
            {showLabel && <Label name={name} valueLabel={valueLabel} isOptional={isOptional}/>}
            <input 
                type={toggleType()} 
                className={error && onBlur ? `${styles.textboxError} ${styles.textbox} ${className}` : `${className} ${styles.textbox}`} 
                name={name} 
                placeholder={valuePlaceholder }
                id={name}
                onChange={onChange}
                value={valueType == 'telephone'? formatTelephone(value) : value}
                disabled={disabled}
                onBlur={onBlur}
            />
            {valueType=='password' && <button type='button' className={styles.showHide} onPointerDown={showPass} onPointerUp={hidePass}>{showPassword? 'hide' : 'show'}</button>}
            <FieldError errorMessage={error}/>
        </div>
    ) };
export { TextField };