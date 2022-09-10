import React from 'react'
import styles from '@productindex/components/bits/bits.module.css'

type Props = {
    dark? : boolean;
}

function LogoBox({dark}: Props) {
  return (
    <div className={styles.logoBox}>
        {
            dark ? 
            <img src="/images/logo-light.png" alt="Product Index Logo" /> :
            <img src="/images/logo-dark.png" alt="Product Index Logo" />         
        }
    </div>
  )
}

export default LogoBox