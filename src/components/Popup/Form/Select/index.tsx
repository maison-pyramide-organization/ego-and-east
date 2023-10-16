import { useState } from "react";
import styles from "../styles.module.scss";
import { ReactComponent as DownChevron } from "../../../../assets/Icons/down chevron.svg";
import classNames from "classnames";

interface Iprops {
    label: string;
    placeholder: string;
    options: string[];
    
}
const Select = (props: Iprops) => {
    const { placeholder, options, label } = props;
    const [selected, setSelected] = useState(label);
    const [dropdownState, setDropdownState] = useState(false);

    const toogleDropdown = () => {
        setDropdownState((prev) => !prev);
    };

    const handleOptionClick = (option: string) => {
        setSelected(option);
        // toogleDropdown();
    };

    const selectClasses = dropdownState
        ? classNames(styles.select, styles.active)
        : classNames(styles.select);

    return (
        <div className={selectClasses} onClick={toogleDropdown}>
            <p className={styles.select_value}>{dropdownState ? placeholder : selected}</p>
            <DownChevron className={styles.select_icon} />

            {dropdownState && (
                <ul className={styles.dropdown}>
                    {options.map((option) => (
                        <li
                            className={styles.dropdown_option}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default Select;
