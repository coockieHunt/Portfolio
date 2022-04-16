import * as Header from "../utils/style/components/header"

import MainLogo from '../utils/img/logo/logo.svg'

function HeaderComponents(){
    return(
        <Header.Container>
            <Header.Title>
                <Header.Logo src={MainLogo} alt="Node Js logo" />
            </Header.Title>
            <Header.Nav>
                <Header.NavElement>
                    <Header.StyledLink 
                        to='/'
                    >
                    Accueil
                    </Header.StyledLink>
                </Header.NavElement>
                <Header.NavElement>
                    <Header.StyledLink 
                        to='/contact'
                    >
                    Contact
                    </Header.StyledLink>
                </Header.NavElement>
                <Header.NavElement>
                    <Header.StyledLink 
                        to='/project'
                    >
                    Mes Porject
                    </Header.StyledLink>
                </Header.NavElement>
                <Header.NavElement>
                    <Header.StyledLink 
                        className={"accentuated"}
                        to='/about/me'
                    >
                    A props de moi
                    </Header.StyledLink>
                </Header.NavElement>
            </Header.Nav>
        </Header.Container>
    )
}


export default HeaderComponents