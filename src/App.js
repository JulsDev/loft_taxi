import React from 'react'

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Map } from './pages/Map';
import { Profile } from './pages/Profile';

class App extends React.Component {

  state = { currentPage: 'home' };

  changePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <Header changePage={(page) => this.changePage(page)} />
        <main>
          <section>
            {{
              home: <Home changePage={(page) => this.changePage(page)} />,
              map: <Map />,
              profile: <Profile />
            }[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;
