import React from 'react'
import styles from './elements.module.css'
type Props = {
    name: string;
    valueLabel: string;
    isOptional: boolean;
}

function Label({name, valueLabel, isOptional}: Props) {
  return (
    <> 
        <label className={`${styles.label}`} htmlFor={name}>{valueLabel} {isOptional && <span className='label-optional'>(Optional)</span>}</label><br />
    </>
  )
}

export default Label