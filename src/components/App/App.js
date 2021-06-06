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

import ProtectedRoute from '../../utils/ProtectedRoute';
import NotFound from '../NotFound/NotFound';

import api from '../../utils/MainApi';
import apiMovies from '../../utils/MoviesApi';

import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const localStorageMovies = JSON.parse(localStorage.getItem('movies'));

  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (localStorage.loggedIn === 'true') {
      api
        .getUserInfo()
        .then((data) => {
          setLoggedIn(true);
          setCurrentUser(data);
          history.push('./movies');
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

  function handleRegister(item) {
    api
      .registration(item)
      .then(() => {
        handleLogin(item);
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
        localStorage.clear('movies');
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

// Получение всех фильмов
  useEffect(() => {
    if (localStorage.loggedIn === 'true' && !localStorage.movies) {
      apiMovies
        .getMovies()
        .then((data) => {
          localStorage.setItem('movies', JSON.stringify(data))
          setMovies(data);
        })
        .catch((err) => {
          console.log('ошибка', err);
        })
    }
  }, [])
// Получение сохранненых фильмов
  useEffect(() => {
    if (localStorage.loggedIn === 'true') {
      api
        .getSavedMovies()
        .then(({data}) => {
          setSavedMovies(data);
        })
        .catch((err) => console.log(err))
    }
  }, [])
//сохранение фильма
  function handleSaveMovie(movie) {
    if (movie.nameRU !== savedMovies.some((item) => item.nameRU)) {
      api
        .saveMovie(movie)
        .then(({data}) => {
          setSavedMovies([data, ...savedMovies]);
        })
        .catch((err) => console.log(err));
    }
  }
//удаление фильма из избраного
  function deleteSavedMovie(movieId) {
    api
      .deleteMovie(movieId)
      .then(() => {
        const newSavedList = savedMovies.filter((item) => item._id !== movieId);
        setSavedMovies(newSavedList);
      })
      .catch((err) => console.log(err));
  };

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

          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            place='saved-movies'
            savedMovies={savedMovies}
            movies={movies}
            deleteSavedMovie={deleteSavedMovie}
          />

          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
            place='movies'
            movies={movies}
            savedMovies={savedMovies}
            handleSaveMovie={handleSaveMovie}
            deleteSavedMovie={deleteSavedMovie}
            localStorageMovies={localStorageMovies}
          />

          <Route path='/signup'>
            <Register onRegister={handleRegister}/>
          </Route>

          <Route path='/signin'>
            <Login onLogin={handleLogin}/>
          </Route>

          <Route path='/landing'>
            <section className='landing'>
              <Header
                loggedIn={loggedIn}
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
