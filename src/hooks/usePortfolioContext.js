import { useContext } from 'react';
import { PortfolioContext } from '../providers/portfolioProvider';

export const usePortfolioContext = () => {
    const portfolioContext = useContext(PortfolioContext);
    return {
        state: portfolioContext[0],
        dispatch: portfolioContext[1],
    }
}