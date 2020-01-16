import React from 'react';
//import style from './header.scss';
import { Parallax } from 'react-scroll-parallax';
import { Container } from 'react-bootstrap'
import Resume from '../Resume';
import SocialMedia from '../SocialMedia';
import Contact from '../Contact'

// custom css styles
import './index.scss'

const Intro = () => {
    return (
        <div className='root'>
            <div className='container'>
                {/* <canvas className='canvas' id='canvas'/> */} 
                <Parallax
                    y={[-100, 100]}
                    className='info'
                >
                    <Container>
                        <h1>Have you met <span className='name'>Murilo Schaefer</span>?</h1>
                        <h2>a Fullstack developer and data scientist</h2>
                        <Resume />
                        <SocialMedia />
                        <Contact  />
                    </Container>
                </Parallax>
            </div>
            <p className='scroll'>Scroll to see the projects</p>
        </div>
    )
}

export default Intro