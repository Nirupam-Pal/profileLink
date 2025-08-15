import React from 'react'
import styles from "./styles.module.css"

const NavbarComponent = () => {
  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <h1></h1>
            <div className={styles.navbar_rightContainer}></div>
        </nav>
    </div>
  )
}

export default NavbarComponent