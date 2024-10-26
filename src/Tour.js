import React, { useState } from 'react'

export default function Tour({ tour, handleDelete }) {
    const [fullText, setFullText] = useState(false);
    return (
        <>
            <div className='tour-box'>
                <img src={tour.image} alt='tour.name' />
                <h2>{tour.name} <span>₹{tour.price}</span></h2>
                <p>{fullText ? tour.info : `${tour.info.slice(0, 100)}...`} <button onClick={() => setFullText((txt) => !txt)} className='expand-btn'>{fullText ? 'Show less' : 'Read more'}</button></p>
                <button onClick={() => handleDelete(tour.id)} className='delete-btn'>Not Interested</button>
            </div>
        </>
    )
}
