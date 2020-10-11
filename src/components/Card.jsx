import React from 'react'
import './Card.css'


function Card({customStyle, imgPath}) {

    return (
        <div className={`card ${customStyle}`}>
            <div className='cardImgContainer'>
                <img className='cardImg' src={require(`../Images/img-${imgPath}.jpg`)} alt=""/>
            </div>
            <div className='cardBody'>
                <p className='cardDesc'></p>
            </div>
        </div>
    )
}

export default Card
