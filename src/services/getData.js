import api from './api'

/* ---------------------------------    HOME -----------------------------*/

export async function getMovies() {
    const { 
        data: { results } 
    } = await api.get('/movie/now_playing')

    const randomIndex = Math.floor(Math.random() * results.length)
    return results [randomIndex]
}

export async function getTopMovies() {
           const { data: { results }
            } = await api.get('/movie/top_rated')

    return results
}

export async function getTopSeries() {
        const { data: { results }
            } = await api.get('/tv/top_rated')

    return results
}

export async function getPopularSeries() {
        const { data: { results }
            } = await api.get('/tv/popular')

    return results
}

export async function getTvPopular() {
        const { data: { results }
            } = await api.get('/trending/tv/day')

    return results
}

export async function getTopPeople() {
        const { data: { results }
            } = await api.get('/person/popular')

    return results
}

export async function getMovieVideos(movieId) {
        const {
                data: { results }
            } = await api.get(`/movie/${movieId}/videos`)

            return results
}

export async function getMovieCredits(movieId) {
    const { data } = await api.get(`/movie/${movieId}/credits`)
    
    return data.cast
}

export async function getMovieSimilar(movieId) {
        const {
                data: { results }
            } = await api.get(`/movie/${movieId}/similar`)

            return results
}

export async function getMovieById(movieId) {
        const {data} = await api.get(`/movie/${movieId}`)

            return data 
}


/* ---------------------------------    FILMES -----------------------------*/

export async function getUpcomingReleases () {
        const {
                data: { results }
            } = await api.get(`/movie/upcoming`)
            return results
}

export async function getMovieSuggestion (movieId) {
        const {
                data: { results }
            } = await api.get(`/movie/${movieId}/recommendations`)
            return results
}

export async function getPopularMovies() {
    const {
        data: { results },
    } = await api.get(`/movie/popular`)
    return results
}

export async function getTheBestFilms() {
    const {
        data: { results },
    } = await api.get(`/movie/top_rated`)
    return results
}

/* ---------------------------------    SÉRIES  -----------------------------  */

export async function getSeries() {
  const { data: { results } } = await api.get('/tv/popular')
  if (!results || results.length === 0) return null
  const randomIndex = Math.floor(Math.random() * results.length)
  return results[randomIndex]
}

export async function getSimilarSeries(tvId) {
    if (!tvId) return [] 
    const {
        data: { results },
    } = await api.get(`/tv/${tvId}/similar`)
    return results
}