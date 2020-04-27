import React ,{ Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  state ={
    active:false
  }

  

  popUp =() =>{
    this.setState({
      active:!this.state.active
      
    })
    
    
  }

 
 

render(){
  const isActive = this.state.active ? 'active' : '';
  return (
    <div className="App">
      
      <button className="trigger" onClick={this.popUp}>Trigger</button>
      <div className={`modal ${isActive}`}>
      <span className="confirm">Are you sure ?</span>
      <div className="btnContainer">
      <button>Delete</button>
      <button>Cancel</button>
      </div>
      </div>
    </div>
  );
}
}

export default App;
