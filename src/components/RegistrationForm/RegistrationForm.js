import React from 'react'

export function RegistrationForm(props) {
  const { changePage, setLoginStatus } = props;

  function handleSubmitRegistration(e) {
    e.preventDefault();
    changePage('map');
  }

  return (
    <form className='form__wrapper'>
      <h3 className='form__title'>Регистрация</h3>
      <div className='form__input-row'>
        <label htmlFor='email' className='form__label'>Email*</label>
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
        <label htmlFor='fullName' className='form__label'>Как вас зовут?*</label>
        <input
          id='fullName'
          type='text'
          name='fullName'
          size='38'
          placeholder='Петр Александрович'
          className='form__input'
        />
      </div>
      <div className='form__input-row'>
        <label htmlFor='password' className='form__label'>Придумайте пароль*</label>
        <input
          id='password'
          type='password'
          name='password'
          size='28'
          placeholder='********'
          className='form__input form__input--last'
        />
      </div>
      <button
        type='submit'
        onClick={handleSubmitRegistration}
        className='form__button'
      >
        Зарегистрироваться
      </button>
      <div className="form-notice__block">
        <p>Уже зарегестрированны?</p>
        <button
          className='form-notice'
          onClick={() => setLoginStatus(true)}
        >
          Войти
        </button>
      </div>
    </form>
  )
}
