import React, { useReducer } from 'react';
import { portfolioReducer } from './reducers/portfolioReducer';
import { PortfolioProvider } from './providers/portfolioProvider';
import { WindowDimensionsProvider } from './providers/windowDimensionsProvider';
import 'bulma/css/bulma.css'
import Content from './components/Content';

const initialState = {
  // variables
};

const App = () => {
  const store = useReducer(portfolioReducer, initialState);
  return (
    <WindowDimensionsProvider>
      <div className="App">
      <PortfolioProvider value={store}>
        <Content /* variables */ />
      </PortfolioProvider>
      </div>
    </WindowDimensionsProvider>
  )
}

export default App;