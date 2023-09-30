import classNames from "classnames";
import styles from "./styles.module.scss";

interface field {
    name: string;
    type: string;
    options?: string[];
}

const book: field[] = [
    {
        name: "talent",
        type: "drop",
        options: ["mohamed", "fab", "nourhan"],
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
        options: ["mohamed", "fab", "nourhan"],
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
    // const inputs = popup == "book" ? book : become;
    let inputs :field[];

    switch (popup) {
        case "book a talent":
            inputs = book;
            break;
        case "become a talent":
            inputs = become;
            break;
        case "get in touch":
            inputs = contact;
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
                                <select id={input.name} className={styles.select}>
                                    {input.options!.map((option: string) => (
                                        <option value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        );
                    }
                })}
            </div>

            <div className={styles.messageContainer}>
                <textarea placeholder="Your message" className={styles.message} />
                <button type="submit" className={styles.sendBtn}>
                    send
                </button>
            </div>
        </form>
    );
};
export default Form;
