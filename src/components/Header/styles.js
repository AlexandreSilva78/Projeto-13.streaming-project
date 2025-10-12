import styled from "styled-components";


export const Container = styled.div`
    min-height: 100px;
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;  
    padding: 10px 50px;
    background-color: ${(props) => (props.$changeBackground ? '#000' : 'transparent')};
    transition: background-color 1s ease-in-out;

    img {
        width: 15%;
    }

    @media (max-width: 768px) {
    padding: 10px 30px;
  }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;

    @media (max-width: 768px) {
    position: fixed;
    top: 100px;
    right: 0;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.95);
    width: 100%;
    height: ${(props) => (props.$menuOpen ? 'calc(100vh - 100px)' : '0')};
    overflow: hidden;
    gap: 30px;
    padding-top: ${(props) => (props.$menuOpen ? '40px' : '0')};
  }

`

export const Li = styled.li`
    color: white;
    font-weight: 600;
    cursor: pointer;
    position: relative;


    a {
        text-decoration: none;
        color: white;
        font-size: 24px;
    }

    &::after {
        content: "";
        height: 3px;
        width: ${ (props) => (props.$isActive ? '100%' : '0%')};
        background-color: #189b20;
        position: absolute;
        top: 25px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }

    @media (max-width: 768px) {
    a {
      font-size: 1.4rem;
    }
  }

`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  cursor: pointer;
  z-index: 100;
  position: relative;

  span {
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  ${(props) =>
    props.$menuOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translateY(8px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-8px);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }`