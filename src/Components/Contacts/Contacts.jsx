
import style from './Contacts.module.scss'
import Title from '../Title/Title';
import MyMapContainer from '../MyMap/MyMapContainer';
import Form from '../../Components/Form/Form';
import ContactsLinkContainer from './ContactsLink/ContactsLinkContainer';
function Contacts(props) {
    return (
        <div>
            <Title text="Контакты" />
            <ContactsLinkContainer />
            <MyMapContainer />
            <Form />
        </div>
    );
}

export default Contacts;