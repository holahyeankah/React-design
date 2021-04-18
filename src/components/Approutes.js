import React, {Component} from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import App from '../App';
import Google from './Google';
import Message from './message';
import RedCross from './RedCross';
import BlueIcon from './BlueIcon';
import YellowIcon from './YellowIcon';
import ReactIcon from './ReactIcon'

export const history=createBrowserHistory();


class Approutes extends Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }
 render(){
  return (
      
    <Router history={history}>
      
     <Switch>
<Route exact path="/" component={App}/>
<Route exact path= "/message" component={Message}/>
<Route exact path="/google" component={Google}/>
<Route exact path="/yellow" component={YellowIcon}/>
<Route exact path="/redcross" component={RedCross}/>
<Route exact path="/blue" component={BlueIcon}/>
<Route exact path="/react" component={ReactIcon}/>

     </Switch>
       
    </Router>
   
  );

 }
  
}


export default Approutes;
