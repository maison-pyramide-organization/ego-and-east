import s from "./_s.module.scss";

export default function Hero() {
  return (
    <section id="he-s" className={s.s}>
      <div id="hero" className={s.hero}>
        <figure id="vid">
          <video src="/vids/ego-demo.mp4" autoPlay playsInline loop muted />
        </figure>
        <p>
          Co-founders Reem and Natalya Kanj have propelled Ego & East into one
          of the most prominent
        </p>
        <p>
          The Lebanese sisters and business partners have crafted an innovative
          approach to talent management,
        </p>
        <h1>
          We connect top global luxury, beauty and fashion brands with the most
          compelling celebrities, actors, musicians, creatives and influencers
          in the Middle East – and beyond.
        </h1>
      </div>
    </section>
  );
}
