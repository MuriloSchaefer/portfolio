import React from 'react'
import ResponsiveLayout from '../ResponsiveLayout'
import MobileView from '../MobileView'
import DesktopView from '../DesktopView'

const Content = (/* { variables  } */) => (
  <ResponsiveLayout
    breakpoint={810}
    renderDesktop={() => (
      <DesktopView /* variables */ />
    )}
    renderMobile={() => (
      <MobileView /* variable */ />
    )}
  />
)

export default Content