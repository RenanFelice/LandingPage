import React from 'react'
import Card from './Card'
import styles from './HeroSection.module.css'


function heroSection() {
    return (
        <div className={styles.hero}>
            <div className={styles.cardContainer}>
                <Card />
            </div>
        </div>
    )
}

export default heroSection
