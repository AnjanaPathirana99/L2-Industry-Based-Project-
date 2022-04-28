import React from 'react';

const ViewMessage = (props) => {
    const { message } = props;
    return ( 
    <div className="col" id="ViewMessageBox">
    <h1>View message</h1>
    
    <p>{message}</p>
    
    </div> );
}
 
export default ViewMessage;