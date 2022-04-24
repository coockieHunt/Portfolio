import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

//global style
import {GlobalStyle, MainContainerStyle} from './utils/style/global';

//pages
import NotFoundPage from './pages/Error/NotFound'
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import ProjectPage from './pages/Project'
import AboutMePage from './pages/about/my'

//compenents
import HeaderComponents from './block/header/Header.jsx'
import FooterConponents from './block/footer/Footer.jsx'

const container = document.getElementById('root')
const Root = createRoot(container)

export class MainContainer extends React.Component{
 
    componentDidMount() {
        document.title = "Gleyze jonathan"
    }
    
    render() {


        const {children} = this.props;

        return(
            <MainContainerStyle>
                {children} 
            </MainContainerStyle>
        )
    }
}


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


