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
                    tag={'Luxo'}
                    text={'Viaje pelas ilhas de Bali em um cruseiro particular'}
                />
                <Card
                    customStyle='smaller'
                    imgPath={'9'}
                    tag={'Aventura'}
                    text={'Explore uma cachoeira escondida na floresta Amazônica'}
                />
            </div>
            <div className={styles.cardContainerTwo}>
                <Card
                    customStyle='smaller'
                    imgPath={'4'}
                    tag={'Aventura'}
                    text={'Experiencie uma partida de futebol no topo das montanhas do Himalaia'}
                />
                <Card
                    customStyle='bigger'
                    imgPath={'8'}
                    tag={'Exótico'}
                    text={'Faça um lindo passeio de camelo no deserto do Saara com guias especializados'}
                />
            </div>
        </div>
    )
}

export default heroSection
