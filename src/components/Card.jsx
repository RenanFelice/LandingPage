import React from 'react'
import './Card.css'


function Card({customStyle, imgPath,imgStyle, text}) {

    return (
        <div className={`card ${customStyle}`}>
            <div className='cardImgContainer'>
                <img className='cardImg' 
                style={imgStyle}
                src={require(`../Images/img-${imgPath}.jpg`)} alt=""/>
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
