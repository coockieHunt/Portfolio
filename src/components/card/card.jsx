import React from 'react';
import * as CardStyle from './style'

import * as ButtonConponent from "../button/button"


export class Card extends React.Component{
    render() {
        const {title} = this.props;

        return(
            <CardStyle.Container>
                <CardStyle.Header>
                    <h2>{title}</h2>
                </CardStyle.Header>

                <img 
                    src={`https://picsum.photos/id/${Math.floor(Math.random() * 500) + 1}/200 `} 
                    alt="Grapefruit slice atop a pile of other slices">
                </img>

                <CardStyle.Fotter className='footer'>
                    <p>Aliqua dolor commodo ullamco culpa deserunt consectetur ut.</p>
                </CardStyle.Fotter>
              
            </CardStyle.Container>
          
        )
    }
}