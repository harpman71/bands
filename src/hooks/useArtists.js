import { useState, useEffect } from 'react';

const useArtists = url =>{
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(response=>response.json())
        .then(data => setArtists(data))
    }, [url]);    
    return artists;
};


export default useArtists;