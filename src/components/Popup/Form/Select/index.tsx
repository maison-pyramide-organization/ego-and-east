import { useState } from "react";
import styles from "../styles.module.scss";
import { ReactComponent as DownChevron } from "../../../../assets/Icons/down chevron.svg";

interface Iprops {
    placeholder: string;
    options: string[];
}
const Select = (props: Iprops) => {
    const { placeholder, options } = props;
    const [selected, setSelected] = useState(placeholder);
    const [dropdownState, setDropdownState] = useState(false);

    const toogleDropdown = () => {
        setDropdownState((prev) => !prev);
    };

    const handleOptionClick = (option: string) => {
        setSelected(option);
        // toogleDropdown();
    };

    return (
        <div className={styles.select} onClick={toogleDropdown}>
            <p className={styles.select_value}>{selected}</p>
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
