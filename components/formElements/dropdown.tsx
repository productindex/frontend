import React from 'react';
import styles from './elements.module.css'
import Label from '@productindex/components/formElements/Label'
import FieldError from '@productindex/components/formElements/FieldError'

interface TextFieldProps  {
    name?: string;
    onChange?: any;
    error?: string;
    disabled?: boolean;
    optionList?: {value?: string, name?: string, default?: boolean}[];
    isOptional?: boolean;
    valueLabel: string;
    showLabel?: boolean;
    defaultValue?: string;
    // TODO: add onBlur
}

const Dropdown: React.FC<TextFieldProps>  = ({ 
    name,
    onChange,
    error,
    optionList,
    disabled,
    isOptional,
    valueLabel,
    showLabel,
    defaultValue
    
}) => {
    return (
        
        <div className={styles.dropdown}>
            {showLabel && <Label name={name} valueLabel={valueLabel} isOptional={isOptional}/>}
            <select name={name} id={name} className={styles.textbox} onChange={onChange} defaultValue={defaultValue ? defaultValue : '-'} disabled={disabled}>
                {optionList && <> <option disabled hidden value={'-'}> - </option> {optionList.map((item) => <option key={item.name} value={item.value}>{item.name}</option> )}</>}
            </select>
            <FieldError errorMessage={error}/>
        </div>
    )
};
export { Dropdown };