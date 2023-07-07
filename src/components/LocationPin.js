import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { useState } from "react";

export default function LocationPin({ text, lat, lng }) {
  return (
    <div className="pin">
      <Icon
        icon={locationIcon}
        className="pin-icon"
        onClick={() => {
          window.open(`https://maps.google.com/?q=${lat},${lng}`);
        }}
      />
    </div>
  );
}
