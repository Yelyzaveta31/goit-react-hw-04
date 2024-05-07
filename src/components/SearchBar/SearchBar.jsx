import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { IoMdSearch } from "react-icons/io";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  return (
    <header className={s.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            toast.error("Please, fill in the search field");
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={s.form}>
          <Field name="query">
            {({ field }) => (
              <input
                className={s.input}
                {...field}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            )}
          </Field>
          <button className="s.button" type="submit">
            <IoMdSearch />
          </button>
        </Form>
        <Toaster />
      </Formik>
    </header>
  );
};

export default SearchBar;
