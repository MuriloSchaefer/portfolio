import React, { useReducer } from 'react';
import { portfolioReducer } from './reducers/portfolioReducer';
import { PortfolioProvider } from './providers/portfolioProvider';
import { WindowDimensionsProvider } from './providers/windowDimensionsProvider';
import Content from './components/Content';
import { ParallaxProvider } from 'react-scroll-parallax';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faAt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faPhoneAlt, faAt, faEye, faEyeSlash)

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