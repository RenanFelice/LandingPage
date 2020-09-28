import React from 'react'
import styles from './HamburguerToX.module.css'
import cx from 'classnames'

function HamburguerToX({ showMenu, setShowMenu, hamburguerIsClicked, setHamburguerIsClicked, hamStyles }) {


    return (
        <div style={{ height: `${hamStyles[0]}px`, width: `${hamStyles[0]}px` }} className={styles.hamburguerContainer}
            onClick={e => {
                setHamburguerIsClicked(!hamburguerIsClicked)
                setShowMenu(!showMenu)
            }}
        >
            <span style={hamburguerIsClicked ? { transform: `translateY(${hamStyles[0] / 2}px) rotate(135deg)`, backgroundColor: `${hamStyles[1]}` } : { backgroundColor: `${hamStyles[1]}` }} className={styles.topBar}></span>
            <span style={{ backgroundColor: `${hamStyles[1]}` }} className={cx(styles.middleBar, { [styles.middleBarClicked]: hamburguerIsClicked })}></span>
            <span style={hamburguerIsClicked ? { transform: `translateY(${-hamStyles[0] / 2}px) rotate(-135deg)`, backgroundColor: `${hamStyles[1]}` } : { backgroundColor: `${hamStyles[1]}` }} className={styles.bottonBar}></span>
        </div>
    )
}

export default HamburguerToX

