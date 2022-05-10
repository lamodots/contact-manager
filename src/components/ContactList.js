import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props)=>{
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderList = props.contactlist.map((contactinfo) =>{
        return(
            <ContactCard contact={contactinfo} clickHandler = {deleteContactHandler} key={contactinfo.id} />
        );

    });
    return (

        <div className="ui celled list">
         {renderList}
        </div>
    );
};
export default ContactList;