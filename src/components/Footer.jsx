import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.contactInfo}>
                <div className={styles.adressContainer}>
                    <div className={styles.locationIconContainer}><i class="fas fa-map-marker-alt"></i></div>
                    <div className={styles.adressInfoContainer}>
                        <div className={styles.street}>Av. Dr. Antonio Alvaro, 517</div>
                        <div className={styles.country}>Santo André, Brasil</div>
                    </div>
                </div>
                <div className={styles.phoneContainer}>
                    <div className={styles.phoneIconContainer}><i class="fas fa-phone-alt"></i></div>
                    <div className={styles.phoneNumber}>(11)96387-4518</div>
                </div>
                <div className={styles.emailContainer}>
                    <div className={styles.emailIconContainer}><i class="far fa-envelope"></i></div>
                    <div className={styles.email}>renanfelice@gmail.com</div>
                </div>
            </div>


            <div className={styles.aboutContainer}>
                <div className={styles.aboutTitle}>Sobre a empresa</div>
                <div className={styles.aboutBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum, iure odio voluptas quasi asperiores laudantium voluptatibus fugit. Illo, cupiditate officiis iste consequatur eaque ratione.</div>
                <div className={styles.socialMediaContainer}>
                    <div className={styles.facebookIconContainer}><i class="fab fa-facebook-f"></i></div>
                    <div className={styles.twitterIconContainer}><i class="fab fa-twitter"></i></div>
                    <div className={styles.linkedinIconContainer}><i class="fab fa-linkedin-in"></i></div>
                    <div className={styles.githubIconContainer}><i class="fab fa-github"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
