import './App.css';
import { Switch, Route } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="page">
      <Switch>

        <Route path='/profile'>
          <Header
            place='profile'
          />
          <Profile/>
        </Route>

        <Route path='/signup'>
          <Register/>
        </Route>

        <Route path='/signin'>
          <Login/>
        </Route>

        <Route path='/saved-movies'>
          <Header
            place='saved-movies'
          />
          <SavedMovies
            place='saved-movies'
          />
          <Footer/>
        </Route>

        <Route path='/movies'>
          <Header
            place='movies'
          />
          <Movies
            place='movies'
          />
          <Footer/>
        </Route>

        <Route exact path='/'>
          <section className='landing'>
            <Header
              place='landing'
            />
            <Main/>
            <Footer/>
          </section>
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
