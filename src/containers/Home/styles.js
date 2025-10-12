import styled from 'styled-components';

export const Background = styled.div`
background-image: url(${props => props.$img});
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
color: white;

&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

@media (max-width: 1024px) {
    height: auto;
    min-height: 100vh;
    padding: 40px 0;
  }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 99%;
    max-width: 1200px;    
    margin-top: 40px;

    @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    margin: 40px 20px;
  }

  @media (max-width: 768px) {
    margin: 20px 10px;
  }
`

export const Info = styled.div`
        z-index: 2;
        padding: 20px;
        width: 50%;

    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #ffffff;
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 20px;
        width: 80%;
    }

    @media (max-width: 1024px) {
    width: 80%;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
    h1 {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
    `

export const Poster = styled.div`
        z-index: 3;
    img {
        width: 280px;
        border-radius: 30px;
    }

    @media (max-width: 1024px) {
    margin-top: 30px;
    img {
      width: 220px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 180px;
    }
  }
`
export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    button {
      width: 90%;
    }
  }
`