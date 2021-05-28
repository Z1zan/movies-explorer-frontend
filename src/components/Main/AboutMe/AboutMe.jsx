import './AboutMe.css';
import studentPhoto from '../../../images/student.png';

function AboutMe() {
  return(
    <div className='aboutMe'>
      <div className='aboutMe__container'>
        <div className='aboutMe__title _title'>Студент</div>
        <div className='aboutMe__info-container'>
          <div className='aboutMe__student-info'>
            <h3 className='aboutMe__name'>Виталий</h3>
            <span className='aboutMe__description'>Фронтенд-разработчик, 30 лет</span>
            <p className='aboutMe__story'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <div className='aboutMe__socials'>
            <a href='#' className='aboutMe__social _fb'>Facebook</a>
            <a href='#' className='aboutMe__social _github'>Github</a>
          </div>
        </div>
        <div className='aboutMe__photo-container'>
          <img className='aboutMe__photo' src={studentPhoto} alt='Виталий' />
        </div>
      </div>

    </div>
  )

}

export default AboutMe;
