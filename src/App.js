import React from 'react'

import logoImg from './assets/images/logo-img.svg';
import logoText from './assets/images/logo-text.svg';

import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className='wrapper'>
      <div className='container app-section'>
        <div className='mainPage_logoBlock'>
          <div className='logo-block'>
            <img src={logoImg} alt='loft taxi logo' className='logo-block__img' />
            <img src={logoText} alt='loft taxi logo' className='logo-block__text' />
          </div>
        </div>
        <div className='mainPage_formBlock'>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
