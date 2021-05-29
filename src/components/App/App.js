import './App.css';
import {BrowserRouter, Switch, Route, Redirect, useHistory} from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';


import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function App() {
  return (
      <div className="page">
        <Switch>

          <Route path='/profile'>
            <Header
              place='profile'
            />
            <Profile />
          </Route>

          <Route path='/signup'>
            <Register />
          </Route>

          <Route path='/signin'>
            <Login />
          </Route>

          <Route path='/saved-movies'>
            <Header
              place='saved-movies'
            />
            <SavedMovies />
            <Footer />
          </Route>

          <Route path='/movies'>
            <Header
              place='movies'
            />
            <Movies />
            <Footer />
          </Route>

          <Route path='/'>
            <section className='landing'>
              <Header
                place='landing'
              />
              <Main />
              <Footer />
            </section>

          </Route>

        </Switch>
      </div>
  );
}

export default App;
