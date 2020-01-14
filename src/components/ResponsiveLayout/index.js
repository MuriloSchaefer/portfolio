import { useState, useEffect } from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

const ResponsiveLayout = ({breakpoint, renderMobile, renderDesktop }) =>{
   
    const {width} = useWindowDimensions()
    console.log(width, breakpoint)
    return (width > breakpoint ? renderDesktop() : renderMobile())

}

export default ResponsiveLayout