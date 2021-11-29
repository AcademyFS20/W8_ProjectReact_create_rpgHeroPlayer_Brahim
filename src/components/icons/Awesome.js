import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Awesome(props) {
    return (
        <>
                 <FontAwesomeIcon icon={props.name} />

        </>
    )
}

export default Awesome;