import './Portfolio.css';

function Portfolio() {
  return(
    <div className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__projects-list'>
          <li className='portfolio__project'>
            <a href='https://z1zan.github.io/how-to-learn/'>
              <p>Статичный сайт</p>
              <p>&#x2197;</p>
            </a>
          </li>
          <li className='portfolio__project'>
            <a href='https://z1zan.github.io/russian-travel/'>
              <p>Адаптивный сайт</p>
              <p>&#x2197;</p>
            </a>
          </li>
          <li className='portfolio__project'>
            <a href='https://ninhao.nomoredomains.rocks/'>
              <p>Одностраничное приложение</p>
              <p>&#x2197;</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )

}
export default Portfolio;
