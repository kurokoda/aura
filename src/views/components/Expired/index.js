// Globals
import "./styles.scss";
import React from "react";

// Component
const Expired = () => {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
};

export { Expired };
