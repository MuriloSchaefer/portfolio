import React from 'react'
import {Container} from 'react-bootstrap'

// custom css
import './index.scss'

const NavBar = () => {
    return (
        <Container className="navbar-container" fluid>
            <ul className="navbar">
                <li className="navbar-item">home</li>
            </ul>
        </Container>
    )
}
export default NavBar