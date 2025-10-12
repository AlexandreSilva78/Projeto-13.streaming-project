import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getTopMovies,
  getUpcomingReleases,
  getPopularMovies,
  getTheBestFilms,
  getMovieSuggestion,
  getTvPopular,
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, ContainerButtons, Info, Poster, SliderWrapper } from './styles'

function Movie() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState(null)
  const [topMovies, setTopMovies] = useState([])
  const [upcomingReleases, setUpcomingReleases] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [theBestFilms, setTheBestFilms] = useState([])
  const [movieSuggestion, setMovieSuggestion] = useState([])
  const [tvPopular, setTvPopular] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      try {
        // Buscar dados principais
        const [movieData, topMoviesData, upcomingReleasesData, popularMoviesData, theBestFilmsData, tvPopularData] = await Promise.all([
          getMovies(),
          getTopMovies(),
          getUpcomingReleases(),
          getPopularMovies(),
          getTheBestFilms(),
          getTvPopular(),
        ])

        setMovie(movieData)
        setTopMovies(topMoviesData)
        setUpcomingReleases(upcomingReleasesData)
        setPopularMovies(popularMoviesData)
        setTheBestFilms(theBestFilmsData)
        setTvPopular(tvPopularData)

        // Buscar sugestões apenas se movieData.id existir
        if (movieData?.id) {
          try {
            const suggestions = await getMovieSuggestion(movieData.id)
            setMovieSuggestion(suggestions)
          } catch (error) {
            console.error('Erro ao buscar sugestões:', error)
            setMovieSuggestion([])
          }
        } else {
          setMovieSuggestion([])
          console.warn('Filme aleatório inválido, não foi possível buscar sugestões.')
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="Capa Do Filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}

      {topMovies?.length > 0 && (
        <SliderWrapper>
          <Slider info={topMovies} title="Top Filmes" />
        </SliderWrapper>
      )}

      {upcomingReleases?.length > 0 && (
        <SliderWrapper>
          <Slider info={upcomingReleases} title="Próximos Lançamentos" />
        </SliderWrapper>
      )}

      {popularMovies?.length > 0 && (
        <SliderWrapper>
          <Slider info={popularMovies} title="Filmes Populares" />
        </SliderWrapper>
      )}

      {theBestFilms?.length > 0 && (
        <SliderWrapper>
          <Slider info={theBestFilms} title="Os Melhores Filmes" />
        </SliderWrapper>
      )}

      {movieSuggestion?.length > 0 && (
        <SliderWrapper>
          <Slider info={movieSuggestion} title="Sugestões de Filmes" />
        </SliderWrapper>
      )}

      {tvPopular?.length > 0 && (
        <SliderWrapper>
          <Slider info={tvPopular} title="Canais Populares" />
        </SliderWrapper>
      )}
    </>
  )
}

export default Movie
