import React from 'react'
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.imgContainer}></div>
            <h1 className={styles.homeTitle}>Título da página</h1>
            <button className={styles.homeBtn}>Get Started</button>
        </div>
    )
}

export default Home
