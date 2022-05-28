import React from 'react';
import * as SectionStyle from './style'


export class Section extends React.Component{
    render() {
        const {children, overflow} = this.props;

        return(
            <SectionStyle.Section className='background' overflow={overflow && "activate"}>
                <div>
                    {children}
                </div>
            </SectionStyle.Section>
        )
    }
}