import './Register.css';
import logo from "../../images/logo.svg";

import { useState } from "react";

function Register(props) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const[password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
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
  function handleChangeName(e) {
    setName(e.target.value)

    if(!e.target.value) {
      setNameError('Имя не может быть пустым')
      setNameValid(false);
    } else if (e.target.value.length <= 2) {
      setNameError('Имя должно быть больше 2-х символов')
      setNameValid(false);
    } else {
      setNameError('')
      setNameValid(true);
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

    props.onRegister({
      email,
      name,
      password,
    })
  }

  return(
    <form onSubmit={handleSubmit} className='signup _form'>
      <div className='signup__container'>
        <div className='signup__header _form__header'>
          <a className='signup__logo _logo' href='/'>
            <img src={logo} alt='Диплом лого' />
          </a>
          <h1 className='signup__title _form-title'>Добро пожаловать!</h1>
        </div>

        <div className='form__container'>
          <div className='form__form'>
            <label className='form__label form__label_name'>Имя</label>
            <input value={name} onChange={handleChangeName}
                   className={`form__field form__field_email ${nameValid ? '' : '_incorrect'}`}
                   type='text' name='name'
                   required='' minLength='2' maxLength='30' />
            <span className='form__error'>{nameError}</span>
          </div>

          <div className='form__form'>
            <label className='form__label form__label_email'>E-mail</label>
            <input value={email} onChange={handleChangeEmail}
                   className={`form__field form__field_email ${emailValid ? '' : '_incorrect'}`}
                   type='email' name='email'
                   required='' minLength='2' maxLength='30' />
            <span className='form__error'>{emailError}</span>
          </div>

          <div className='form__form'>
            <label className='form__label form__label_password'>Пароль</label>
            <input value={password} onChange={handleChangePassword}
                   className={`form__field form__field_password ${passwordValid ? '' : '_incorrect'}`}
                   type='password' name='password'
                   required='' minLength='8' />
            <span className='form__error'>{passwordError}</span>
          </div>
        </div>
      </div>

      <div className='form__btn'>
        <button disabled={emailValid && nameValid && passwordValid ? false : true}
                className={`form__submit-btn form__submit-btn_inactive ${emailValid && nameValid && passwordValid ? '' : '_unactiveSubmitBtn'} `}
                type='submit'
        >
          Зарегистрироваться
        </button>
        <p className='form__description'>
          Уже зарегистрированы?
          <a className='form__link' href='/signin'>
            Войти
          </a>
        </p>
      </div>

    </form>
  )
}
export default Register;
