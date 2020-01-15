import React, { useReducer } from 'react';
import { portfolioReducer } from './reducers/portfolioReducer';
import { PortfolioProvider } from './providers/portfolioProvider';
import { WindowDimensionsProvider } from './providers/windowDimensionsProvider';
import Content from './components/Content';
import { ParallaxProvider } from 'react-scroll-parallax';

// CSS libraries
//import 'bulma/css/bulma.css'
//import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
};

const App = () => {
  const store = useReducer(portfolioReducer, initialState);
  return (
    <WindowDimensionsProvider>
      <ParallaxProvider>
        <div className="App">
        <PortfolioProvider value={store}>
          <Content /* variables */ />
        </PortfolioProvider>
        </div>
      </ParallaxProvider>      
    </WindowDimensionsProvider>
  )
}

export default App;