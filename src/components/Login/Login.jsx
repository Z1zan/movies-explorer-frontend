import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
  return(
    <div className='login _form'>
      <div className='signup__container'>
        <div className='login__header'>
          <a className='login__logo _logo' href='/'>
            <img src={logo} alt='Диплом лого' />
          </a>
          <h1 className='login__title _form-title'>Рады видеть!</h1>
        </div>

        <div className='form__container'>
          <div className='form__form'>
            <label className='form__label form__label_email'>E-mail</label>
            <input className='form__field form__field_email' type='email' name='email'
                   required='' minLength='2' maxLength='30' />
            <span className='form__error'>Где email Лебовский?</span>
          </div>

          <div className='form__form'>
            <label className='form__label form__label_password'>Пароль</label>
            <input className='form__field form__field_password' type='password' name='password'
                   required='' minLength='8' />
            <span className='form__error'></span>
          </div>
        </div>
      </div>

      <div className='form__btn'>
        <button className='form__submit-btn form__submit-btn_inactive' type='submit'>
          Войти
        </button>
        <p className='form__description'>
          Еще не зарегистрированы?
          <a className='form__link' href='/signup'>
            Регистрация
          </a>
        </p>
      </div>

    </div>
  )
}
export default Login;
