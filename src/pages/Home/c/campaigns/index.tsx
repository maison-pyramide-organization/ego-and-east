import s from "./_s.module.scss";

export default function Campaigns() {
  let campaigns = [] as any[];

  if (!campaigns) return;

  return (
    <section className={s.s}>
      <ul>
        {campaigns.map((campaign) => (
          <li className={s.campaign}>
            <figure>
              <img
                src={campaign.img}
                alt={`${campaign.talent} - ${campaign.brand}`}
              />
            </figure>
            <h4>
              {campaign.talent}
              <span>for {campaign.brand}</span>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
