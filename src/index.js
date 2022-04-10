import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

//global style
import {GlobalStyle, MainContainer} from './utils/style/global';

//pages
import NotFound from './pages/Error/NotFound'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Project from './pages/Project'

//compenents
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import { Alert } from './components/alert';

const container = document.getElementById('root')
const Root = createRoot(container)


Root.render(
    <BrowserRouter>
        <GlobalStyle />
        <Alert type='ok'>ceci et une notification</Alert>
        <MainContainer>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Project />} />
                {/* error page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </MainContainer>
    </BrowserRouter>,
);


