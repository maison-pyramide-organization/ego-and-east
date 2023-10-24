import classNames from "classnames";
import styles from "./styles.module.scss";
import Select from "./Select";
import { field } from "../../../types/fields";
import { becomeATalentFields, bookAtalentFields, contactFields } from "../../../data/popups";

interface Iprops {
    popup: string;
}

const Form = (props: Iprops) => {
    const { popup } = props;
    let message = "";
    // const inputs = popup == "book" ? book : become;
    let inputs: field[];

    switch (popup) {
        case "book a talent":
            inputs = bookAtalentFields;
            message = `What kind of talent are you looking for? \n
(max 100 characters)`;
            break;
        case "become a talent":
            inputs = becomeATalentFields;
            message = `Tell us about yourself – and your goals! \n
(max 100 characters)`;
            break;
        case "get in contact":
            inputs = contactFields;
            message = `Tell us more... \n
(max 100 characters)`;
            break;
    }

    return (
        <form className={classNames(styles.form)}>
            <div className={styles.inputsWraper}>
                {inputs!.map((input) => {
                    if (input.type == "input") {
                        return (
                            <div className={styles.formInput}>
                                <label htmlFor={input.name}></label>
                                <input placeholder={input.name} type="text" id={input.name} />
                            </div>
                        );
                    } else {
                        return (
                            <div className={styles.formInput}>
                                {/* <label htmlFor={input.name}>{input.name}</label> */}
                                <Select
                                    label={input.name}
                                    placeholder={input.placeholder!}
                                    options={input.options!}
                                />
                            </div>
                        );
                    }
                })}
            </div>

            <div className={styles.messageContainer}>
                <textarea placeholder={message} className={styles.message} />
                <button type="submit" className={styles.sendBtn}>
                    send
                </button>
            </div>
        </form>
    );
};
export default Form;
