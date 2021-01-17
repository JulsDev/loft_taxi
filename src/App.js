import React from 'react'

import Header from './components/Header';
import Map from './pages/Map';
import Profile from './pages/Profile';

// import logoImg from './assets/images/logo-img.svg';
// import logoText from './assets/images/logo-text.svg';
// import LoginForm from './components/LoginForm';
// import RegistrationForm from './components/RegistrationForm';

const PAGES = {
  map: <Map />,
  profile: <Profile />
}

class App extends React.Component {

  state = { currentPage: 'map' };

  changePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <Header changePage={(page) => this.changePage(page)} />
        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
      // <div className='wrapper'>
      //   <div className='container app-section'>
      //     <div className='mainPage_logoBlock'>
      //       <div className='logo-block'>
      //         <img src={logoImg} alt='loft taxi logo' className='logo-block__img' />
      //         <img src={logoText} alt='loft taxi logo' className='logo-block__text' />
      //       </div>
      //     </div>
      //     <div className='mainPage_formBlock'>
      //       <LoginForm />
      //       <RegistrationForm />
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
