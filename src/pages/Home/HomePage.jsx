import * as Home from './style'

import * as TextComponent from '../../components/text/TextComponent'
import * as ButtonConponent from '../../components/button/ButtonComponent'
import * as SectionConponent from '../../components/section/SectionComponent'
import * as LayoutComponent from '../../components/layout/LayoutComponent'

import '../../utils/style/library/helper.css'

import NodeLogo from '../../utils/img/logo/Node.js_light.svg'
import HomeSheet from '../../utils/img/logo/home_sheet.png'

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
                        lefttWidth={'30%'}
                        left={
                            <Home.TextSkill>
                                <h1><TextComponent.Accentuate>PASSIONNÉE</TextComponent.Accentuate> par de nombreuse domaine</h1>
                                <p className='TextSpace'>Proident aliquip labore cupidatat deserunt nostrud proident incididunt nisi ullamco. Commodo laborum id eiusmod et amet incididunt adipisicing. Occaecat amet adipisicing enim aliquip. Incididunt adipisicing eiusmod velit ex pariatur commodo sit laborum enim. Anim sit labore sint ea est consequat eu.</p>
                                <ul className="TextBold">
                                    <li className='TextSpace'>Développement</li>
                                    <li>3D</li>
                                    <li>Électronique</li>
                                </ul>
                            </Home.TextSkill>
                        }
                        rightWidth={'70%'}
                        right={
                            <div className='CenterContent'>
                                <Home.SkillImg src={HomeSheet}/>
                            </div>
                        }
                    />
                </SectionConponent.Section>
            </Home.Container>
        </>
    )
}


export default HomePage