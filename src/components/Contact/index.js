import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// custom css styles
import './index.scss'


const Resume = () => {

    const [contacts, ] = useState([
        {
            name: 'phone',
            value: '+55 45 998 338 031',
            icon: 'phone-alt',
            url: undefined
        },{
            name: 'mail',
            value: 'murilo.schaefer@gmail.com',
            icon: 'at',
            url: undefined
        }
    ])

    return (
        <Container className='contact-root'>
            <ul className='contact-list'>
                { contacts.map(contact => (
                    <li className='contact-item' key={contact.name}>
                        <a href={contact.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={contact.icon} color='white'/> {contact.value}
                        </a> 
                    </li>
                )) }
            </ul>
        </Container>
    )
}

export default Resume