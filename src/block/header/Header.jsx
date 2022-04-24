import * as Header from "./style"
import * as NavComponent from "../../components/link/Link"

import MainLogo from '../../utils/img/logo/logo.svg'

function HeaderComponents(){
    return(
        <Header.Container>
            <Header.Title>
                <NavComponent.Img 
                    src={MainLogo} 
                    alt="Node Js logo" 
                    to='/'
                    />
            </Header.Title>
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
        </Header.Container>
    )
}


export default HeaderComponents