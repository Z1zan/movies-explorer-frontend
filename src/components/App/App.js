import './App.css';
import {Switch, Route, useHistory, Redirect} from 'react-router-dom';
import {useState, useEffect} from 'react';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

import ProtectedRoute from "../../utils/ProtectedRoute";
import NotFound from '../NotFound/NotFound';

import api from "../../utils/MainApi";

import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  function handleRegister(item) {
    api
      .registration(item)
      .then((data) => {
        history.push('./signin');
      })
      .catch((err) => {
        console.log('Ошибка регистрации', err);
      })
  }

  function handleLogin(item) {
    api
      .login(item)
      .then(() => {
        localStorage.setItem('loggedIn', 'true');
        setUserEmail(item.email)
        setUserName(item.name)
        setLoggedIn(true);
        history.push('./movies');
      })
      .then(() => {
        api
          .getUserInfo()
          .then((data) => {
            setCurrentUser(data);
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleSignOut() {
    api
      .signOut()
      .then(() => {
        localStorage.setItem('loggedIn', 'false');
        setLoggedIn(false);
        history.push('./');
      })
      .catch((err) => console.log(err))
  }

  function handleChangeProfile(data) {
    api
      .setUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
      })
      .then(() => {
        api.getUserInfo()
          .then((data) => {
            setCurrentUser(data);
          })
          .catch((err) => console.log(err))
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    if (localStorage.loggedIn === 'true') {
      api
        .getUserInfo()
        .then((data) => {
          setLoggedIn(true);
          setCurrentUser(data);
          history.push('./profile');
        })
        .catch((err) => {
          console.log('НЕ ЗАЛОГЕНЕН', err);
        })
    }
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>

          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            place='profile'
            name={userName}
            email={userEmail}
            onChangeProfile={handleChangeProfile}
            handleSignOut={handleSignOut}
          />
          {/*  <Header*/}
          {/*    place='profile'*/}
          {/*  />*/}
          {/*  <Profile/>*/}
          {/*</ProtectedRoute>*/}

          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            place='saved-movies'
          />
          {/*  <Header*/}
          {/*    place='saved-movies'*/}
          {/*  />*/}
          {/*  <SavedMovies*/}
          {/*    place='saved-movies'*/}
          {/*  />*/}
          {/*  <Footer/>*/}
          {/*</ProtectedRoute>*/}

          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
            place='movies'
          />
          {/*  <Header*/}
          {/*    place='movies'*/}
          {/*  />*/}
          {/*  <Movies*/}
          {/*    place='movies'*/}
          {/*  />*/}
          {/*  <Footer/>*/}
          {/*</ProtectedRoute>*/}

          <Route path='/signup'>
            <Register onRegister={handleRegister}/>
          </Route>

          <Route path='/signin'>
            <Login onLogin={handleLogin}/>
          </Route>

          <Route path='/landing'>
            <section className='landing'>
              <Header
                place='landing'
              />
              <Main/>
              <Footer/>
            </section>
          </Route>

          <Route exact path='/'>
            {loggedIn ? <Redirect to='/movies'/> : <Redirect to='/landing'/>}
          </Route>

          <Route path='*'>
            <NotFound/>
          </Route>

        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
