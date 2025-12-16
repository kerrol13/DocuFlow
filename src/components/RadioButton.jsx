const RadioButton = ({ text, value, selectedValue, onChange }) => {
  return (
    <div className="flex gap-4 ">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="option"
          value={value}
          checked={selectedValue === value}
          onChange={() => onChange(value)}
          className="w-4 h-4 cursor-pointer"
        />
        <span>{text}</span>
      </label>
    </div>
  );
}

export default RadioButton