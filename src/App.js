import React from 'react';

/************* COMPONENTS ************/

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import Layout from "./components/Layout"


function App() {
    const birthYear = 2000;

    return (
    <div className="App">
        <Layout>
            <Header />
            <Content />
            <Footer/>
        </Layout>
    </div>);
}

export default App;
