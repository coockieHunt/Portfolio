import React from 'react';

import * as Header from "./style"
import * as NavComponent from "../../components/link/LinkComponent"
import * as ButtonUtilsComponent from '../../components/button/ButtonUtilsComponent';
import * as ButtonUComponent from '../../components/button/ButtonComponent';
import {TogglerDarkMode}  from '../../components/button/ButtonUtilsComponent'


import {size_Width} from '../../utils/style/library/size'

import MainLogo from '../../utils/img/logo/logo.svg'

//config
import { SOCIAL_LINK } from '../../config';

import { 
    IoInformationCircleSharp, 
    IoMailSharp,
    IoLogoGithub,
    IoHomeSharp,
    IoLogoDeviantart,
    IoLibrarySharp
} from 'react-icons/io5';


export default class HeaderComponents extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            toggleNav: false,
            screenWhidth: window.innerWidth
        }

        window.addEventListener('resize', (e) => this.screenWhidthChanged(e));
        this.ShowHide = this.ShowHide.bind(this);
    }

    ShowHide(){
        this.setState((state, props) => {
            return {toggleNav: !this.state.toggleNav};
        });
    }

    screenWhidthChanged(e) {
        this.setState((state, props) => {
            return {screenWhidth : window.innerWidth};
        });
    }

    render(){
        let screenWidth = this.state.screenWhidth
        let toggleNav = this.state.toggleNav
        let BreakPointSize = parseInt(size_Width.laptop)

        return(
            <Header.Container>
                <Header.Left>
                    <NavComponent.NavImg 
                    src={MainLogo} 
                    alt="Logo personal" 
                    to='/'/> 
                    
                    <Header.Nav>
                        {(toggleNav || screenWidth > BreakPointSize) && (
                            <Header.NavElement className={(screenWidth < BreakPointSize) && ('background')}>
                                <NavComponent.NavLink 
                                    to='/'
                                    dysplay= 'Accueil'
                                    icon = {<IoHomeSharp/>}
                                    onClick={this.ShowHide}/>

                                <NavComponent.NavLink 
                                    to='contact'
                                    dysplay=  'Contact'
                                    icon = {<IoMailSharp/>}
                                    onClick={this.ShowHide}/>

                                <NavComponent.NavLink 
                                    to='/project'
                                    dysplay=  'Projet'
                                    icon = {<IoLibrarySharp/>}
                                    onClick={this.ShowHide}/>

                                <NavComponent.NavLink 
                                    to='/about/me'
                                    dysplay=  'A propos'
                                    icon = {<IoInformationCircleSharp/>}
                                    onClick={this.ShowHide}/>
                            </Header.NavElement>
                        )}
                    </Header.Nav>
                </Header.Left>

                <Header.Right>
                    <TogglerDarkMode/>

                    <ButtonUComponent.NavImg
                        icon={<IoLogoDeviantart/>}
                        to= {SOCIAL_LINK.DeviantArt}
                        color='#00e59b'
                    />

                    <ButtonUComponent.NavImg
                        icon={<IoLogoGithub/>}
                        to= {SOCIAL_LINK.GitHub}
                        color='#6e5494'
                    />
                   

                    {(screenWidth < BreakPointSize) && (
                        <ButtonUtilsComponent.Burger OnClick={this.ShowHide} ActiveNav={toggleNav} className="backgroundInvert"/>
                    )}
                </Header.Right>
            </Header.Container>
        )
    }
}
