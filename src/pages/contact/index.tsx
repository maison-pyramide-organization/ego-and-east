import s from "./_s.module.scss";
import ContactForm from "./form";

export default function Contact() {
  return (
    <div className={s.p}>
      <main className={s.m}>
        <div className={s.l}>
          <h1>CONTACT US</h1>
          <p>
            FOR MORE INFORMATION ABOUT EGO & EAST OR ANY GENERAL INQUIRIES,
            PLEASE CONTACT OUR TEAM.
          </p>

          <div className={s.em}>
            <div className={s.ti}>SEND US AN EMAIL:</div>
            <a href="mailto:hello@egoandeast.co">HELLO@EGOANDEAST.CO</a>
          </div>

          <div className={s.so}>
            <div className={s.ti}>FOLLOW US:</div>
            <div>
              <a target="_blank" href="https://www.instagram.com/egoandeast">
                INSTAGRAM
              </a>
              <span>/</span>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ego-east/"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
        <div className={s.r}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
