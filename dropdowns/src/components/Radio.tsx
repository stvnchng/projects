type RadioProps = {
  label: string;
  item: any;
  handleSelect: (item: any) => void;
  selected: boolean;
  none?: boolean;
};

const Radio = ({ label, item, handleSelect, selected, none }: RadioProps) => {
  const onSelect = () => {
    handleSelect(item);
  };

  return (
    <label
      className={`dropdownItem ${selected ? "highlight" : ""} ${
        none ? "none" : ""
      }`}
    >
      <input name={label} type="radio" value={item} onChange={onSelect} />
      {item}
    </label>
  );
};

export default Radio;
