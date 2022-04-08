import React from 'react';
import { RiSendPlane2Line } from 'react-icons/ri';

import {
    ContactContainer,
    ContactFormulaire,
    ContactSide,
}from "../../utils/style/page/contact/style"

import {
    FormInput,
    FormGroupe,
    FormInline,
    FormTextArea,
    FormSubmit,
    FormCta
}from "../../utils/style/library/form"

class ContactForm extends React.Component {
    DefaultValue = {
        firsName: 'first name',
        secondaryName: 'secondary name',
        email: 'test@gmail.com',
        message: 'ceci et le contenue du message'
    }


    constructor(props){
        super(props)

        this.state = this.DefaultValue;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(JSON.stringify(this.state))

        this.setState(this.DefaultValue);
    }

    render() {
        return(
            <ContactContainer>
                <ContactFormulaire>
                    <h1>Contact US</h1>
                    <FormGroupe onSubmit={this.handleSubmit}>
                        <FormInline>
                            <FormInput name="firsName" type="text" value={this.state.firsName} onChange={this.handleChange}/>
                            <FormInput name="secondaryName" type="text" value={this.state.secondaryName} onChange={this.handleChange}/>
                        </FormInline>
                       
                        <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        <FormTextArea name="message"  value={this.state.message} onChange={this.handleChange}/>
                        <FormInline>
                            <FormSubmit type="submit" value="envoyer" />
                        </FormInline>
                    </FormGroupe>
                    <FormCta>
                        
                    </FormCta>
                </ContactFormulaire>
                <ContactSide>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida dolor eget elit lobortis tincidunt. Donec ut risus non ipsum venenatis semper. Aliquam vel dictum lectus, non ultrices tortor. Sed gravida viverra felis ut hendrerit. Ut iaculis egestas turpis, in lacinia nisl consectetur eget. Sed a ullamcorper risus, non luctus mauris. Nam finibus, sem at accumsan interdum, diam lorem finibus augue, eu faucibus augue augue nec purus. Duis interdum, lectus vel pellentesque suscipit, est lorem blandit sapien, eget luctus elit nibh id erat. Praesent molestie sapien urna, nec hendrerit ligula eleifend vitae. Nullam non faucibus ex. Vivamus convallis diam posuere ante blandit, sit amet sodales nisl tincidunt.

Vivamus ac ullamcorper ligula, ac ornare nisi. Vestibulum ligula ex, pellentesque vitae risus quis, tincidunt hendrerit ante. Curabitur nisi velit, gravida nec congue nec, blandit eu metus. Integer tristique fermentum vehicula. Aliquam erat volutpat. Mauris at lacinia lacus. Nullam aliquam, neque et tempor consectetur, magna purus molestie sem, ut aliquam magna lacus eu est. Suspendisse euismod sit amet ante eu iaculis. In efficitur volutpat molestie.

Sed ornare rhoncus ex id aliquam. In hac habitasse platea dictumst. Nam id libero at ligula maximus consequat at porttitor nisl. Sed laoreet vulputate purus vel sodales. Praesent a nulla nunc. Integer a luctus magna. In tempus metus massa, ac eleifend ante faucibus vel. Cras mollis est vitae elit consequat viverra. Vestibulum luctus volutpat libero vel gravida. In at leo ornare, fermentum nisl sed, finibus metus.

Maecenas tellus purus, ultricies et ante sed, elementum vulputate purus. Maecenas hendrerit lorem a augue elementum consectetur. Suspendisse varius, sem non egestas sagittis, libero sem lobortis eros, at cursus ante felis vel nisi. Sed lorem nulla, vehicula ut tincidunt sed, malesuada sit amet ligula. Aliquam nisl nulla, malesuada sed consequat ultricies, imperdiet sit amet augue. Nunc venenatis diam vitae augue dictum gravida. Morbi nec fringilla leo. Sed vel felis iaculis, lacinia nisl at, posuere lacus. Nunc at erat eget massa condimentum porta. Aliquam nec elit dolor. Donec sed fermentum tellus, sed semper ex.

In et dolor nulla. Sed at lorem a tellus condimentum hendrerit. Sed elementum ante eget pellentesque tincidunt. Pellentesque vel maximus neque. Cras auctor vel orci et tincidunt. Ut quis enim non dui imperdiet volutpat in non neque. Duis justo elit, sollicitudin vel magna sed, molestie sollicitudin est. Mauris iaculis odio ac dui viverra rutrum.
                </ContactSide>
            </ContactContainer>
        )
    }
}




export default ContactForm