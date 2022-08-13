import React from 'react';
import styles from './elements.module.css'
import Label  from './Label'
import FieldError from '@productindex/components/formElements/FieldError';

interface TextAreaProps  {
    name?: string;
    valuePlaceholder?: string;
    valueLabel?: string;
    onChange?: any;
    value?: string;
    className?: string;
    error?: string;
    show?: boolean;
    isOptional?: boolean;
    disabled?: boolean;
    onBlur?: any;
    showLabel?: boolean;
    minLength?: number;

}

const TextArea: React.FC<TextAreaProps>  = ({ 
    name,
    valuePlaceholder,
    value,
    valueLabel,
    className,
    onChange,
    error,
    disabled,
    onBlur,
    isOptional,
    showLabel,
    minLength
}) => {


    return (
        <div className={styles.textContainer}>
            {showLabel && <Label name={name} valueLabel={valueLabel} isOptional={isOptional}/>}
            <textarea name={name} 
                id={name} 
                cols={30} 
                rows={10} 
                className={error && onBlur ? `${styles.textboxError} ${styles.textbox} ${styles.textArea}${className}` : `${className} ${styles.textbox } ${styles.textArea}`} 
                minLength={minLength}
                placeholder={valuePlaceholder}
                onChange={onChange}
                disabled={disabled}
                value={value}
                
            />

    
            <FieldError errorMessage={error}/>
        </div>
    ) };
export { TextArea };