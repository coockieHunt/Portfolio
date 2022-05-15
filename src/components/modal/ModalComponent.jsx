import React from 'react';
import ReactDOM from "react-dom";
import * as ModalElement from './style'

export const Modal = ({isShowing, hide, title, children}) =>
isShowing
? ReactDOM.createPortal(
    <ModalElement.Background >
        <ModalElement.Box className='background'>
            <ModalElement.Title>
                <h1>{title}</h1>
                <ModalElement.Close onClick={hide}>
                    <span className='backgroundInvert'></span>
                </ModalElement.Close>
            </ModalElement.Title>

            <ModalElement.Content>
            {children}
            </ModalElement.Content>
        </ModalElement.Box>
    </ModalElement.Background>,
document.body): null;
