const CustomInput = ({
  label,
  disabled,
  type = "text",
  value,
  checked,
  onValueChange,
  className,
  placeholder,
}) => {
  return (
    <span>
      <label className="font-medium">{label}</label>
      <input
        type={type}
        disabled={disabled}
        value={value}
        checked={checked}
        onChange={onValueChange}
        className={`${className} outline-none ${type == "text" && "px-3"}`}
        placeholder={placeholder}
      />
    </span>
  );
};
export default CustomInput;
