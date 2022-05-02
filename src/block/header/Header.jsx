import React, {useState, useEffect} from 'react';

import * as Header from "./style"
import * as NavComponent from "../../components/link/Link"
import * as ButtonComponent from '../../components/button/button';

import {size_Width} from '../../utils/style/library/size'

import MainLogo from '../../utils/img/logo/logo.svg'

import { 
    IoInformationCircleSharp, 
    IoLibrarySharp,
    IoMailSharp,
    IoLogoGithub
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

        console.log(screenWidth)
        return(
            <Header.Container>
                <Header.Title>
                    <NavComponent.NavImg 
                        src={MainLogo} 
                        alt="Logo personal" 
                        to='/'
                    />
                {(screenWidth < BreakPointSize) && (
                    <div>
                        <ButtonComponent.CTA OnClick={this.ShowHide} className="NoMargin" type='button'>{toggleNav ? "hide" : "show"}</ButtonComponent.CTA>
                    </div>
                )}
                </Header.Title>

                {(toggleNav || screenWidth > BreakPointSize) && (
                    <Header.Nav>
                        <Header.NavLeft>
                            <Header.NavElement>
                                <NavComponent.NavLink 
                                    to='contact'
                                    dysplay=  'Contact'
                                    icon = {<IoMailSharp/>}
                                />
                            </Header.NavElement>

                            <Header.NavElement>
                                <NavComponent.NavLink 
                                    to='/project'
                                    dysplay=  'Projet'
                                    icon = {<IoLibrarySharp/>}
                                />
                            </Header.NavElement>

                            <Header.NavElement>
                                <NavComponent.NavLink 
                                    to='/about/me'
                                    dysplay=  'A propos'
                                    icon = {<IoInformationCircleSharp/>}
                                />
                            </Header.NavElement>
                        </Header.NavLeft>
                        <Header.NavRight>
                            <Header.NavElement>
                                <NavComponent.NavLink 
                                    accentuated
                                    external
                                    to='https://github.com/coockieHunt/portfolio'
                                    dysplay= 'Lient git'
                                    icon={<IoLogoGithub/>}
                                    color='#6e5494'
                                />
                            </Header.NavElement>
                        </Header.NavRight>
                    
                    </Header.Nav>
                )}
            </Header.Container>
        )
    }
}
