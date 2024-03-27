import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import Contact from './Contact/Contact'
import css from './ContactList.module.css'

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterTerm = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <ul className={css.listBox}>
      {
        filteredContacts.map((contact) => (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      }
    </ul>
    
  )
}

export default ContactList