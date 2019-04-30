import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './sass/main.scss';
import Abovefold from './Abovefold';
import NavMenu from './NavMenu';
import NavToggle from './NavToggle';
import Footer from './Footer';
import Ourstory from './Ourstory';
import Fleece from './Fleece';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: false
    };
  }

  menuToggleHandler = () => {
    this.setState(({ menu }) => ({
      menu: !menu
    }));
  };

  render() {
    const { menu } = this.state;
    return (
      <div className="root" id="root">
        <Route
          path="/"
          exact
          render={() => (
            <div className="app">
              {menu ? (
                <NavMenu click={this.menuToggleHandler} />
              ) : (
                <Abovefold />
              )}
              <NavToggle click={this.menuToggleHandler} checked={menu} />
              {!menu ? <Footer /> : null}
            </div>
          )}
        />
        <Route
          path="/Our-story"
          exact
          render={() => (
            <div className="app">
              {menu ? <NavMenu click={this.menuToggleHandler} /> : <Ourstory />}
              <NavToggle click={this.menuToggleHandler} checked={menu} />
              {!menu ? <Footer /> : null}
            </div>
          )}
        />
        <Route
          path="/fleece"
          exact
          render={() => (
            <div className="app">
              {menu ? <NavMenu click={this.menuToggleHandler} /> : <Fleece />}
              <NavToggle click={this.menuToggleHandler} checked={menu} />
              {!menu ? <Footer /> : null}
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
