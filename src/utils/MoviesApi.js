class MoviesApi {
  constructor({moviesUrl}) {
    this.moviesUrl = moviesUrl;
  }

  getMovies() {
    return fetch(`${this.moviesUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка получения фильмов: ${res.status}`)
      )
  }

}

const apiMovies = new MoviesApi({
  moviesUrl: 'https://api.nomoreparties.co/beatfilm-movies',
})

export default apiMovies;
