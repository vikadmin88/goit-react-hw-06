import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import css from './App.module.css'

const App = () => {

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  )
}

export default App
