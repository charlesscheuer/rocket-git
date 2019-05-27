import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import './sass/main.scss';
import Abovefold from './Abovefold';
import NavMenu from './NavMenu';
import NavToggle from './NavToggle';
import Footer from './Footer';
import Ourstory from './Ourstory';
import Fleece from './Fleece';

ReactGA.initialize('UA-133410946-2', {
  debug: true,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: false
    };
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
