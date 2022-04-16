import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

//global style
import {GlobalStyle, MainContainer} from './utils/style/global';

//pages
import NotFoundPage from './pages/Error/NotFound'
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import ProjectPage from './pages/Project'
import AboutMePage from './pages/about/my'

//compenents
import HeaderComponents from './components/Header.jsx'
import FooterConponents from './components/Footer.jsx'

const container = document.getElementById('root')
const Root = createRoot(container)


Root.render(
    <BrowserRouter>
        <GlobalStyle />
        <MainContainer>
            <HeaderComponents />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/about/me" element={<AboutMePage />} />
                {/* error page */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <FooterConponents />
        </MainContainer>
    </BrowserRouter>,
);


