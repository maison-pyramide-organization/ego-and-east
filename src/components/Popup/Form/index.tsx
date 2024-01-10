import classNames from "classnames";
import styles from "./styles.module.scss";
import { field } from "../../../types/fields";
import { becomeATalentFields, bookAtalentFields, contactFields } from "../../../data/popups";
import sendEmail from "../utils/sendEmail";
import { useRef } from "react";
import { useState } from "react";
import checkFormData from "../utils/checkFormData";

interface Iprops {
    popup: string;
    viewSentMessage: () => void;
}

const Form = (props: Iprops) => {
    const formRef = useRef(null);
  const { popup, viewSentMessage } = props;
  let message = "";
  let inputs: field[];
  const [error, setError] = useState(false);

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
    setError(false);
    e.preventDefault();
    // GET FORM DATA
    const form = document.getElementById("form") as any;
    const formData: any = {
      requestType: form.requestType.value,
      message: form.message.value,
    };
    // Input Data
    inputs.forEach((input: any) => {
      const name = input.name;
      const value = form[name].value;
      formData[name] = value;
    });

    const isValid = checkFormData(formData);
    if (!isValid) {
      setError(true);
      return;
    }

        sendEmail(formData);
        viewSentMessage();

        form.reset();
    };

  return (
    <form className={classNames(styles.form)} onSubmit={handleSubmit} id="form">
      {/* FORM INPUTS */}
      <div className={styles.inputsWraper}>
        <input type="hidden" value={popup} id="requestType" hidden />
        {inputs!.map((input) => (
          <input
            placeholder={input.placeholder}
            type="text"
            id={input.name}
            key={input.name}
            className={styles.formInput}
          />
        ))}
      </div>

      {/* FORM MESSAGE */}
      <div className={styles.messageContainer}>
        <textarea
          placeholder={message}
          id="message"
          className={styles.message}
        />
        <button type="submit" className={styles.sendBtn}>
          send
        </button>
      </div>

      {/* FORM ERROR */}
      {error && (
        <div className={styles.form_error}>
          Please fill all the feilds above!
        </div>
      )}
    </form>
  );
};
export default Form;
