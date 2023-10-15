import classNames from "classnames";
import styles from "./styles.module.scss";
import Select from "./Select";

interface field {
    name: string;
    type: string;
    placeholder?: string;
    message?: string;
    options?: string[];
}

const book: field[] = [
    {
        name: "talent",
        type: "drop",
        placeholder: "Select talent",
        options: ["mohamed", "fab", "nourhan"],
    },
    {
        name: "country / region",
        type: "drop",
        placeholder: "Select country",
        options: ["mohamed", "fab", "nourhan"],
    },
    {
        name: "name",
        type: "input",
    },
    {
        name: "company name",
        type: "input",
    },
    {
        name: "email",
        type: "input",
    },
];

const become: field[] = [
    {
        name: "talent",
        type: "drop",
        placeholder: "Select talent",
        options: ["mohamed", "fab", "nourhan"],
    },
    {
        name: "country / region",
        type: "drop",
        placeholder: "Select country",
        options: ["mohamed", "fab", "nourhan"],
    },
    {
        name: "name",
        type: "input",
    },
    {
        name: "surname",
        type: "input",
    },
    {
        name: "email",
        type: "input",
    },
];
const contact: field[] = [
    {
        name: "subject",
        type: "input",
    },
    {
        name: "country / region",
        type: "drop",
        options: ["mohamed", "fab", "nourhan"],
    },
    {
        name: "name",
        type: "input",
    },
    {
        name: "surname",
        type: "input",
    },
    {
        name: "email",
        type: "input",
    },
];

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
            inputs = book;
            message="What kind of talent are you looking for?";
            break;
        case "become a talent":
            inputs = become;
            message="Tell us about yourself – and your goals";
            break;
        case "get in contact":
            inputs = contact;
            message="Tell us more...";
            break;
    }

    return (
        <form className={classNames(styles.form, "hide-scrollbar")}>
            <div className={styles.inputsWraper}>
                {inputs!.map((input) => {
                    if (input.type == "input") {
                        return (
                            <div className={styles.formInput}>
                                <label htmlFor={input.name}>{input.name}</label>
                                <input type="text" id={input.name} />
                            </div>
                        );
                    } else {
                        return (
                            <div className={styles.formInput}>
                                <label htmlFor={input.name}>{input.name}</label>
                                <Select placeholder={input.placeholder!} options={input.options!} />
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
