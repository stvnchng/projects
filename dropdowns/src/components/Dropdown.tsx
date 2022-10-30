import { MouseEventHandler, useMemo, useState } from "react";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

import "./style.css";

type DropdownProps = {
  label: string;
  items: any[];
  multiple?: boolean;
};

const Dropdown = ({ label, items, multiple }: DropdownProps) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<any[]>([]);

  const toggleShow: MouseEventHandler = (e) => {
    if (!items.length) {
      return;
    }
    e.stopPropagation();
    setShow(!show);
  };

  const handleSelect = (selectedItem: any) => {
    if (multiple) {
      if (selected.includes(selectedItem)) {
        setSelected(selected.filter((item) => item !== selectedItem));
      } else {
        setSelected([...selected, selectedItem]);
      }
    } else {
      setSelected([selectedItem]);
    }
  };

  const formattedSelections = useMemo(() => {
    return selected.join() || (multiple ? `Select ${label}` : "None");
  }, [label, multiple, selected]);

  return (
    <div className="dropdown" onClick={toggleShow}>
      <label className="dropdownLabel">{label}</label>
      <div className="dropdownSelected">
        {formattedSelections}
        <span className={`arrow ${show ? "open" : "close"}`} />
      </div>
      <div className={`dropdownContent${show ? " active" : ""}`}>
        {/* This "None" option renders as a no-selection option for radios only */}
        {!multiple && (
          <Radio
            label={label}
            item="None"
            handleSelect={handleSelect}
            selected={"None" === selected[0]}
            none
          />
        )}
        {items.map((item, i) =>
          multiple ? (
            <Checkbox key={i} item={item} handleSelect={handleSelect} />
          ) : (
            <Radio
              key={i}
              label={label}
              item={item}
              handleSelect={handleSelect}
              selected={item === selected[0]}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Dropdown;
