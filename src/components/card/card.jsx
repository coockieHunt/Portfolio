import React from 'react';
import * as CardStyle from './style'

/**
 * * Card
 * 
 * @param title Title card
 * @param thumbnail Object thunbnail {src of img, alt}
 * @param text text on footer
 */
export class Card extends React.Component{
    render() {
        const {title, thumbnail, text} = this.props;

        return(
            <CardStyle.Container>
                <CardStyle.Header>
                    <h2>{title}</h2>
                </CardStyle.Header>

                <img 
                    src={thumbnail.src} 
                    alt={thumbnail.alt} >
                </img>

                <CardStyle.Fotter className='footer'>
                    <p>{text}</p>
                </CardStyle.Fotter>
              
            </CardStyle.Container>
          
        )
    }
}