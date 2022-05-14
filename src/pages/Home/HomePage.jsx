import * as Home from './style'
import * as TextComponent from '../../components/text/TextComponent'
import * as ButtonConponent from '../../components/button/ButtonComponent'
import NodeLogo from '../../utils/img/logo/Node.js_light.svg'

function HomePage(){
    return(
        <Home.Container>
            <Home.PickUp>
                <Home.PickUpText>
                    <h1>
                        {'développeur full stack '.toUpperCase()}<br/>
                        <TextComponent.BackLine>NODE JS</TextComponent.BackLine>
                    </h1> 
                    <p>Passionné par l’informatique, expérience de développeur operateur de 4 ans</p>
                </Home.PickUpText>
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