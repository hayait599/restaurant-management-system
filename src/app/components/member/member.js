import React from 'react';

import './member.css';
const member = (props) => (

    <div className="card" >
  <img className="card-img-top" src={props.member.photoUrl} alt=""/>
  <div className="card-body">
    <p className="card-title"><strong>{props.member.name} - {props.member.position}</strong></p>
    <p className="card-text">{props.member.bio}</p>
  </div>
</div>

)

export default member;