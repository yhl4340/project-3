import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NotFound (){
    return(
        <div>
            <h2 style={{textAlign:'center'}}>Oh no...</h2>
            <FontAwesomeIcon icon="exclamation-circle" size='4x' />
            <h5><a href='/'>Go Back</a></h5>
        </div>
    )
}
export default NotFound;

{/* <i class="fas fa-exclamation-circle"></i> */}