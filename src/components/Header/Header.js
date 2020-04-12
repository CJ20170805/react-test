import React, { Component } from 'react';
import './header.less';
import HeaderChild from  '../HeaderChild/HeaderChild';
import { createRef } from 'react';
import {connect} from 'react-redux';
import {setInputData} from '@/store/action';
import PropTypes from 'prop-types';

let inputRef = createRef();

class Header extends Component {
  constructor(props,context){
    super(props,context)
      

    this.state = {
      text: 'text 8888',
      inputText: ''
    }

    console.log('Props', props, this.state,context);
    
    this.buttonClick = this.buttonClick.bind(this);
  }
  static propTypes = {
    setInputData: PropTypes.func.isRequired
  }
  buttonClick(){
    this.setState({
      text: new Date().toLocaleTimeString()
    });
    alert('hahahaa');
  }
  reciveData=(data)=>{
    this.setState({
      childText: data
    })
  }
  changeStoreData=()=>{
     console.log('Haaa');
     //store.dispatch({type: 'f1',oob:{aaa: new Date().toTimeString()}});
  }
  setReduxData=()=>{

    console.log('RREsf',inputRef ,this.props);
    this.props.setInputData({sex: 'girl', remark: inputRef.current.value})
    // let data = this.refs.input01.value;
    // this.setState({
    //    inputText: data
    // })
   //store.dispatch({type: 'f1',payload: {inputValue: inputRef.current.value}})
    // alert(data)
  }
  render(){
    return(
      <div className="header-wrapper">
         <h1>hahah{this.state.text}</h1>
         <button onClick={this.buttonClick}>CLICKME</button>
         <h2>ChildComponentsText: {this.state.childText}</h2>

         <button onClick={this.changeStoreData}>ChangeStoreData</button>
         <hr/>
        <input type="text" ref={inputRef} /> <button onClick={this.setReduxData}>setReduxData</button>
         <hr/>
         <hr/>
         <HeaderChild reciveData={this.reciveData}>
           <h1 position="sky" style={{color: 'red'}}>HAHAHAHHA</h1>
         </HeaderChild>
      </div>
      
    )
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    setInputData
  }
}

const mapStateToProps = state=>{
  console.log('Mapstate', state);
  return{
    hahaha: '666',
    ...state
  }
}

export default connect(mapStateToProps,{setInputData})(Header)