import React ,{Component}  from 'react';
import Member from '../../components/member/member';
import { connect } from 'react-redux'; 
import { getTeam } from './../../actions/index';
import './team.css';

class Team  extends Component {

    state= {
        members:[]
    }
    
  
    componentDidMount () {
     
     
        this.props.getTeam()
    }
    
    render(){
        const  { t } = this.props;
       
       
        if (t != null) {
          if (t.length > 0) {

   
            var members =  t.map((res, index) => (
               <Member key={index} member={res} ></Member>
            ));
          }
        }
 
        return (
            <div className="Team">
                  {members}              
            </div>     
        );
    }
    
}
const mapStateToProps = (state) =>{
    return {
        t: state.teamState
    }
}
export default connect(mapStateToProps, { getTeam })(Team);


