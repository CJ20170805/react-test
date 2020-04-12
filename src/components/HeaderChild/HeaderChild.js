import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class HeaderChild extends Component {
  constructor(props,context) {
    super(props,context);
    console.log('PropsCHild',props,context);
    this.state = { 
      childText: 'childText88888' 
     }
  }
  static propTypes = {
    sex: PropTypes.string.isRequired
  }
  submitText=()=>{
    alert('ChildText:'+ this.state.childText)
    console.log('ChildProps',this.props);
    this.props.reciveData(this.state.childText)
  }
  render() { 
    return (
      <div>
        <hr></hr>
        <p>Child recive props</p>{this.props.children}
        <button onClick={()=>{this.props.reciveData(this.state.childText)}}>ChildButton</button>
        <hr></hr>
        <p>redux test</p>
        <button onClick={()=>{console.log('chiddddd', this.props, this.context);this.setState({infos: this.props.remark})}}>ReduxText</button>
    <h3>{this.state.infos}</h3>
      </div>
    );
  }
}
 
export default connect(
  state=>state,
)(HeaderChild);
