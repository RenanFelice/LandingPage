import React from 'react'
import Card from './Card'
import styles from './HeroSection.module.css'


function heroSection() {
    return (
        <div className={styles.hero}>
            <div className={styles.cardContainerOne}>
                <Card
                    customStyle='bigger'
                    imgPath={'2'}
                />
                <Card
                    customStyle='smaller'
                    imgPath={'9'}
                />
            </div>
            <div className={styles.cardContainerTwo}>
                <Card
                    customStyle='smaller'
                    imgPath={'4'}
                />
                <Card
                    customStyle='bigger'
                    imgPath={'8'}
                />
            </div>
        </div>
    )
}

export default heroSection
