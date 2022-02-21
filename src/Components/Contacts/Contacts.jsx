
import style from './Contacts.module.scss'
import Title from '../Title/Title';
import MyMapContainer from '../MyMap/MyMapContainer';
import ContactsContainer from './ContactsContainer';
import Form from '../../Components/Form/Form';
function Contacts(props) {
    return (
        <div>
            <Title text="Контакты" />
            <ContactsContainer />
            <MyMapContainer />
            <Form />
        </div>
    );
}

export default Contacts;