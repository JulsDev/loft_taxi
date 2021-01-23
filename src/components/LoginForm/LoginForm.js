import React from 'react'

export function LoginForm() {

  function handleSubmitLogin() {
    console.log('handleSubmitLogin');
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
      <p>Новый пользователь? <span className='form__notice'>Регистрация</span></p>
    </form>
  )
}
