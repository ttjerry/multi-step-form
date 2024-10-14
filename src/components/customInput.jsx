const CustomInput = ({ label, disabled, value, className, placeholder }) => {
  return (
    <span>
      <label className="font-medium">{label}</label>
      <input
        type="text"
        disabled={disabled}
        value={value}
        className={`${className} outline-none px-3`}
        placeholder={placeholder}
      />
    </span>
  );
};
export default CustomInput;
