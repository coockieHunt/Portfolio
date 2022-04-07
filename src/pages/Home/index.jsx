import{
    HomePageContainer,
    HomePickUp,
    HomePickUpSide,
    HomePickUpLogo,
    BackLineSpan
} from '../../utils/style/page/home/style'

import { convertTextToUpperCase } from '../../utils/Helper/index'

import NodeLogo from '../../utils/img/logo/Node.js_light.svg'


function Home(){
    return(
        <HomePageContainer>
            <HomePickUp>{convertTextToUpperCase('développeur full stack')}<br/><BackLineSpan>NODE JS</BackLineSpan></HomePickUp>
            <HomePickUpSide>
                <HomePickUpLogo src={NodeLogo} alt="Node Js logo" />
            </HomePickUpSide>
        </HomePageContainer>
    )
}


export default Home