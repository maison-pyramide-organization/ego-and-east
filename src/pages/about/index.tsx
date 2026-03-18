import s from "./_s.module.scss";
import aboutI from "@a/Images/about.png";

export default function () {
  return (
    <>
      <div className={s.p}>
        <main className={s.m}>
          <figure>
            <img src={aboutI} alt="" />
          </figure>
          <aside>
            <h1>REEM & NATALYA KANJ, FOUNDERS OF EGO & EAST.</h1>
            <div>
              <p>
                Their innovative approach to talent management, influenced by
                their extensive experience in London and the MENA region, has
                solidified Ego & East as a leader in Middle East and GCC talent
                management, particularly within the KSA. Ego & East connects top
                luxury, beauty, and fashion brands with the most compelling
                talent across the MENA region, including influencers,
                celebrities, actors, musicians, and creatives. As a celebrity
                and brand ambassador management agency, they specialize in
                elevating brands through influencer marketing and strategic
                talent partnerships.
                <br />
                <br />
                Their distinctively mindful – yet tenacious – approach to brand
                elevation has earned them
              </p>
              <p>
                features in leading publications such as Vogue Business,
                Emirates Woman, Vogue Arabia, Grazia, and Cosmopolitan.
                Additionally, they have been recognized for their expertise in
                fashion week services and invited to guest lecture at Istituto
                Marangoni, one of the world's most prestigious fashion schools.
                <br />
                <br />
                Recently, Ego & East embarked on an exciting new venture,
                merging with the leading agency Maison Pyramide. This
                partnership is set to become ‘one of the most forward-thinking
                mergers in the talent management and influencer marketing
                industry’.
              </p>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
