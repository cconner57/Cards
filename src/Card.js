import React from 'react'

const Card = ({image, title, description}) => {
    return (
        <div className="Card-container">
            <img src={image} alt=""/>
            <h4>{title}</h4>
            <p>{description}</p>
            <input type="button" value="Learn More"/>
        </div>
    )
}

export default Card
