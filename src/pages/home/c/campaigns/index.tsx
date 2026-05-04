import { useEffect, useState } from "react";
import s from "./_s.module.scss";
import { getCampaigns } from "@/services/api";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState<any>(null);

  useEffect(() => {
    getCampaigns().then((c: any) => {
      c.sort((a, b) => a.id - b.id);
      setCampaigns(c);
    });
  }, []);

  if (!campaigns) return null;

  return (
    <section className={s.s}>
      <ul>
        {campaigns?.map((campaign) => (
          <li className={s.campaign} key={campaign.id}>
            <figure>
              <img
                src={campaign.image.fields.file.url}
                alt={`${campaign.talent} - ${campaign.brand}`}
              />
            </figure>
            <h4>
              {campaign.talent}
              <span> {campaign.brand}</span>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
