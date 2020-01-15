import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap'

// custom css styles


const SocialMedia = () => {

    const [medias, setMedias] = useState([
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
                        <a url={media.url}>
                            <i className={media.icon} />
                        </a> 
                    </li>
                )) }
            </ul>
        </Container>
    )
}

export default SocialMedia