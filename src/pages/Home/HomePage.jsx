import * as Home from './style'

import * as TextComponent from '../../components/text/TextComponent'
import * as ButtonConponent from '../../components/button/ButtonComponent'
import * as SectionConponent from '../../components/section/SectionComponent'
import * as LayoutComponent from '../../components/layout/LayoutComponent'

import '../../utils/style/library/helper.css'

import NodeLogo from '../../utils/img/logo/Node.js_light.svg'

function HomePage(){
    return(
        <>
            <Home.Container>
                <Home.Hello>
                    <Home.PickUp>
                        <Home.PickUpText>
                            <h1>
                                <TextComponent.Accentuate>{'développeur '.toUpperCase()}</TextComponent.Accentuate>{'full stack '.toUpperCase()}<br/>
                                <TextComponent.BackLine>NODE JS</TextComponent.BackLine>
                            </h1> 
                            <p >Passionné par l’informatique, expérience de développeur operateur de 4 ans</p>
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
                </Home.Hello>
                <SectionConponent.Section id="one">
                    <LayoutComponent.SplitLayout 
                        left={
                            <>
                                <h1><TextComponent.Accentuate>My skill</TextComponent.Accentuate></h1>
                                <p className='TextSpace'>Dolor id cillum dolore eu laborum laboris dolore ipsum sunt. Et commodo nulla reprehenderit nostrud et aliqua consectetur :</p>
                                <ul className="TextBold">
                                    <li className='TextSpace'>Développement</li>
                                    <li>3D</li>
                                    <li>électronique</li>
                                </ul>
                            </>
                        }

                        right={
                           <p>PLACE SVG HERE</p>
                        }
                    />
                </SectionConponent.Section>
            </Home.Container>
        </>
    )
}


export default HomePage