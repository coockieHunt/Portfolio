import * as Home from './style'
import * as TextComponent from '../../components/text/Text'
import * as ButtonConponent from '../../components/button/button'

import NodeLogo from '../../utils/img/logo/Node.js_light.svg'

function HomePage(){
    return(
        <Home.Container>
            <Home.PickUp>
                {'développeur full stack '.toUpperCase()}<TextComponent.BackLine>NODE JS</TextComponent.BackLine>
                <Home.Navigate>
                    <ButtonConponent.Link 
                                    disabled={false} 
                                    type="button"
                                    to="/contact">
                                Me contacter
                    </ButtonConponent.Link>
                    <ButtonConponent.Link 
                                    disabled={false} 
                                    type="button"
                                    to="/project">
                                Mais project
                    </ButtonConponent.Link>
                </Home.Navigate>

            </Home.PickUp>
            <Home.PickUpSide>
                <Home.PickUpLogo src={NodeLogo} alt="Node Js logo" />
            </Home.PickUpSide>
        </Home.Container>
    )
}


export default HomePage