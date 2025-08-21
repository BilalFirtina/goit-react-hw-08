import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selector";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}</span>
          <span>{number}</span>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
