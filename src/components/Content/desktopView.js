import React from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import PortfolioHome from './portfolioHome'

const DesktopView = ({ /* variables */ }) => {
  const { width } = useWindowDimensions()
  return (
    <PortfolioHome />
  )
}
export default DesktopView