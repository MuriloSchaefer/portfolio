import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap'

// custom css styles


const Resume = () => {
    const [resume, setResume] = useState('https://linktopdf.com')

    return (
        <Container className='resume'>
            <Button variant="outline-light" href={resume}>
                Resume
            </Button>
        </Container>
    )
}

export default Resume