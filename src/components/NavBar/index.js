import React, { useState } from 'react'
import {Container} from 'react-bootstrap'

// custom css
import './index.scss'

const NavBar = () => {
    const [buttons, ] = useState([
        {
            name: 'top',
            url: '#intro',
            icon: 'arrow-up',
            value: 'Top'
        },{
            name: 'projects',
            url: '#projects',
            icon: 'arrow-up',
            value: 'Projects'
        },{
            name: 'publications',
            url: '#Publications',
            icon: 'arrow-up',
            value: 'Publications'
        },{
            name: 'more',
            url: '#More',
            icon: 'arrow-up',
            value: 'More'
        },
    ])
    return (
        <Container className="navbar-container" fluid data-spy="affix" data-offset-top="205">
            <ul className="navbar">
                { buttons.map(button => (
                    <a href={button.url} key={button.name}>
                        <li className="navbar-item" >{button.value}</li>
                    </a>
                ))}
            </ul>
        </Container>
    )
}
export default NavBar