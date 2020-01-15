import React from 'react'
import Intro from '../Intro'

const DesktopView = (/* { variables } */) => {
  //const { width } = useWindowDimensions()
  return (
    <div className="homepage">
        {/* <NavBar /> */}
        <Intro />
        {/* <Projects />
        <MoreAbout />
        <Contact /> */}
        {/* another component maybe: "who am I?" */}
    </div>
  )
}
export default DesktopView