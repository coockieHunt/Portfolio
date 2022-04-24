import React, {useState, useEffect} from 'react';

import * as Header from "./style"
import * as NavComponent from "../../components/link/Link"
import * as ButtonComponent from '../../components/button/button';

import MainLogo from '../../utils/img/logo/logo.svg'

function HeaderComponents(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
          console.log(window.innerWidth)
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
                    <ButtonComponent.CTA OnClick={toggleNav} className="NoMargin" type='button'>show/hide</ButtonComponent.CTA>
                </div>

            )}
            </Header.Title>

            {(toggleMenu || screenWidth > 1024) && (
                <Header.Nav>
                    <Header.NavElement>
                        <NavComponent.NavLink 
                            to='/'
                        >
                        Accueil
                        </NavComponent.NavLink>
                    </Header.NavElement>
                    <Header.NavElement>
                        <NavComponent.NavLink 
                            to='/contact'
                        >
                        Contact
                        </NavComponent.NavLink>
                    </Header.NavElement>
                    <Header.NavElement>
                        <NavComponent.NavLink 
                            to='/project'
                        >
                        Mes Porject
                        </NavComponent.NavLink>
                    </Header.NavElement>
                    <Header.NavElement>
                        <NavComponent.NavLink 
                            accentuated
                            to='/about/me'
                        >
                        A props de moi
                        </NavComponent.NavLink>
                    </Header.NavElement>
                </Header.Nav>
            )}

        </Header.Container>
    )
}


export default HeaderComponents