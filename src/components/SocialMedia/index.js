import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// custom css styles
import './index.scss'

const SocialMedia = () => {

    const [medias, ] = useState([
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/murilo-f-schaefer', //linkedin
            icon: ['fab', 'linkedin-in']
        },
        {
            name: 'github',
            url: 'https://github.com/MuriloSchaefer', //github
            icon: ['fab', 'github']
        },
        {
            name: 'kaggle',
            url: 'https://www.kaggle.com/muriloschaefer', //kaggle
            icon: ['fab', 'kaggle']
        },
        {
            name: 'facebook',
            url: 'https://www.facebook.com/murilo.franciscoschaefer', //facebook
            icon: ['fab', 'facebook']
        },
    ]);

    return (
        <Container className='socialMedia-root'>
            <ul className='socialMedia-list'>
                { medias.map(media => (
                    <li className='socialMedia-item' key={media.name}>
                        <a href={media.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={media.icon} size="lg" color='white'/>
                        </a> 
                    </li>
                )) }
            </ul>
        </Container>
    )
}

export default SocialMedia