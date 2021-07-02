import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Links from './components/links';
import Footer from './components/footer';

import Data from './data.json';

const App = () => (
    <>
        <Header/>
        <Links data = { Data }/>
        <Footer/>
    </>
)

ReactDOM.render(<App/>, document.getElementById('root'))
