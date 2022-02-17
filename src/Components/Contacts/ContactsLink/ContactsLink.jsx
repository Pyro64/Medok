import React from 'react'
import ContactsItem from '../ContactsItem/ContactsItem';
import style from "./ContactsLink.module.scss";

export default function ContactsLink(props) {
    let contactsItem = props.contactsData.map(link =>
        <ContactsItem
            id={link.id}
            svg={link.svg}
            firstText={link.firstText}
            secondText={link.secondText}
            isLink={link.isLink}
            key={link.id}
        />
    )
    return (
        <div className={style.container}>
            {contactsItem}
        </div>
    )
}