import React from 'react'
import styles from "./styles.module.css"
import { useRouter } from "next/router";

const NavbarComponent = () => {

    const router = useRouter();

  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            
            <h1 className={styles.navh1} onClick={()=>{
                router.push("/")
            }}>Pro Connect</h1>
            
            <div className={styles.navbarOptionsContainer}>
                <div className={styles.buttonJoin} onClick={()=>{
                    router.push("/login")
                }}>
                    <p>Be a part</p>
                </div>
            </div>

        </nav>
    </div>
  )
}

export default NavbarComponent