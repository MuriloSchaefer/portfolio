import React from 'react';
//import style from './header.scss';
import { Parallax, /* ParallaxBanner */ } from 'react-scroll-parallax';
import { Container } from 'react-bootstrap'

// custom css styles
import './header.scss'

const Header = () => {
    return (
        <div className='root'>
            <div className='container'>
                <canvas className='canvas' id='canvas'/>
                <Parallax
                    y={[-100, 100]}
                    className='info'
                >
                    <Container>
                        <h1>Have you met Murilo?</h1>
                        <h2>a Fullstack developer and data scientist</h2>
                    </Container>
                </Parallax>
            </div>
        </div>
    )
}

export default Header