import React from 'react';

const Search = (props) => {  
    
     return(
        <nav className="nav justify-content-center navbar fixed-top  navbar-dark bg-dark mb-5">
            <form className="form-inline">
                <input 
                    name="search"
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    onChange={props.handleSearch}
                />
               
            </form>
        </nav>        
        )
}

export default Search;