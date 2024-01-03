import "../menuSelect/menuSelect.css";
import React, { useState, useRef, useEffect } from "react";

const MenuSelect = ({
  options,
  onSelect,
  classNameContainer,
  label,
  classNameButton,
  classNameList,
  classNameItem,
}) => {
  const FIRST_OPTION = options[0];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(FIRST_OPTION);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // if (!isOpen) {
    //   menuRef.current.focus();
    // }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggle();
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const handleOptionKeyDown = (e, option) => {
    if (e.key === "Enter" || e.key === " ") {
      handleSelect(option);
    } else if (e.key === "ArrowUp" && option !== options[0]) {
      const index = options.indexOf(option);
      handleSelect(options[index - 1]);
    } else if (
      e.key === "ArrowDown" &&
      option !== options[options.length - 1]
    ) {
      const index = options.indexOf(option);
      handleSelect(options[index + 1]);
    }
  };
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section
      className={classNameContainer}
      // onChange={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      // tabIndex={0}
      ref={menuRef}
    >
      {label}
      <button
        className={classNameButton}
        type="button"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        {selectedOption}
        {/* ? selectedOption : "Sélectionner une option"} */}
      </button>
      {isOpen && (
        <ul className={classNameList} role="menu" style={{ listStyle: "none" }}>
          {options.map((option, index) => (
            <li
              className={classNameItem}
              style={{ cursor: "pointer" }}
              key={index}
              tabIndex={0}
              role="menuitem"
              onClick={() => handleSelect(option)}
              onKeyDown={(e) => handleOptionKeyDown(e, option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MenuSelect;
