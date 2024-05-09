import s from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <>
      <p className={s.errorMessage}>
        Oops something went wrong!
        <br />
        Try again later!
      </p>
    </>
  );
};

export default ErrorMessage;
