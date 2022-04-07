import { FooterContainer, FooterBlock} from "../utils/style/footer"
import { SiReact } from 'react-icons/si';
import { GiOutbackHat } from 'react-icons/gi';

function Footer(){
    return(
        <FooterContainer>
            <FooterBlock>
                Lève-toi et code <GiOutbackHat />
            </FooterBlock>
            <FooterBlock>
                Copyright GLEYZE Jonathan. All Rights Reserved<br/>
                Powered by React
            </FooterBlock>
            <FooterBlock>
                create whith react <SiReact />
            </FooterBlock>
        </FooterContainer>
    )
}


export default Footer