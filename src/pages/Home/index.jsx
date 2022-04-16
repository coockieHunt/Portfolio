import * as Home from '../../utils/style/page/home/style'

import NodeLogo from '../../utils/img/logo/Node.js_light.svg'

function HomePage(){
    return(
        <Home.Container>
            <Home.PickUp>{'développeur full stack'.toUpperCase()}<br/><Home.BackLineSpan>NODE JS</Home.BackLineSpan></Home.PickUp>
            <Home.PickUpSide>
                <Home.PickUpLogo src={NodeLogo} alt="Node Js logo" />
            </Home.PickUpSide>
        </Home.Container>
    )
}


export default HomePage