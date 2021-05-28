import './Teachs.css';

function Teachs() {
  return(
    <div className='teachs'>
      <div className='teachs__container'>
        <div className='teachs__title _title'>Технологии</div>
        <h2 className='teachs__subtitle'>7 технологий</h2>
        <p className='teachs__description'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <div className='teach__container'>
          <div className='teach__block'>HTML</div>
          <div className='teach__block'>CSS</div>
          <div className='teach__block'>JS</div>
          <div className='teach__block'>React</div>
          <div className='teach__block'>Git</div>
          <div className='teach__block'>Express</div>
          <div className='teach__block'>mongoDB</div>
        </div>
      </div>
    </div>
  )
}

export default Teachs;
