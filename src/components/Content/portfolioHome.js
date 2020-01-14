import React from 'react';
import { usePortifolio } from "../../hooks/usePortfolio"
import NavBar from '../NavBar';

const PortfolioHome = () => {
    const { /* variables */ } = usePortifolio();

    return (
        <NavBar />
    )
}

export default PortfolioHome