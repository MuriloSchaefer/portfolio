import React from 'react'
import Intro from '../Intro'
import NavBar from '../NavBar'
import Projects from '../Projects'

const DesktopView = (/* { variables } */) => {
  //const { width } = useWindowDimensions()
  return (
    <div className="homepage">
        <Intro />
        <NavBar />
        <Projects />
        {/*<MoreAbout />
        <Contact /> */}
        {/* another component maybe: "who am I?" */}
    </div>
  )
}
export default DesktopView