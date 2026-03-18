import s from "./_s.module.scss";

import { useState } from "react";

export default function ContactForm() {
  const [formType, setFormType] = useState("book");

  const onNavClick = (e) => {
    const $btn = e.target as HTMLElement;
    const btn_type = $btn.dataset.type;
    setFormType(btn_type!);
  };

  return (
    <>
      <nav className={s.nav}>
        <button
          data-type="book"
          onClick={onNavClick}
          className={formType == "book" ? s.active : undefined}
        >
          BOOK A TALENT
        </button>
        <span>/</span>
        <button
          data-type="become"
          onClick={onNavClick}
          className={formType == "become" ? s.active : undefined}
        >
          BECOME A TALENT
        </button>
      </nav>

      <form className={s.form}>
        <fieldset className={s.talent}>
          <input type="text" name="talent" placeholder="TALENT" />
        </fieldset>
        <fieldset className={s.email}>
          <input type="email" name="email" placeholder="EMAIL" />
        </fieldset>
        <fieldset className={s.country}>
          <input type="text" name="country" placeholder="COUNTRY / REGION" />
        </fieldset>
        <fieldset className={s.name}>
          <input type="text" name="name" placeholder="NAME" />
        </fieldset>
        {formType == "book" ? (
          <fieldset className={s.company}>
            <input type="text" name="company" placeholder="COMAPNY" />
          </fieldset>
        ) : (
          <fieldset className={s.igun}>
            <input type="text" name="igun" placeholder="IG USERNAME" />
          </fieldset>
        )}
        <fieldset className={s.msg}>
          <label htmlFor="message">
            {formType == "book"
              ? "WHAT KIND OF TALENT ARE YOU LOOKING FOR?"
              : "TELL US ABOUT YOURSELF AND YOUR GOALS?"}
          </label>
          <textarea placeholder="(MAX 100 CHARACTERS)" id="message" />
        </fieldset>
        <button type="submit">SEND</button>
      </form>
    </>
  );
}
