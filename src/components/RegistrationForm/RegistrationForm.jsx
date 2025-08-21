import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register as registerUser } from "../../redux/auth/operations";

const schema = Yup.object({
  name: Yup.string().min(2).max(50).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting, resetform }) => {
    try {
      await dispatch(registerUser(values)).unwrap();
      resetform();
      navigate("/contacts");
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Email
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field name="password" type="text" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create account"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
