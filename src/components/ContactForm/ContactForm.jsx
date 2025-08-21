import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const schema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string()
    .matches(/^[0-9-]+$/)
    .min(3)
    .max(20)
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(addContact(values)).unwrap();
      actions.resetForm();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
