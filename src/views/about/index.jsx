import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';

class About extends Component{
  constructor(props){
    super(props)
    console.log('About', props);
  }
  render(){
    return(
      
      <div>Hahaha
        <Button type="primary">hdhdh</Button>
      </div>
    )
  }
}
export default connect(
 state=>{
   console.log('AboutState', state)
   return state;
 }
)(About)
