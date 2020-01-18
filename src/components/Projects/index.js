import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax';
import Project from '../Project'

// custom css styles
import './index.scss'


const Projects = () => {
    const [projects, ] = useState([
        {
            id: 0,
            name: 'Programming Language and its compiler',
            picture: '',
            url: 'https://github.com/MuriloSchaefer/compiladorNOME',
            demo: '',
            tags: ['Java', 'Grammar', 'Compiler'],
            description: 'Creating a programming laguage grammar and implementing it to understand how a compiler works.'+
                         ' This project was a homework of compilers` subject.',
            difficulties: 'generate a grammar that does not have any leakage. ',
            solutions: 'Using an SL table to find compability in the grammar, and after this table was implemented in the compiler',
            conclusion: 'This project gave much experience of how a compiler understand the code and this improved the performance of my code and make easier to learn a new programming language.',
            dateInterval:[new Date(2017,2), new Date(2017, 11)]
        },
        {
            id: 1,
            name: 'Path Finder',
            picture: '',
            url: 'https://github.com/MuriloSchaefer/pathFinder',
            demo: 'https://muriloschaefer.github.io/pathFinder',
            tags: ['React', 'Javascript', 'Path finding'],
            description: 'Development of a visualizer for path finding algorithms, this way we can see how each algorithm works.'+
                         ' This project was a homework of of artificial inteligence`s subject.',
            difficulties: 'integrate each interation of the algorithm with UI. ',
            solutions: 'Solved this issue by using observables, so the UI watched the algorithm execution to update the screen',
            conclusion: 'This project gave a lot of knowledge of how path finding algorithms work and also improved my ReactJS skills.',
            dateInterval:[new Date(2020,2)]
        },
        {
            id: 2,
            name: 'Darwin',
            picture: '',
            url: 'https://github.com/MuriloSchaefer/darwin',
            demo: 'https://muriloschaefer.github.io/darwin',
            tags: ['React', 'Javascript', 'Evolutionary'],
            description: 'Development of a visualizer for path finding algorithms, this way we can see how each algorithm works.'+
                         ' This project was a homework of of artificial inteligence`s subject.',
            difficulties: 'integrate each interation of the algorithm with UI. ',
            solutions: 'Solved this issue by using observables, so the UI watched the algorithm execution to update the screen',
            conclusion: 'This project gave a lot of knowledge of how path finding algorithms work and also improved my ReactJS skills.',
            dateInterval:[new Date(2020,2)]
        }
    ])

    return (
        <Container className='projects' fluid>
            <Parallax
                    y={[-20, 20]}>
                <h1>Projects</h1>
            </Parallax>
            <Container className='projects-list' fluid>
                {projects.map(project => (
                    <Project key={project.id} data={project}/>
                ))}
            </Container>
        </Container>
    )
}

export default Projects