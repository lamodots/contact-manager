import React from 'react';
import user from '../images/user.jpg';

function ContactCard(props) {
    const {id, name, email, phone}= props.contact;
  return (
    <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <div className="header">
                        <h2>{name}</h2>
                    </div>
                    <div><h3>{email}</h3></div>
                    <div><h3>{phone}</h3></div>
                </div>
                
                <i className="trash alternate outline icon right floated content" style={{color:"red",  fontSize:"24px", cursor:"pointer"}}
                
                onClick ={() => props.clickHandler(id)}
                ></i>
            </div>
  )
}

export default ContactCard