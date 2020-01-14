import { useEffect } from 'react';
import { usePortfolioContext } from './usePortfolioContext';
import { useCancellablePromise } from './useCancellablePromises';


export const usePortifolio = () => {
    const { state, dispatch } = usePortfolioContext();
    const { cancellablePromise } = useCancellablePromise();

    useEffect(() => {
        // Effetcs when array changes
    }, []);

    return {
        
    }
}