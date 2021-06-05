import './Main.css';

import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Teachs from './Teachs/Teach';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

function Main() {
  return(
    <>
      <Promo />
      <NavTab />
      <AboutProject />
      <Teachs />
      <AboutMe />
      <Portfolio />
    </>
  )
}
export default Main;
