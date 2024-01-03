import "../inputForm/inputForm.css";

export default function InputForm({
  id,
  label,
  type,
  name,
  value,
  readOnly,
  onChange,
  onClick,
}) {
  return (
    <div className="input-container" onClick={onClick}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={true}
      />
    </div>
  );
}
