import React from 'react'
import styles from './elements.module.css'

type Props = {
    errorMessage: string;
}

export default function FieldError({errorMessage}: Props) {
  return (
    <>{errorMessage ? <div className={styles.errorAlert}>{errorMessage}</div> : <></> }</>
  )
}