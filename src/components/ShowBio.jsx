import React from 'react';

const ShowBio = (props) =>{    
    return(
        <div 
        className="modal fade show"
        style={{
            display: 'block'
          }}
        >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={props.handleCloseModal}
                        >
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div 
                        align="justify" 
                        className="modal-body" 
                        style={{'white-space': 'pre-line'}}
                    >
                        {props.body}       
                    </div>      
                </div>
            </div>
        </div>        
        )
    }

export default ShowBio;