import React, { useState } from 'react';
import { Container } from 'react-bootstrap'

// custom css styles
import './index.scss'

const SocialMedia = () => {

    const [medias, ] = useState([
        {
            url: 'https://www.linkedin.com/in/murilo-f-schaefer', //linkedin
            icon: 'li'
        },
        {
            url: '', //github
            icon: 'gh'
        },
        {
            url: '', //kaggle
            icon: 'kg'
        },
        {
            url: '', //facebook
            icon: 'fb'
        },
    ]);

    return (
        <Container className='socialMedia-root'>
            <ul className='socialMedia-list'>
                { medias.map(media => (
                    <li className='socialMedia-item'>
                        <a href={media.url}>
                            <i className={media.icon} />
                        </a> 
                    </li>
                )) }
            </ul>
        </Container>
    )
}

export default SocialMedia