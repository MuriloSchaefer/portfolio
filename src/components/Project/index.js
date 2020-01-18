import React, { useEffect } from 'react';
import { Container, Image, Row, Col, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// custom css styles
import './index.scss'

function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return monthNames[monthIndex] + ' ' + year;
  }

const Project = (props) => {

    useEffect(()=>{
        return () => {/* clean up function  */ } 
    }, [props.data])

    return (

        <Container className='project'>
            <Row className="justify-content-md-center">
                <Col md="auto" className='title'>
                    <span>{props.data.name}</span>
                </Col>
            </Row>
            {/* image, description and tags */}
            <Row> 
                <Col sm={6}>
                    <Image className='project-image'/>
                </Col>
                <Col sm={6}>
                    <Row className="justify-content-md-center">
                        <Col md="auto" className='subheader'>
                            <span>Description</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='field'>
                            <span>{props.data.description}</span>
                            <hr/>
                            {props.data.dateInterval[1] &&
                                <span className='interval'>Developed from {formatDate(props.data.dateInterval[0])} to {formatDate(props.data.dateInterval[1])}</span>    
                            }
                            {!props.data.dateInterval[1] &&
                                <span className='interval'>This project is running since {formatDate(props.data.dateInterval[0])}</span>
                            }
                            
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* actions and tags */}
            <Row>
                <Col sm={4} className='actions'>
                    <a href={props.data.demo?props.data.demo:''} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={props.data.demo?'action' : 'action disabled'} icon={['fas', props.data.demo?'eye':'eye-slash']} size="lg"/>
                    </a> 
                    <a href={props.data.url?props.data.url:''} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={props.data.url?'action' : 'action disabled'} icon={['fab', props.data.url?'github':'github']} size="lg"/>
                    </a> 
                </Col>
                <Col sm={8} className='tags'>
                    {
                        props.data.tags.map(tag => (
                            <Badge pill className='tag' key={tag}> {tag}</Badge>
                        ))
                    }
                </Col>
            </Row>

            <hr/>

            {/* Difficulties and solution */}
            <Row>
                <Col sm={6}>
                    <Row className="justify-content-md-center">
                        <Col md="auto" className='subheader'>
                            <span>Difficulties</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='field'>
                            <span>{props.data.difficulties}</span>
                        </Col>
                    </Row>


                    <Row className="justify-content-md-center">
                        <Col md="auto" className='subheader'>
                            <span>Solutions</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='field'>
                            <span>{props.data.solutions}</span>
                        </Col>
                    </Row>

                </Col>
                <Col sm={6}>
                    <Row className="justify-content-md-center">
                        <Col md="auto" className='subheader'>
                            <span>Conclusion</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='field'>
                            <span>{props.data.conclusion}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Project