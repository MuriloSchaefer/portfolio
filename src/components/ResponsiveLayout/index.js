import { useState, useEffect } from 'react';
import { useWindowDimensions } from '../../providers/windowDimensionsProvider'

const ResponsiveLayout = ({breakpoint, renderMobile, renderDesktop }) =>{
   
    const {width} = useWindowDimensions()
    return (width > breakpoint ? renderDesktop() : renderMobile())

}