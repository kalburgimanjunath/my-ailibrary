import React from 'react'
import styles from './styles.module.css'

export const HeaderComponent = ({ text }) => {
  return <div className={styles.header}>Example Component: {text}</div>
}
