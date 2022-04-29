import React, {useState, useEffect} from 'react';

import * as Header from "./style"
import * as NavComponent from "../../components/link/Link"
import * as ButtonComponent from '../../components/button/button';

import MainLogo from '../../utils/img/logo/logo.svg'

import { 
    IoInformationCircleSharp, 
    IoLibrarySharp,
    IoMailSharp
} from 'react-icons/io5';

function HeaderComponents(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
    }, [])


    return(
        <Header.Container>
            <Header.Title>
                <NavComponent.Img 
                    src={MainLogo} 
                    alt="Logo personal" 
                    to='/'
                />

            {(screenWidth < 1024) && (
                <div>
                    <ButtonComponent.CTA OnClick={toggleNav} className="NoMargin" type='button'>{toggleMenu ? "hide" : "show"}</ButtonComponent.CTA>
                </div>

            )}
            </Header.Title>

            {(toggleMenu || screenWidth > 1024) && (
                <Header.Nav>
                    <Header.NavLeft>
                        <Header.NavElement>
                            <NavComponent.NavLink 
                                to='contact'
                            >
                            <IoMailSharp/> Contact
                            </NavComponent.NavLink>
                        </Header.NavElement>

                        <Header.NavElement>
                            <NavComponent.NavLink 
                                to='/project'
                            >
                            <IoLibrarySharp/>Projet
                            </NavComponent.NavLink>
                        </Header.NavElement>

                        <Header.NavElement>
                            <NavComponent.NavLink 
                                to='/about/me'
                            >
                            <IoInformationCircleSharp/> A propos
                            </NavComponent.NavLink>
                        </Header.NavElement>
                    </Header.NavLeft>
                    <Header.NavRight>
                        <Header.NavElement>
                            <NavComponent.NavLink 
                                accentuated
                                to='https://github.com/coockieHunt/portfolio'
                            >
                            Lient git
                            </NavComponent.NavLink>
                        </Header.NavElement>
                    </Header.NavRight>
                   
                </Header.Nav>
            )}

        </Header.Container>
    )
}


export default HeaderComponents