// Globals
import "./styles.scss";
import React, { useEffect, useRef, useState } from "react";

// Components
import { Button } from "views/components/Button";
import { Expired } from "views/components/Expired";

import { getFormattedTime } from "services/strings";

const TIMER_DURATION = 60;

// Component
const Timer = () => {
  // Hooks - state
  const timeout = useRef(null);

  const [isTimerActive, setIsTimerActive] = useState(false);
  const [time, setTime] = useState(0);

  const onResetClick = () => {
    setTime(TIMER_DURATION);
    setIsTimerActive(false);
  };

  const onStartClick = () => {
    setIsTimerActive(true);
  };

  useEffect(() => {
    const onTimeout = () => {
      isTimerActive && setTime(time - 1);
    };

    if (isTimerActive && time > 0) {
      timeout.current = setTimeout(onTimeout, 1000);
    } else if (!isTimerActive) {
      clearTimeout(timeout.current);
    }
  }, [isTimerActive, time]);

  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">{getFormattedTime(time)}</div>
        {time <= 0 ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button onClick={onStartClick}>Start</Button>
          <Button onClick={onResetClick}>Reset</Button>
        </div>
      </div>
    </div>
  );
};

export { Timer };
