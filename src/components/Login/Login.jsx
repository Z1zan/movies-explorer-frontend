import './Login.css';
import logo from '../../images/logo.svg';

import {useState} from 'react';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  function handleChangeEmail(e) {
    setEmail(e.target.value)

    const val = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!e.target.value) {
      setEmailError('Email не может быть пустым');
      setEmailValid(false);
    } else if (!val.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);
    }
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)

    if(!e.target.value) {
      setPasswordError('Пароль не может быть пустым')
      setPasswordValid(false);
    } else if (e.target.value.length < 8) {
      setPasswordError('Пароль должен быть больше 8-х символов')
      setPasswordValid(false);
    } else {
      setPasswordError('')
      setPasswordValid(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onLogin({
      email,
      password
    });
  }

  return (
    <form onSubmit={handleSubmit} className='login _form'>
      <div className='signup__container'>
        <div className='login__header _form__header'>
          <a className='login__logo _logo' href='/'>
            <img src={logo} alt='Диплом лого'/>
          </a>
          <h1 className='login__title _form-title'>Рады видеть!</h1>
        </div>

        <div className='form__container'>
          <div className='form__form'>
            <label className='form__label form__label_email'>E-mail</label>
            <input value={email} onChange={handleChangeEmail}
                   className={`form__field form__field_email ${emailValid ? '' : '_incorrect'}`}
                   type='email' name='email'
                   required='' minLength='2' maxLength='30'/>
            <span className='form__error'>{emailError}</span>
          </div>

          <div className='form__form'>
            <label className='form__label form__label_password'>Пароль</label>
            <input value={password} onChange={handleChangePassword}
                   className={`form__field form__field_password ${passwordValid ? '' : '_incorrect'}`}
                   type='password' name='password'
                   required='' minLength='8'/>
            <span className='form__error'>{passwordError}</span>
          </div>
        </div>
      </div>

      <div className='form__btn'>
        <button
          className={`form__submit-btn form__submit-btn_inactive ${emailValid && passwordValid ? '' : '_unactiveSubmitBtn'}`}
          type='submit' disabled={emailValid && passwordValid ? false : true}
        >
          Войти
        </button>
        <p className='form__description'>
          Еще не зарегистрированы?
          <a className='form__link' href='/signup'>
            Регистрация
          </a>
        </p>
      </div>

    </form>
  )
}

export default Login;
