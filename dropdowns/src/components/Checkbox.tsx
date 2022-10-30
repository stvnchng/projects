import { useState } from "react";

type CheckboxProps = {
  item: any;
  handleSelect: (item: any) => void;
};

const Checkbox = ({ item, handleSelect }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const onSelect = () => {
    setChecked(!checked);
    handleSelect(item);
  };

  return (
    <label className={`dropdownItem ${checked ? "highlight" : ""}`}>
      <input type="checkbox" value={item} onChange={onSelect} />
      {item}
    </label>
  );
};

export default Checkbox;
