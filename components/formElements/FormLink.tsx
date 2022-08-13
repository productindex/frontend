import React from 'react'
import Link from 'next/link'
import styles from '@productindex/components/formElements/elements.module.css'

type Props = {
    href: string;
    text: string;
}

export const FormLink = ({href, text}: Props) => {
  return (
    <Link href={href}><a className={styles.link}>{text}</a></Link>
  )
}
