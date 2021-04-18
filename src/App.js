import React, { Component} from 'react';
import OptionList from './components/OptionList';
import {Link} from 'react-router-dom'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:false
  }
  
  }
  handleClick=()=>{
   this.setState({isLoading: true});

    setTimeout(()=>{
      this.setState({isLoading:false});
      alert("Sent successfully")

  },2000)
  }

  handleReceive=()=>{
    alert("Received")
  }
  

render(){
  const {isLoading}=this.state;

  if(isLoading){
    return <h2>Sending......</h2>
  }
  
  return (
    <div>
    <div className="App">   
 <img className="image-header" src="status.png" alt="status" width="450px" height="60px"/>

  <div className="image-container">
  <Link to="/message"> <img className="image-red" src="msg.png" alt="status" width="50px" height="45px"/></Link>
  <h6 className="header">ribbon</h6> 
  <Link to="/redcross"><img className="image-blue" src="redcross.png" alt="status" width="80px" height="50px"/></Link>
  <Link to="/blue"><img  src="blue.png" alt="status" width="45px" height="45px"/></Link>
 <Link to="/yellow"> <img  src="yellow.png" alt="status" width="45px" height="45px"/></Link>
  </div>     
    <div className="header-option">
   <div className="logo-1">
     AFYA
      <p style={{color:"white", marginBottom:"1px",fontWeight:"bold"}}>143.00</p>
      <p style={{color:"white",marginTop:"1px", fontWeight:"bold"}}>Balance</p>
   </div>
    <div style={{width:"1px", background:"white"}}>

    </div>
   <div className="logo-2">
     ZAR
     <p style={{color:"white",marginBottom:"1px", fontWeight:"bold"}}>R21.00</p>
     <p style={{color:"white",marginTop:"1px", fontWeight:"bold"}}>Equivalent</p>
   </div>
   </div> 
   <div className="option">
     <p className="select">Select Currency:</p>
   </div>
   <div className="value">
    <div className="afya">AFYA</div> 
     <div  className="digit">0.00000001</div>
   </div>
   <div className="button">
     <button onClick={this.handleClick}className="button-send" >SEND</button>
    
     <button onClick={this.handleReceive}className="button-receive" >RECEIVE</button>
   </div>
   <div className="option">
     <p className="select">Recent Activity</p>

   </div>
   <OptionList/>
   </div>
   
   </div>
  
  
    
    
  );
}
}

export default App;
