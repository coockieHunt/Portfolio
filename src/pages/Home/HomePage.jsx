import * as Home from './style'
import * as TextComponent from '../../components/text/TextComponent'
import * as ButtonConponent from '../../components/button/ButtonComponent'
import NodeLogo from '../../utils/img/logo/Node.js_light.svg'

//modal
import useModal from '../../hooks/useModal'
import { Modal } from '../../components/modal/ModalComponent'

function HomePage(){
    const { isShowing, toggle } = useModal();

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

                    <button onClick={toggle}>show modal</button>
                    <Modal title="je suis le titre" isShowing={isShowing} hide={toggle}> 
                        je suis le contenue de ma modal, je passe part les props
                        Nostrud dolore duis do nisi cillum. Enim quis quis ullamco quis cillum eu ex commodo pariatur qui ut nisi. Minim laborum est veniam dolore tempor cupidatat cupidatat amet quis deserunt est commodo tempor.
                    </Modal>

                </Home.Navigate>
            </Home.PickUp>
            <Home.PickUpSide>
                <Home.PickUpLogo src={NodeLogo} alt="Node Js logo" />
            </Home.PickUpSide>
        </Home.Container>
    )
}


export default HomePage