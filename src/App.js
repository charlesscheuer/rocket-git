import React, { Component } from 'react';
import './sass/main.scss';
import Abovefold from './Abovefold';
import NavMenu from './NavMenu';
import NavToggle from './NavToggle';
import Footer from './Footer';
import Ourstory from './Ourstory';
import Fleece from './Fleece';
import { Route} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      menu: false,
      ctrSub: ''
    }
  }
  
  // check backend connection
  // componentDidMount() {
  //     fetch('http://localhost:3000')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }

  menuToggleHandler = () => {
    this.setState(({ menu }) => ({
      menu: !menu
  }));
}

  render() {
    return (
      <div className="root" id="root">
      <Route path='/' exact render={() => <div className="app">
      {this.state.menu ? <NavMenu click={this.menuToggleHandler}/> : 
      <Abovefold /> }
      <NavToggle click={this.menuToggleHandler} checked={this.state.menu}/>
      {!this.state.menu ? <Footer /> : null }
      </div>}/>
      <Route path='/Our-story' exact render={() => <div className="app">
      {this.state.menu ? <NavMenu click={this.menuToggleHandler}/> : 
      <Ourstory /> }
      <NavToggle click={this.menuToggleHandler} checked={this.state.menu}/>
      {!this.state.menu ? <Footer /> : null }
      </div>}/>
      <Route path='/fleece' exact render={() => <div className="app">
      {this.state.menu ? <NavMenu click={this.menuToggleHandler}/> : 
      <Fleece /> }
      <NavToggle click={this.menuToggleHandler} checked={this.state.menu}/>
      {!this.state.menu ? <Footer /> : null }
      </div>}/>
      </div>
    );
  }
}

export default App;
