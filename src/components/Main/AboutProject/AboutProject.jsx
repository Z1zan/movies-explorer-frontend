import './AboutProject.css'

function AboutProject() {
  return(
    <div className='aboutProject'>
      <div className='aboutProject__container'>
        <h2 className='aboutProject__title _title'>О проекте</h2>
        <div className='aboutProject__info'>
          <div className='aboutProject__description'>
            <h3>Дипломный проект включал 5 этапов</h3>
            <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='aboutProject__description'>
            <h3>На выполнение диплома ушло 5 недель</h3>
            <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='aboutProject__time-description'>
          <div className='aboutProject__time-block'>
            <div className='time-zone__time time-zone__time_backend'>
              <span>1 неделя</span>
            </div>
            <span className='time-zone__title'>Back-end</span>
          </div>
          <div className='aboutProject__time-block'>
            <div className='time-zone__time time-zone__time_frontend'>
              <span>4 недели</span>
            </div>
            <span className='time-zone__title'>Front-end</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutProject;
