import React from 'react';


const DataItems = (props) =>{    
    ///console.log(props.search.items);
    return(
        <>            
            <div className="row mt-5">
                {
                props.items.map(item => { 
                    return (
                        <div key={item.id} className="col">
                            <small>{item.name}</small>
                            <img src={item.image} className="img-fluid mx-auto d-block" alt={item.name}></img>                            
                        </div>
                        )
                })
                }
            </div>                   
        </> 
    )
}

export default DataItems;
