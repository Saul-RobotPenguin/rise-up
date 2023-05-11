import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { useState } from "react";

export default function LocationPin({ text }) {
  const [hover, setHover] = useState(false);
  return (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" onClick={setHover(true)} />
      {hover && <p className="pin-text">{text}</p>}
    </div>
  );
}
