import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        <IoPerson />
        {name}
      </p>
      <p>
        <FaPhone />
        {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};

export default Contact;
