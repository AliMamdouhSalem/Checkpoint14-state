import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state= {
    fullName: "Catto",
    bio:"meow mewo moew meow. Meow",
    imgSrc:"/catto.jfif",
    profession:"software developer cat",
    shows:false,
    time:0
  };
  componentDidMount(){
    setInterval(() => {
      var timex=(this.state.time);
      timex+=1
      this.setState({time:timex});
    }, 1000);
  };
  handleClick=()=>{
    if(this.state.shows==false){
      this.setState({shows:true});
    }
    else{
      this.setState({shows:false});
    }
  }
  timeAdd=()=>{
    if(this.state.shows==false){
      
    }
    else{
      this.setState({shows:false});
    }
  }
  render(){ 
    if((this.state.shows)==true){
      return(
      <div style={{textAlign:'center'}}>
        <div>
          <img src={this.state.imgSrc} alt="catto"></img>
        </div>
        <div>
          <span>{this.state.fullName}</span>
        </div>
        <div>
          <span>{this.state.bio}</span>
        </div>
        <div>
          <span>{this.state.profession}</span>
        </div>
        <div>
        <button onClick={this.handleClick}> Hide</button>
        </div>
        <div>
          <span>{this.state.time}</span>
        </div>
      </div>
      )}
    else{
      return( 
        <div style={{textAlign:'center'}}>
        <div>
        <button onClick={this.handleClick}> Show</button>
        </div>
        <div>
          <span>{this.state.time}</span>
        </div>
        </div>
        
      )}
    };
}

export default App;
