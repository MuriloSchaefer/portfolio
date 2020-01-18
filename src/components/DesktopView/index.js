import React from 'react'
import Intro from '../Intro'
import NavBar from '../NavBar'
import Projects from '../Projects'
import Divider from '../Divider'

const DesktopView = (/* { variables } */) => {
  //const { width } = useWindowDimensions()
  return (
    <div className="homepage">
        <Intro />
        <NavBar />
        <Projects />
        <Divider />
        <Projects />
        {/*
        <Publications />
        <MoreAbout />
        <Contact /> */}
        {/* another component maybe: "who am I?" */}
    </div>
  )
}
export default DesktopView