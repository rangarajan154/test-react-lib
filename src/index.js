import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text, styleObj }) => {
  return <div className={styles.test} style={styleObj}>Example Component: {text}</div>
}
