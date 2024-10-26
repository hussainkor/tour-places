import React from 'react'

export default function Loading({ reloadData }) {
    return (
        <div className='no-data-found'>
            {/* <h2>Loading...</h2> */}
            <h2>No tour left</h2>
            <button onClick={reloadData}>Reload</button>
        </div>
    )
}
