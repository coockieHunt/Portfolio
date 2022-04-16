import { 
    StyledLink, 
    HeaderContainer,
    HeaderNav, 
    HeaderTitle, 
    HeaderNavElement ,
    HeaderLogo
} from "../utils/style/components/header"

import MainLogo from '../utils/img/logo/logo.svg'

function Header(){
    return(
        <HeaderContainer>
            <HeaderTitle>
                <HeaderLogo src={MainLogo} alt="Node Js logo" />
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
                <HeaderNavElement>
                    <StyledLink 
                        to='/apropos'
                    >
                    A props de moi
                    </StyledLink>
                </HeaderNavElement>
            </HeaderNav>

        </HeaderContainer>
    )
}


export default Header