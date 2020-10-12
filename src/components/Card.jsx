import React from 'react'
import './Card.css'


function Card({customStyle, imgPath,imgStyle, text}) {
    let bg = require(`../Images/img-${imgPath}.jpg`)
    return (
        <div className={`card ${customStyle}`}>
            <div className='cardImgContainer'>
                <div style={{backgroundImage: `url(${bg})` }} className='img'></div>
            </div>
            <div className='cardBody'>
                <p className='cardDesc'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Card
