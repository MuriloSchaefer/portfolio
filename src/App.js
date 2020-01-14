import React, { useState, useReducer } from 'react';
import { portfolioReducer } from './reducers/portfolioReducer';
import { PortfolioProvider } from './providers/portfolioProvider';
import PortfolioHome from './components/portfolioHome';
import { WindowDimensionsProvider } from './providers/windowDimensionsProvider';

const initialState = {
  // variables
};

const App = () => {
  const store = useReducer(portfolioReducer, initialState);
  return (
    <WindowDimensionsProvider>
      <div className="App">
      <PortfolioProvider value={store}>
        <PortfolioHome />
      </PortfolioProvider>
      </div>
    </WindowDimensionsProvider>
  )
}

export default App;