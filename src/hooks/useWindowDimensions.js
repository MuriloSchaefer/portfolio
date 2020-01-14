import React from 'react';
import { WindowDimensionsContext } from "../providers/windowDimensionsProvider";

export const useWindowDimensions = () => {
    const windowDimensionsContext = useContext(WindowDimensionsContext);
    return {
        state: windowDimensionsContext[0],
        dispatch: windowDimensionsContext[1],
    }
}