import Form from "../components/Form";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import s from './styles.module.css';

export default function Contacts() {
  return (
    <>
        <h1 className={s.title}>Phonebook</h1>
        <Form />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
}