import React from 'react'

import logoImg from '../../assets/images/logo-img.svg';
import logoText from '../../assets/images/logo-text.svg';

import Map from '../Map';
import Profile from '../Profile';

const PAGES = {
  map: <Map />,
  profile: <Profile />
}

class Home extends React.Component {

  state = { currentPage: 'map' };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <header className='header__wrapper'>
          <div className='header__content'>
            <div className='logo'>
              <img src={logoImg} alt='loft taxi logo' className='logo__img' />
              <img src={logoText} alt='loft taxi logo' />
            </div>
            <nav className='navigation'>
              <ul className='nav__list'>
                <li className='nav__item'>
                  <button
                    className='nav__button'
                    onClick={() => this.navigateTo('map')}
                  >
                    Карта
                  </button>
                </li>
                <li className='nav__item'>
                  <button
                    className='nav__button'
                    onClick={() => this.navigateTo('profile')}
                  >
                    Профиль
                  </button>
                </li>
                <li className='nav__item'>
                  <button
                    className='nav__button'
                    onClick={() => {}}
                  >
                    Выйти
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    )
  }
}

export default Home;
