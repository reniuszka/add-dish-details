const FormField = ({
  htmlFor,
  labelText,
  type,
  pattern,
  name,
  id,
  value,
  placeholder,
  onChange,
  minLength,
  max,
  min,
  defaultValue,
  step,
}) => {
  return (
    <div className="form-control">
      <label htmlFor={htmlFor}>{labelText}</label>
      <input
        type={type}
        required
        pattern={pattern}
        name={name}
        id={id}
        minLength={minLength}
        max={max}
        min={min}
        step={step}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        className="form-input"
      />
      <span className="validity"></span>
    </div>
  );
};

export default FormField;
