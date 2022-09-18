import React from 'react'

export default function SingleCard(props) {
    return (
        <div className='card'>
            <img className='card-img' src={props.item.imageUrl} />
            <div className='card-container'>
                <div>
                    <img className='location-pin' src='./images/locationPin.png' />
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.item.title}</h2>
                <div>
                    <h3 className='display-inline'>{props.item.startDate} - </h3>
                    <h3 className='display-inline'>{props.item.endDate}</h3>
                </div>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}