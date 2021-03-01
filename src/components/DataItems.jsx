import React from 'react';

const DataItems = (props) =>{  
    return(
        <>            
            <div className="row mt-5">
                {
                props.items.map(item => { 
                    return (
                        <div key={item.id} className="col">
                            <small>{item.name}</small>
                            <a href="#" onClick={props.handleShowBio.bind(this, item.id)}>
                                <img 
                                src={item.image} 
                                className="img-fluid mx-auto d-block" 
                                alt={item.name}                            
                                />     
                            </a>                       
                        </div>
                        )
                })
                }
            </div>                              
        </> 
    )
}

export default DataItems;
