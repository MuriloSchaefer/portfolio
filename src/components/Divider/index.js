import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import {Parallax} from 'react-scroll-parallax'


// custom css
import './index.scss'

const Divider = () => {

    return (
        <Container className="divider-container" fluid >
            <Parallax
                    x={[-30, 0]}>
                <Container className='quote'>
                    <h1>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”</h1>
                    <h2>Martin Fowler</h2>
                </Container>
            </Parallax>
        </Container>
    )
}
export default Divider