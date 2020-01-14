import { useEffect } from 'react';
import { usePortfolioContext } from './usePortfolioContext';
import { useCancellablePromise } from './useCancellablePromises';


export const usePortifolio = () => {
    const { state, dispatch } = usePortfolioContext();
    const { cancellablePromise } = useCancellablePromise();

    useEffect(() => {
        // Fetch anything that needs to be fetched
    }, []);

    return {
        
    }
}