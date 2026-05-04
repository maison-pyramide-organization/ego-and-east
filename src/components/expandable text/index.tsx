import s from "./_s.module.scss";
import { useState } from "react";

interface Iprops {
  text: string;
  maxLength?: number;
}

export default function ExpandableText(props: Iprops) {
  const { text, maxLength = 150 } = props;
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > maxLength;

  const displayedText = expanded ? text : text.slice(0, maxLength);

  return (
    <p className={s.text}>
      {displayedText}

      {isLong && (
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? " Read less" : " Read More"}
        </button>
      )}
    </p>
  );
}
