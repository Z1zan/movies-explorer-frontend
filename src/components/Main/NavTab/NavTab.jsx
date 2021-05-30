import './NavTab.css'

function NavTab() {
  return(
    <ul className='navTab'>
      <li>
        <a className='navTab__link' href='#aboutProject'>О Проекте</a>
      </li>
      <li>
        <a className='navTab__link' href='#teachs'>Технологии</a>
      </li>
      <li>
        <a className='navTab__link' href='#aboutMe'>Студент</a>
      </li>
    </ul>
  )
}
export default NavTab;
