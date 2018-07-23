import React , { Component } from 'react';

import Member from '../../components/member/member';

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
                name:'bashar',
                position:'Head Chef',
                bio:'qewrafewrwfsdgfrgfsdvs ergf ergrgf 3 gsfrdg e gv rgg',
                photoUrl:'./images/1.jpg'
            },
            {
                name:'bashar',
                position:'Head Chef',
                bio:'qewrafewrwfsdgfrgfsdvs ergf ergrgf 3 gsfrdg e gv rgg',
                photoUrl:'./images/1.jpg'
            },
            {
                name:'bashar',
                position:'Head Chef',
                bio:'qewrafewrwfsdgfrgfsdvs ergf ergrgf 3 gsfrdg e gv rgg',
                photoUrl:'./images/1.jpg'
            }
        ]
    }

    render () {
        var member0 = this.state.team[0]
        return (
            

            <div className="Team">
                <Member name={member0.name}
                        position={member0.position}
                        bio={member0.bio} 
                        url={member0.photoUrl}
                        />
            </div>
                
        );
    }
}

export default Team;