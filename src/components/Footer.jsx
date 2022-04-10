import { FooterContainer, FooterBlock} from "../utils/style/components/footer"
import { SiReact } from 'react-icons/si';
import { GiOutbackHat } from 'react-icons/gi';
import { DiJavascript1 } from 'react-icons/di';

function Footer(){
    return(
        <FooterContainer>
            <FooterBlock>
                Lève-toi et code <GiOutbackHat />
            </FooterBlock>
            <FooterBlock>
                Copyright GLEYZE Jonathan. All Rights Reserved<br/>
                Powered by Node <DiJavascript1/>
            </FooterBlock>
            <FooterBlock>
                create whith react <SiReact />
            </FooterBlock>
        </FooterContainer>
    )
}


export default Footer