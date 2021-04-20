import React from 'react';

const Search = ({search, searchInput, handleSearch}) => {
    return ( 
        <nav className="nav justify-content-center navbar fixed-top  navbar-dark bg-dark mb-5">
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" value={search} ref={searchInput} onChange={handleSearch}/>
            </form>
        </nav>
     );
}
 
export default Search;