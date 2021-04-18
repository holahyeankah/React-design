import {Link} from "react-router-dom";
import './OptionList.css';

function OptionList(){
    return(
        <div className="list-container">
        <div className="App-header">
   <img className="image-style" src="camera.jpg" alt="status" width="45px" height="45px"/>
   <div className="header-list">
     Hiv Blood Draw Test
   </div>
   <div className="header-list">
     A100
   </div>   
   
   </div>
   <div className="App-header">
   <Link to="/react"><img className="image-logo" src="gogle.webp" alt="status" width="45px" height="45px"/></Link>
   <div className="header-list">
     TB Radiology XRay
   </div>
   <div className="header-list">
     A30
   </div>
   </div>
   <div className="App-header">
   <img className="image-style" src="facebook.jpeg" alt="status" width="40px" height="35px"/>
   <div className="header-list">
    Blood Pressure Check
   </div>
   <div className="header-list">
     A10
   </div>
   </div>
   <div className="empty-field">
   <div style={{color:"white", fontSize:"30px"}}>.

</div>
  </div>
  <div className="images">
    <div>
    <Link to="/message"><img className="image-" src="msg.png" alt="status" width="50px" height="50px"/></Link>
   <Link to="/google"> <img className="image-style" src="gogle.webp" alt="status" width="50px" height="50px"/></Link>
    <Link to="/google"> <img className="image-logo" src="gogle-2.png" alt="status" width="100px" height="55px"/></Link>
    <img className="image-logo" src="max.png" alt="status" width="65px" height="50px"/>
    <Link to="/react"><img className="image-logo" src="nig.jpeg" alt="status" width="55px" height="55px"/></Link>
    <Link to="/yellow"> <img  src="yellow.png" alt="status" width="55px" height="55px"/></Link>
    </div>
  </div>


   </div>
  

    )

}

export default OptionList