import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?api_key=SYov9Cn85jWspJqa7zaPWlMWWzduX7mR&q=Rick+And+Morty&limit=10';
        const res = await fetch( url );
        const { data } = await res.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        setImages(gifs);
    }

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem
                            {...img}
                            key= { img.id }
                        />
                    ))
                }
            </div>
        </>
    )
}
