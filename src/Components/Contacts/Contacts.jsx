
import style from './Contacts.module.scss'
import Title from '../Title/Title';
import MyMap from '../MyMap/MyMap';
import ContactsLink from './ContactsLink/ContactsLink';
import Form from '../../Components/Form/Form'
function Contacts(props) {

    return (
        <div>
            <Title text="Контакты" />
            <ContactsLink contactsData={props.contactsData} />
            <MyMap
                medokMap={props.medokMap}
            />
            <Form />
        </div>
    );
}

export default Contacts;