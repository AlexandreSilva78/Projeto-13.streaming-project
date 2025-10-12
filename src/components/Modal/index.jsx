
import { useEffect, useState } from 'react'
import { getMovieVideos } from '../../services/getData'
import { Container, Background } from './styles'

function Modal({ movieId, setShowModal }) {
    const [videos, setVideos] = useState()

    useEffect(() => {
        async function loadVideos() {
            if (!movieId) return
            try {
                const data = await getMovieVideos(movieId)
                setVideos(data || [])
            } catch (error) {
                console.error('Erro ao buscar vídeos do filme:', error)
                setVideos([])
            }
        }
        loadVideos()
    }, [movieId])

    const trailer = videos?.find(
        v => v.type === 'Trailer' && v.site === 'YouTube'
    )

    return (
        <Background onClick={() => setShowModal(false)}>
            {trailer ? (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title='Youtube Vídeo Player'
                        height="500px"
                        width="100%"
                    ></iframe>
                </Container>
            ) : (
                <Container>
                    <h1>Nenhum trailer disponível no momento para este filme</h1>
                    <button onClick={() => setShowModal(false)}>Fechar</button>
                </Container>
            )}
        </Background>
    )
}

export default Modal