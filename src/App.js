import React, {Component} from 'react';
import './App.css';
import FetchContacts from './Components/FetchContacts';

class App extends Component {


  render(){
    return (
      <div>
        {<FetchContacts />}
      </div>
    );
  }
}

export default App;
