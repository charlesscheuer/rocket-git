import React, { Component } from 'react';
import './sass/main.scss';
import Sourcepage from './Sourcepage';
import NavMenu from './NavMenu';
import NavToggle from './NavToggle';
import Footer from './Footer';


class App extends Component {

  constructor() {
    super();
    this.state = {
      menu: false,
      route: 'Abovefold'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
    this.menuToggleHandler();
  }

  ctaRouteChange = (route) => {
    this.setState({route: route});
  }

  menuToggleHandler = () => {
    this.setState(({ menu }) => ({
      menu: !menu
  }));
}

  render() {
    return (
      <body className="App">
      {this.state.menu ? 
        <NavMenu onRouteChange={this.onRouteChange} /> : 
      <Sourcepage route={this.state.route} ctaRouteChange={this.ctaRouteChange}/>
      }
      <NavToggle click={this.menuToggleHandler}/>
      {!this.state.menu ? <Footer ctaRouteChange={this.ctaRouteChange}/> : null }
  </body>
    );
  }
}

export default App;
