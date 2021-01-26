import React from 'react'

export function LoginForm(props) {
  const { changePage, setLoginStatus } = props;

  function handleSubmitLogin(e) {
    e.preventDefault();
    changePage('map');
  }

  return (
    <form className='form__wrapper'>
      <h3 className='form__title'>Войти</h3>
      <div className='form__input-row'>
        <label htmlFor='email' className='form__label'>Email</label>
        <input
          id='email'
          type='email'
          name='email'
          size='28'
          placeholder='mail@mail.ru'
          className='form__input'
        />
      </div>
      <div className='form__input-row'>
        <label htmlFor='password' className='form__label'>Пароль</label>
        <input
          id='password'
          type='password'
          name='password'
          size='28'
          placeholder='********'
          className='form__input form__input--last'
        />
        <p className='form__question'>Забыли пароль?</p>
      </div>
      <button
        type='submit'
        onClick={handleSubmitLogin}
        className='form__button'
      >
        Войти
      </button>
      <div className="form-notice__block">
        <p>Новый пользователь?</p>
        <button
          className='form-notice'
          onClick={() => setLoginStatus(false)}
        >
          Регистрация
        </button>
      </div>
    </form>
  )
}
