import React from 'react';
import ReactDom from 'react-dom';
import * as Toast from './style'

export const Bottom = ({isShowing, hide, color, children}) =>
isShowing
? ReactDom.createPortal(
    <Toast.Container color={color}>
        {children}
    </Toast.Container>,
document.body): null;