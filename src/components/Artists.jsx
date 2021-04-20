import React, {useState, useMemo, useRef, useCallback} from 'react';
import Search  from './Search';
import useArtists from '../hooks/useArtists'
import Loading from './Loading';
import ShowBio from './ShowBio';

const API = process.env.REACT_APP_API;

const Artists = () => {
    const [search, setSearch] = useState('');    
    const searchInput = useRef(null);
    const artists = useArtists(API);
    const [titleModal, setTitleModal] = useState(null);
    const [bodyModal, setBodyModal] = useState(null);
    const [showModal, setShowModal] = useState(false);

    /* const handleSearch = () =>{
        setSearch(searchInput.current.value);
    }; */

    const handleSearch = useCallback(()=>{
        setSearch(searchInput.current.value);
    },[]);

    /* const filteredArtists = artists.filter((artist) => {
        return artist.name.toLowerCase().includes(search.toLowerCase());
    }); */
    

    const filteredArtists = useMemo(()=>
        artists.filter((artist) => {
        return artist.name.toLowerCase().includes(search.toLowerCase());
        }),
        [artists,search]
        );

    const handleShowBio = (id) => {
        console.log(id);
        const result = filteredArtists.filter((a) => a.id === id);
        setTitleModal(result[0].name);
        setBodyModal(result[0].bio);
        setShowModal(true);         
        }

    const handleCloseModal = () => {
        setShowModal(false); 
        setTitleModal(null);
        setBodyModal(null);        
        }

    return(
        <>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            {filteredArtists.length>0 ?
            <div className="row mt-5">
                {filteredArtists.map(item => (                 
                    <div key={item.id} className="col-md-3">
                        <small>{item.name}</small>                            
                        <img 
                        src={item.image} 
                        className="img-fluid mx-auto d-block" 
                        alt={item.name}  
                        style={{'cursor':'pointer'}} 
                        onClick={() => handleShowBio(item.id)}                            
                        />                                                
                    </div>                    
                    )
                )}
            </div> :
            <Loading/>            
            }
            {showModal &&
            <ShowBio
            title = {titleModal}
            body = {bodyModal}
            visible = {showModal}
            handleCloseModal={handleCloseModal}
            />
            }
        </>   
        )
}

export default Artists;