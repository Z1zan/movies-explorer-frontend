import './Register.css';
import logo from "../../images/logo.svg";

import { useState } from "react";

function Register(props) {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const[password, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleChangeName(e) {
    setName(e.target.value)
  }
  function handleChangePassword(e) {
    setPassword(e.target.value)
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
            <input value={name} onChange={handleChangeName} className='form__field form__field_email' type='text' name='name'
                   required='' minLength='2' maxLength='30' />
            <span className='form__error'></span>
          </div>

          <div className='form__form'>
            <label className='form__label form__label_email'>E-mail</label>
            <input value={email} onChange={handleChangeEmail} className='form__field form__field_email' type='email' name='email'
                   required='' minLength='2' maxLength='30' />
            <span className='form__error'></span>
          </div>

          <div className='form__form'>
            <label className='form__label form__label_password'>Пароль</label>
            <input value={password} onChange={handleChangePassword} className='form__field form__field_password _incorrect' type='password' name='password'
                   required='' minLength='8' />
            <span className='form__error'>Что-то пошло не так...</span>
          </div>
        </div>
      </div>

      <div className='form__btn'>
        <button className='form__submit-btn form__submit-btn_inactive' type='submit'>
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
