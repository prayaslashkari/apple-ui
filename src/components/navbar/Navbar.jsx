import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return ( 

         <div className={styles.container}>
            <div className={styles.inner}>
                    <div className={styles.logo}>
                        <img src="https://img.icons8.com/metro/24/000000/mac-os.png"/>
                    </div>
            
                    <div className={styles.navitem}>
                        <a className={styles.item} href="/">Mac</a>
                    </div>

                    <div className={styles.navitem}>
                        <a className={styles.item} href="/">ipad</a>
                    </div>

                    <div className={styles.navitem}>
                        <a className={styles.item} href="/">iPhone</a>
                    </div>

                    <div className={styles.navitem}>
                        <a className={styles.item} href="/">Watch</a>
                    </div>

                    <div className={styles.navitem}>
                        <a className={styles.item} href="/">TV</a>
                    </div>

                    <div className={styles.navitem}>
                        <a className={styles.item} href="/">Music</a>
                    </div>

                    <div className={styles.navitem}>
                        <a className={styles.item} href="/">Support</a>
                    </div>

                    <div className={styles.navitem}>
                        <a className={styles.item} href="/">Where to Buy</a>
                    </div>

                    <div className={styles.icon}>
                        <a href="/"><img src="https://img.icons8.com/ios-filled/22/000000/search.png"/></a>
                    </div>

            </div>
        </div> 
        );
}
 
export default Navbar;