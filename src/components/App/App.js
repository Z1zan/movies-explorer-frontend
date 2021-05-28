import './App.css';
import {BrowserRouter, Switch, Route, Redirect, useHistory} from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
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
            <Header />
            <Profile />
          </Route>

          <Route path='/signup'>
            <Register />
          </Route>

          <Route path='/signin'>
            <Login />
          </Route>

          <Route path='/saved-movies'>
            <Header />
            <Navigation />
            <SavedMovies />
            <Footer />
          </Route>

          <Route path='/movies'>
            <Header />
            <Navigation />
            <Movies />
            <Footer />
          </Route>

          <Route path='/'>
            <section className='main'>
              <Header />
              <Navigation />
              <Main />
              <Footer />
            </section>

          </Route>

        </Switch>
      </div>
  );
}

export default App;
