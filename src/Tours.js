import React, { useEffect, useState } from 'react';
import Tour from './Tour';
import { tourDatas } from './data';
import Loading from './Loading'

export default function Tours() {
    const [tourList, setTourList] = useState(tourDatas);
    const [msg, setMsg] = useState('');

    const displayMsg = (txt) => {
        setMsg('Record Deleted successfully!');
        setTimeout(() => {
            setMsg('')
        }, 2000)
    }
    const handleDelete = (id) => {
        const updatedList = tourList.filter((tour) => tour.id !== id);
        setTourList(updatedList);
        displayMsg();
    }

    return (
        <div>
            <h1>Our Tours</h1>
            {msg && <span className='delete-msg'>{msg}</span>}

            <div className='tour-list'>
                {tourList.length > 0 ? tourList.map((tour) => <Tour key={tour.id} tour={tour} handleDelete={handleDelete} />) : <Loading />}
            </div>

        </div>
    )
}
