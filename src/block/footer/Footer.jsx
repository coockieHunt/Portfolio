import * as Footer from "./style"
import { SiReact } from 'react-icons/si';
import { GiOutbackHat } from 'react-icons/gi';
import { DiJavascript1 } from 'react-icons/di';

function FooterConponents(){
    return(
        <Footer.Container>
            <Footer.Block>
                Lève-toi et code <GiOutbackHat />
            </Footer.Block>
            <Footer.Block>
                Copyright GLEYZE Jonathan. All Rights Reserved<br/>
                Powered by Node <DiJavascript1/>
            </Footer.Block>
            <Footer.Block>
                create whith react <SiReact />
            </Footer.Block>
        </Footer.Container>
    )
}


export default FooterConponents