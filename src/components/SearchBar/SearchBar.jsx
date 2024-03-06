import toast from 'react-hot-toast';
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { FaMagnifyingGlass } from "react-icons/fa6";

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
        if(values.query === "") {
        toast.error("Field is empty!")}
        actions.resetForm();
      }}
    >
      <Form>
        <FaMagnifyingGlass />
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