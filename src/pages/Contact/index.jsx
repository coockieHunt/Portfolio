import React from 'react';

import * as Contact from "./style"
import * as FormComponent from "../../components/form/Form"
import * as ButtonConponent from "../../components/button/button"

import { 
    IoMdSend, 
    IoIosCall,
    IoIosMail
} from 'react-icons/io';



class ContactPage extends React.Component {
    DefaultValue = {
        firsName: '',
        lastname: '',
        email: '',
        message: ''
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
            <React.Fragment>
                <Contact.Container>
                    <Contact.Side>
                        <Contact.Title>Information de Contact</Contact.Title>
                        <Contact.BaseLine>Remplissez ce formulaire, je vous repondrée le plus rapidement possible.</Contact.BaseLine>
                        <Contact.Other>
                            <Contact.Option>
                                <IoIosCall/> 
                                <span>+33 603420204</span>
                            </Contact.Option>
                            <Contact.Option>
                                <IoIosMail/> 
                                <span>pro.jonathan.gleyze@gmail.com</span> 
                            </Contact.Option>
                            

                        </Contact.Other>
                        <p>Lorem ipsum, mais truc en ski</p>
                    </Contact.Side>
                    <Contact.Form>
                        <FormComponent.Groupe onSubmit={this.handleSubmit}>
                            <FormComponent.Inline>
                                <FormComponent.InputText 
                                    name="firsName"
                                    value={this.state.firsName} 
                                    onChange={this.handleChange}
                                    label="Prenon"
                                    placeHolder="jhon"
                                    required
                                /> 
                                <FormComponent.InputText 
                                    name="lastname" 
                                    value={this.state.lastname} 
                                    onChange={this.handleChange}
                                    label="nom"
                                    placeHolder="doe"
                                /> 
                            </FormComponent.Inline>
                        
                            <FormComponent.InputEmail 
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleChange}
                                placeHolder="secteur@domaine.fr"
                                label= "email"
                                required
                            />

                            <FormComponent.InputTextArea 
                                name="message"
                                value={this.state.message} 
                                onChange={this.handleChange}
                                label= "message"
                                placeHolder="Votre message ..."
                                required
                            />
                            <ButtonConponent.CTA 
                                disabled={false} 
                                type="submit"
                                icon= {<IoMdSend/>}
                                onClick={this.handleSubmit}>
                            envoyer
                            </ButtonConponent.CTA>
                        </FormComponent.Groupe>
                    </Contact.Form>
                </Contact.Container>
            </React.Fragment>
        )
    }
}

export default ContactPage