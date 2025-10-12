import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import { Container, Menu, Li, Hamburger } from './styles';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [changeBackground, setChangeBackground] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 150) {
                setChangeBackground(true)
            } else {
                setChangeBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (

        <Container $changeBackground={changeBackground}>
            <img src={Logo} alt="Logo-Movies" />

            <Hamburger
                $menuOpen={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
            >
                <span />
                <span />
                <span />
            </Hamburger>

            <Menu $menuOpen={menuOpen}>
                <Li $isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li $isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li $isActive={pathname.includes('series')}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header