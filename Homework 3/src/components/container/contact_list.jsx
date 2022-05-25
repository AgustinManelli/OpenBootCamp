import React from 'react';
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact('Agustin', 'Manelli', "agustinmanelli@hotmail.com", true);

    return (
        <div>
            <div>
                <h1>Contacto</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <ContactComponent contact={defaultContact} />
        </div>
    );
};


export default ContactListComponent;