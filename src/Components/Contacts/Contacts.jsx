
import style from './Contacts.module.scss'
import Title from '../Title/Title';
import MyMapContainer from '../MyMap/MyMapContainer';
import ContactsLinkContainer from './ContactsLink/ContactsLinkContainer';
import Question from '../Question/Question';
function Contacts(props) {
    return (
        <div>
            <Title text="Контакты" />
            <ContactsLinkContainer />
            <MyMapContainer />
            <Question />
        </div>
    );
}

export default Contacts;