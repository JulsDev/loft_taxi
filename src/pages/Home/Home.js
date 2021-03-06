import React, { useState } from 'react'

import styles from './Home.module.scss';
import logoImg from '../../assets/images/logo-img.svg';
import logoText from '../../assets/images/logo-text.svg';

import { LoginForm } from '../../components/LoginForm';
import { RegistrationForm } from '../../components/RegistrationForm';

export function Home(props) {
  const { changePage } = props;
  const [isLoginStatus, setLoginStatus] = useState(true);

  return (
    <div className='wrapper'>
      <div className='container app-section'>
        <div className={styles.logoBlock}>
          <div className={styles.imgBlock}>
            <img src={logoImg} alt='loft taxi logo' className={styles.imgBlock__img} />
            <img src={logoText} alt='loft taxi logo' className={styles.imgBlock__text} />
          </div>
        </div>
        <div className={styles.formBlock}>
          {isLoginStatus 
            ? <LoginForm changePage={changePage} setLoginStatus={setLoginStatus} />
            : <RegistrationForm changePage={changePage} setLoginStatus={setLoginStatus} />
          }
        </div>
      </div>
    </div>
  )
}
