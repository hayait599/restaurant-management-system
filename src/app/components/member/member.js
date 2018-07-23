import React from 'react';

const member = (props) => (

    <div>
        <h5>{props.name}</h5> <small>{props.position}</small>
        <image src={props.url} alt="No photo"></image>
        <p>{props.bio}</p>
    </div>

)

export default member;