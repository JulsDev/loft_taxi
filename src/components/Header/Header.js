import React from 'react'

import styles from './Header.module.scss';
import logoImg from '../../assets/images/logo-img.svg';
import logoText from '../../assets/images/logo-text.svg';

export class Header extends React.Component {

  navigateTo = (page) => {
    this.props.changePage(page);
  };

  render() {
    return (
      <>
        <header className={styles.headerWrapper}>
          <div className={styles.headerContent}>
            <button
              className='nav__button'
              onClick={() => this.navigateTo('home')}
            >
              <div className={styles.logo}>
                <img src={logoImg} alt='loft taxi logo' className={styles.logoImg} />
                <img src={logoText} alt='loft taxi logo' />
              </div>
            </button>
            <nav className={styles.navigation}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <button
                    className={styles.navButton}
                    onClick={() => this.navigateTo('map')}
                  >
                    Карта
                  </button>
                </li>
                <li className={styles.navItem}>
                  <button
                    className={styles.navButton}
                    onClick={() => this.navigateTo('profile')}
                  >
                    Профиль
                  </button>
                </li>
                <li className={styles.navItem}>
                  <button
                    className={styles.navButton}
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
