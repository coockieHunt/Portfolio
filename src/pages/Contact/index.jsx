import React from 'react';

import * as Contact from "./style"
import * as FormComponent from "../../components/form/Form"

import { 
    IoMdSend, 
} from 'react-icons/io';

import ButtonConponent from "../../components/button/button"


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
            <Contact.Container>
                <Contact.Side>
                    <Contact.Title>Formulaire de contact</Contact.Title>
                    <Contact.BaseLine>Remplissez ce formulaire, je vous repondrée le plus rapidement possible.</Contact.BaseLine>
                    <Contact.Other>
                        <Contact.OtherOption>+33 603420204</Contact.OtherOption>
                        <Contact.OtherOption>pro.jonathan.gleyze@gmail.com</Contact.OtherOption>
                    </Contact.Other>
                    <p>Lorem ipsum, mais truc en ski</p>
                </Contact.Side>
                <Contact.Form>
                    <h1>Contact US</h1>
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
                        <ButtonConponent 
                            disabled={false} 
                            type="submit"
                            icon= {<IoMdSend/>}
                            onClick={this.handleSubmit}>
                        envoyer
                        </ButtonConponent>
                    </FormComponent.Groupe>
                </Contact.Form>
            </Contact.Container>
        )
    }
}

export default ContactPage