import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #e50914, 0 0 10px #e50914, 0 0 20px #e50914;
  }
  50% {
    box-shadow: 0 0 15px #ff4b5c, 0 0 30px #ff4b5c, 0 0 45px #ff4b5c;
  }
  100% {
    box-shadow: 0 0 5px #e50914, 0 0 10px #e50914, 0 0 20px #e50914;
  }
`;

export const Container = styled.div`
    background: #000;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: fixed;
    padding: 40px;
    max-width: 1200px;

    iframe {
        border: none;
    }

    h1 {
        color: red;
        text-Align: center;
    }

    button {
        position: absolute;
        right: 5px;
        top: 10px;
        background-color: #e50914;
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s ease;
        animation: ${glow} 2s infinite ease-in-out;
        transition: transform 0.3s ease, background-color 0.3s ease;
    

    &:hover {
        background-color: #b20710;
        transform: scale(1.05);
    }
}
`

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

`