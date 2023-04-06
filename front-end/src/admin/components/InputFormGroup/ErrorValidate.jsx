const ErrorValidate = ({ errorMessage }) => {
  return (
    <>
      <i className="text-danger" style={{ fontSize: "12px" }}>
        {errorMessage}
      </i>
    </>
  );
};

export default ErrorValidate;
