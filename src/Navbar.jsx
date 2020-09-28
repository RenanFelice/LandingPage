import React, { useState } from 'react'
import styles from './Navbar.module.css'
import cx from 'classnames'
import HamburguerToX from './HamburguerToX'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const [hamburguerIsClicked, setHamburguerIsClicked] = useState(false)

    window.addEventListener('resize', e => {
        if (window.innerWidth >= 960) {
            setShowMenu(false);
            setHamburguerIsClicked(false)
        }
    })

    return (
        <nav className={styles.Nav}>
            <div className={styles.logoContainer}>
                <i className="fas fa-rocket"></i>
                <div className={styles.logo}>Home</div>
            </div>

            <ul className={styles.navMenu}>
                <li className={styles.navItem}>Produtos</li>
                <li className={styles.navItem}>Servicos</li>
                <li className={styles.navItem}>Sobre</li>
                <li className={styles.navItem}>Contato</li>
            </ul>
            <HamburguerToX hamStyles={[30, 'black']}  showMenu={showMenu} setShowMenu={setShowMenu} hamburguerIsClicked={hamburguerIsClicked} setHamburguerIsClicked={setHamburguerIsClicked}/>
            
            <div className={cx(styles.sideMenu, { [styles.menuActive]: showMenu })}>
                <ul >
                    <li className={styles.sideMenuItem}>Produtos</li>
                    <li className={styles.sideMenuItem}>Servicos</li>
                    <li className={styles.sideMenuItem}>Sobre</li>
                    <li className={styles.sideMenuItem}>Contato</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
