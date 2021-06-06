class MainApi {
  constructor({baseUrl}) {
    this.baseUrl = baseUrl;
  }

  registration({name, email, password}) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка: ${res.status}`)
      )
  }

  login({email, password}) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        password,
        email
      })
    })
      .then((res) => {
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка: ${res.status}`)
      })
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка получения профиля: ${res.status}`)
      )
  }

  setUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка изменения профиля: ${res.status}`)
      )
  }

  signOut() {
    return fetch(`${this.baseUrl}/users/signout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка получения сохранненых фильмов: ${res.status}`)
      )
  }

  saveMovie(movie) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка сохранения фильма: ${res.status}`)
      )
  }

  deleteMovie(movie) {
    return fetch(`${this.baseUrl}/movies/${movie}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка удаления фильма: ${res.status}`)
      )
  }

}

const api = new MainApi({
  // baseUrl: 'https://api.biyele.nomoredomains.club',
  baseUrl: 'http://localhost:3001',
})

export default api;
