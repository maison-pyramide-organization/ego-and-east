import classNames from "classnames";
import styles from "./styles.module.scss";
import { field } from "../../../types/fields";
import { becomeATalentFields, bookAtalentFields, contactFields } from "../../../data/popups";
import sendEmail from "../utils/sendEmail";
import { useRef } from "react";

interface Iprops {
    popup: string;
    viewSentMessage: () => void;
}

const Form = (props: Iprops) => {
    const { popup, viewSentMessage } = props;
    const formRef = useRef(null);
    let message = "";
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

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // GET FORM DATA
        const form = formRef.current! as any;
        const formData: any = {
            requestType: form.requestType.value,
            message: form.message.value,
        };
        inputs.forEach((input: any) => {
            const name = input.name;
            const value = form[name].value;
            formData[name] = value;
        });

        sendEmail(formData);
        viewSentMessage();

        form.reset();
    };

    return (
        <form className={classNames(styles.form)} onSubmit={handleSubmit} ref={formRef}>
            <div className={styles.inputsWraper}>
                <input type="hidden" value={popup} id="requestType" hidden />
                {inputs!.map((input) => (
                    <div className={styles.formInput} key={input.name}>
                        <label htmlFor={input.name}></label>
                        <input placeholder={input.name} type="text" id={input.name} />
                    </div>
                ))}
            </div>

            <div className={styles.messageContainer}>
                <textarea placeholder={message} id="message" className={styles.message} />
                <button type="submit" className={styles.sendBtn}>
                    send
                </button>
            </div>
        </form>
    );
};
export default Form;
