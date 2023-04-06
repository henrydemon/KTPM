import ErrorValidate from "./ErrorValidate";

const InputFormGroup = ({
  showLabel,
  nameLabel,
  nameInput,
  value,
  type,
  placeholder,
  defaultValue,
  handleOnChange,
  showError,
  errorMessage,
  disabled,
}) => {
  return (
    <div className="form-group" style={{ marginBottom: "0.5rem" }}>
      {showLabel && <label className="form-control-label">{nameLabel}</label>}
      <input
        disabled={disabled}
        name={nameInput}
        type={type}
        value={value}
        onChange={handleOnChange}
        className="form-control"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {showError && <ErrorValidate errorMessage={errorMessage} />}
    </div>
  );
};

export default InputFormGroup;
