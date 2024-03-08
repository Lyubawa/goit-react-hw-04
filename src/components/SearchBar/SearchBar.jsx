import toast, { Toaster } from 'react-hot-toast';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from 'react';
import css from "./SearchBar.module.css"

export default function SearchBar( {onSubmit} ) {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
        if (query.trim() === "") {
          toast.error("Field is empty!")
          return
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div>
      <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
         <div className={css.box}>
          <FaMagnifyingGlass className={css.icon} />
        <input className={css.input}
          type="text"
          name="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          />
          </div> 
        <button className={css.btn} type="submit">Search</button>
      </form>
      </header>
      <Toaster position="top-right"/>
    </div>
    
  );
  
}
  
//   return (
//     <div>
//       <Formik
//       validationSchema={userSchema}
//       initialValues={{ query: "" }}
//       onSubmit={(values, actions) => {
//         onSubmit(values.query);
//         if(values.query === "") {
//         toast.error("Field is empty!")}
//         actions.resetForm();
//       }}
//     >
//       <Form>
//         <FaMagnifyingGlass />
//         <Field
//           type="text"
//           name="query"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//         <button type="submit">Search</button>
//       </Form>
//     </Formik>
//       <Toaster />
//     </div>
    
//   );
  
// }