import React, { use, useState, useEffect } from 'react';
import MovieItem from './media-item';

const MediaList = () => {

    const [media, setMedia] = useState(null);
    const [mediaCount, setMediaCount] = useState(0);
    const [page, setPage] = useState(0);


    // const API_BASE = import.meta.env.VITE_API_BASE_URL;
    // const PAGE_SIZE = Number(import.meta.env.VITE_PAGE_SIZE);



    // This will track when the page variable changes 
    // and will fetch the media data from the backend 
    // API accordingly. This is useful for implementing 
    // pagination in the media list.

    useEffect(() => {
        // Fetch media data from the backend API
        getMedia();
    }, [page]);

    const getMedia = () => {
        // This function will fetch media data from the backend API
        // and update the media state variable with the fetched data.

        // fetch(process.env.VITE_API_BASE_URL + "/Media?pageSize=" + process.env.VITE_PAGE_SIZE + "&pageIndex=" + page)

        // fetch(`${process.env.VITE_API_BASE_URL}/Media?pageIndex=${page}&pageSize=${process.env.VITE_PAGE_SIZE}`)
        fetch(`${import.meta.env.VITE_API_BASE_URL}/Media?pageSize=${import.meta.env.VITE_PAGE_SIZE}&pageIndex=${page}`)
            .then(res => res.json())
            .then(res => {
                if (res.status === true && res.data.count > 0) {
                    setMedia(res.data.media);
                    setMediaCount(Math.ceil(res.data.count / import.meta.env.VITE_PAGE_SIZE));
                }

                if (res.data.count === 0) {
                    alert("No media found");
                }
            }).catch(err => {
                alert("Error fetching media data");
                console.error("Error fetching media data: ", err);
            });
    }

    return (
        <>
            {media && media.length > 0 ?
                media.map((item, index) => <MovieItem key={index} data={item} />)
                : (
                    <p>Loading media...</p>
                )}


        </>
    )
};

export default MediaList;
