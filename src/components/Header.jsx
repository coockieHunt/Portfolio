import { 
    StyledLink, 
    HeaderContainer,
    HeaderNav, 
    HeaderTitle, 
    HeaderNavElement 
} from "../utils/style/header"

import { convertTextToUpperCase } from '../utils/Helper/index'

function IfActive(navData){
    if(navData.isActive){ return 'active'}
    return null
}

function Header(){
    return(
        <HeaderContainer>
            <HeaderTitle>
                {convertTextToUpperCase('<CK>')}
            </HeaderTitle>
            <HeaderNav>
                <HeaderNavElement>
                    <StyledLink 
                        to='/'
                    >
                    Accueil
                    </StyledLink>
                </HeaderNavElement>
                <HeaderNavElement>
                    <StyledLink 
                        to='/contact'
                    >
                    Contact
                    </StyledLink>
                </HeaderNavElement>
                <HeaderNavElement>
                    <StyledLink 
                        to='/project'
                    >
                    Mes Porject
                    </StyledLink>
                </HeaderNavElement>
            </HeaderNav>

        </HeaderContainer>
    )
}


export default Header