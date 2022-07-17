import React from 'react';
import Label from '@productindex/components/formElements/Label'
import style from './elements.module.css'
import FieldError from '@productindex/components/formElements/FieldError';

interface ImageUploadProps {
  name?: string;
  valueLabel?: string;
  onChange?: any;
  isOptional?: boolean;
  error?: string;
  showLabel: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  name,
  valueLabel,
  onChange,
  isOptional,
  error,
  showLabel
}) => {
  return (
    <>
      {showLabel && <Label name={name} valueLabel={valueLabel} isOptional={isOptional}/>}
      <input
        type="file"
        name={name}
        onChange={onChange}
        id={name}
        className={style.btnUpload}
        accept="image/png, image/jpeg, image/jpg"
      />
      <FieldError errorMessage={error}/>
    </>
  );
};
export {ImageUpload};
