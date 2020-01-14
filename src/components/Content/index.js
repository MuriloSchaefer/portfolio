import React from 'react'
import ResponsiveLayout from '../ResponsiveLayout'
import MobileView from './mobileView'
import DesktopView from './desktopView'

const Content = ({ /* variables */ }) => (
  <ResponsiveLayout
    breakpoint={740}
    renderDesktop={() => (
      <DesktopView /* variables */ />
    )}
    renderMobile={() => (
      <MobileView /* variable */ />
    )}
  />
)

export default Content