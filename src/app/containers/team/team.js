import React , { Component } from 'react';

import Member from '../../components/member/member';

import './team.css';
class Team extends Component {

    state = {
        team:[
            {
                name:'bashar',
                position:'Head Chef',
                bio:'qewrafewrwfsdgfrgfsdvs ergf ergrgf 3 gsfrdg e gv rgg',
                photoUrl:'./images/1.jpg'
            },
            {
                name:'bashar2',
                position:'Head Chef',
                bio:'qewrafewrwfsdgfrgfsdvs ergf ergrgf 3 gsfrdg e gv rgg',
                photoUrl:'./images/1.jpg'
            },
            {
                name:'bashar3',
                position:'Head Chef',
                bio:'qewrafewrwfsdgfrgfsdvs ergf ergrgf 3 gsfrdg e gv rgg',
                photoUrl:'./images/1.jpg'
            },
            {
                name:'bashar4',
                position:'Head Chef',
                bio:'qewrafewrwfsdgfrgfsdvs ergf ergrgf 3 gsfrdg e gv rgg',
                photoUrl:'./images/1.jpg'
            }
        ]
    }

    render () {
       
        return (
            

            <div className="Team">
            
               {
                   this.state.team.map((res, index) => (
                      <Member key={index} member={res} />
                   ))
               }
                
            </div>
                
        );
    }
}

export default Team;