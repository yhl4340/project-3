import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NotFound (){
    console.log('3rd')
    return(
        <div>
            <h2 style={{textAlign:'center'}}>Oh no...</h2>
            <FontAwesomeIcon id='icon' icon="exclamation-circle" size='4x'  />
            <h5><a href='/'style={{textAlign:'center'}}>Go Back</a></h5>
        </div>
    )
}
export default NotFound;

