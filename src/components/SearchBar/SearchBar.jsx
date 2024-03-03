import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
    query: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Required!"),
});

export default function SearchBar( {onSubmit} ) {
  return (
    <Formik
      validationSchema={userSchema}
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values.query);
        actions.resetForm();
      }}
    >
      <Form>
        <Field
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}