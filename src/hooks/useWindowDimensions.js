import {useContext} from 'react';
import { WindowDimensionsContext } from "../providers/windowDimensionsProvider";

export const useWindowDimensions = () => {
    return useContext(WindowDimensionsContext);
}