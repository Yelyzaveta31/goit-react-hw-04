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
        <div>
          <Form className={s.form}>
            <Field name="query">
              {({ field }) => (
                <input
                  {...field}
                  className={s.input}
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                />
              )}
            </Field>
            <button className={s.button} type="submit">
              <IoMdSearch />
            </button>
          </Form>
          <Toaster />
        </div>
      </Formik>
    </header>
  );
};

export default SearchBar;
