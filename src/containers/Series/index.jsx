
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
    getSeries,        // <-- adicione esta linha
    getTopSeries,
    getPopularSeries,
    getSimilarSeries,
    getTvPopular,
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, ContainerButtons, Info, Poster, SliderWrapper } from './styles'





function Series() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [similarSeries, setSimilarSeries] = useState()
    const [tvPopular, setTvPopular] = useState()
    const navigate = useNavigate()

    useEffect(() => {
  async function getAllData() {
    try {
      const serieData = await getSeries()
      setMovie(serieData)

      const [topSeriesData, popularSeriesData, tvPopularData] = await Promise.all([
        getTopSeries(),
        getPopularSeries(),
        getTvPopular()
      ])
      
      setTopSeries(topSeriesData)
      setPopularSeries(popularSeriesData)
      setTvPopular(tvPopularData)

      // Similar series
      if (serieData?.id) {
        const similarData = await getSimilarSeries(serieData.id)
        setSimilarSeries(similarData)
      } else {
        setSimilarSeries([])
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
                    {showModal && (
                        <Modal movieId={movie.Id} setShowModal={setShowModal} />
                    )}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true}
                                    onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora
                                </Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img
                                alt='Capa Do Filme'
                                src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topSeries?.length > 0 && (
                <>
                    <SliderWrapper>
                        <Slider info={topSeries} title="Top Séries" />
                    </SliderWrapper>
                </>
            )}

            {popularSeries?.length > 0 && (
                <>
                    <SliderWrapper>
                        <Slider info={popularSeries} title="Séries Populares" />
                    </SliderWrapper>
                </>
            )}

            {similarSeries?.length > 0 && (
                <>
                    <SliderWrapper>
                        <Slider info={similarSeries} title="Séries Similares" />
                    </SliderWrapper>
                </>
            )}

            {tvPopular?.length > 0 && (
                <>
                    <SliderWrapper>
                        <Slider info={tvPopular} title="Canais Populares" />
                    </SliderWrapper>
                </>
            )}
        </>
    )
}

export default Series
