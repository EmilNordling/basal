import { styled } from "@pigment-css/react";
import { useEffect, useRef } from "react";

const SwitchboardStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SwitchboardLight = styled.div`
  width: 1px;
  height: 1px;
  border-radius: 9999px;
  position: relative;
  transition: transform var(--transition-duration) ease;

  &:after,
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    transition: opacity var(--transition-duration) ease;
  }

  &:before {
    /* Medium */
    background: #3291ff;
    box-shadow: 0px 0px 2px 1px rgba(50, 145, 255, 0.25);
  }

  &:after {
    /* High */
    background: #ffffff;
    box-shadow: 0px 0px 1px 1px rgba(50, 145, 255, 0.8),
      0px 0px 2px 1px rgba(50, 145, 255, 0.25);
  }

  &[data-state="off"] {
    background: #707070;
  }

  &[data-state="medium"]:before {
    opacity: 1;
  }

  &[data-state="high"]:after {
    opacity: 1;
  }
`;

export function Glow() {
  const rows = 5;
  const columns = 18;
  const transitionDuration = 250;
  // Cherry-pick a few lights to animate
  const indices = [7, 15, 19, 29, 26, 34, 46, 55, 60, 67, 70, 74, 83];
  // Randomly animate between three states
  const states = ["off", "medium", "high"];

  const ref = useRef<any>();

  useEffect(() => {
    const timeoutIds: any = [];

    const interval = setInterval(() => {
      indices.forEach((index) => {
        const light = ref.current.querySelector(`[data-index="${index}"]`);

        if (!light) {
          return;
        }

        // Pick a random next state
        const nextState = states[Math.floor(Math.random() * states.length)];
        const currentState = light.dataset.state;

        const pulse =
          Math.random() > 0.2 &&
          // Make sure we only pulsate going from "off" → "medium" → "high"
          ((currentState === "off" && nextState === "high") ||
            (currentState === "off" && nextState === "medium") ||
            (currentState === "medium" && nextState === "high"));

        if (pulse) {
          // Add an arbitrary delay between 100-500ms
          function getRandomNumber(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          const delay = getRandomNumber(100, 800);

          timeoutIds.push(
            setTimeout(() => {
              light.style.transform = "scale(2)";
            }, delay)
          );

          timeoutIds.push(
            setTimeout(() => {
              light.style.transform = "scale(1)";
            }, transitionDuration + delay)
          );
        }

        // After a pulse, don't transition from "high" → "medium"
        if (currentState === "high" && nextState === "medium" && pulse) {
          light.dataset.state = "off";
        } else {
          light.dataset.state = nextState;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <SwitchboardStyle
      ref={ref}
      className="switchboard"
      style={{
        display: "grid",
        gap: `${columns}px`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {Array.from({ length: columns * rows }).map((_, i) => {
        return (
          <SwitchboardLight
            key={i}
            className="light"
            data-state="off"
            data-index={i}
            style={
              {
                "--transition-duration": `${transitionDuration}ms`,
              } as any
            }
          />
        );
      })}
    </SwitchboardStyle>
  );
}
