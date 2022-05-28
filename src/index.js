import {React, useEffect, useContext} from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createRoot } from 'react-dom/client';

//global style
import {GlobalStyle} from './utils/style/global';
import {ThemeContext} from './context/ThemeContext';

//pages
import NotFoundPage from './pages/Error/NotFoundPage'
import HomePage from './pages/Home/HomePage'
import {ContactPage} from './pages/Contact/ContactPage'
import ProjectPage from './pages/Project/ProjectPage'
import AboutMePage from './pages/about/AboutPage'

//compenents
import HeaderComponents from './block/header/HeaderBlock'
import FooterConponents from './block/footer/FooterBlock'
import ThemeContextProvider from './context/ThemeContext';

const container = document.getElementById('root')
const Root = createRoot(container)


function GlobalStyleTheme(props){
    const {theme} = useContext(ThemeContext)
    let themeType = null;

    if(theme){themeType = 'lightTheme'}else{themeType = 'darkTheme'}
    return(
        <GlobalStyle theme={themeType} />
    )
}

Root.render(
    <BrowserRouter>
        <ThemeContextProvider>
            <GlobalStyleTheme/>
            <HeaderComponents/>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/project" element={<ProjectPage />} />
                    <Route path="/about/me" element={<AboutMePage />} />
                    {/* error page */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <FooterConponents />
        </ThemeContextProvider>
    </BrowserRouter>,
);


