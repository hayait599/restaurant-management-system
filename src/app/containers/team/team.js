import React  from 'react';

import Member from '../../components/member/member';

import * as data from '../../../app/models/team.json';
import './team.css';
const Team = () => {


    
       
        return (
            

            <div className="Team">
            
               {
                   data.map((res, index) => (
                      <Member key={index} member={res} />
                   ))
               }
                
            </div>
                
        );
    
}

export default Team;