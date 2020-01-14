import React from 'react';
//import { usePortifolio } from "../../hooks/usePortfolio"
import NavBar from '../NavBar';
import Header from '../Header';

const Home = () => {
    //const { /* variables */ } = usePortifolio();

    return (
        <div className="homepage">
            {/* <NavBar /> */}
            <Header />
            <Header />
            <Header />
            {/* another component maybe: "who am I?" */}
        </div>
    )
}

export default Home