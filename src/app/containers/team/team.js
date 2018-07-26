import React from 'react';

import Member from '../../components/member/member';

import * as data from '../../../app/models/team.json';
import './team.css';
const Team = () => {

 var members =  data.map((res, index) => (
    <Member key={index} member={res} ></Member>
 ))
    
       
        return (
            

            <div className="Team">
                  {/* {members}               */}
            </div>
                
        );
    
}

export default Team;