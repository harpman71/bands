import React from 'react';

const DataItems = (props) =>{  
    return(
        <>            
            <div className="row mt-5">
                {
                props.items.map(item => { 
                    return (
                        <div key={item.id} className="col-md-3">
                            <small>{item.name}</small>                            
                            <img 
                            src={item.image} 
                            className="img-fluid mx-auto d-block" 
                            alt={item.name}  
                            style={{'cursor':'pointer'}}   
                            onClick={() => props.handleShowBio(item.id)}  
                            />                                                
                        </div>
                        )
                })
                }
            </div>                              
        </> 
    )
}

export default DataItems;
