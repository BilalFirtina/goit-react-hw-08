import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";

const schema = Yup.object({
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(6, "Min 6 chars").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(login(values)).unwrap();
      navigate("/contacts");
    } catch (error) {
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Email
            <Field name="email" type="email"></Field>
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Password
            <Field name="password" type="password"></Field>
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
