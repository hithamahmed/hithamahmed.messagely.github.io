import React from 'react';
//import { Route } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import InstagramMessages from './components/InstagramMessages';

import './custom.css';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/counter" element={<Counter />} />
                <Route path="/fetch-data" element={<FetchData />} />
                <Route path="/instagram-messages" element={<InstagramMessages />} />
            </Routes>
        </Layout>
  
    );
};