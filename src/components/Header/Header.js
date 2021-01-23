import React from 'react'

import logoImg from '../../assets/images/logo-img.svg';
import logoText from '../../assets/images/logo-text.svg';

export class Header extends React.Component {

  navigateTo = (page) => {
    this.props.changePage(page);
  };

  render() {
    return (
      <>
        <header className='header__wrapper'>
          <div className='header__content'>
            <button
              className='nav__button'
              onClick={() => this.navigateTo('home')}
            >
              <div className='logo'>
                <img src={logoImg} alt='loft taxi logo' className='logo__img' />
                <img src={logoText} alt='loft taxi logo' />
              </div>
            </button>
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
      </>
    )
  }
}
