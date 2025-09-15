import { styled } from "@pigment-css/react";

const GridlineStyle = styled.div`
  --background: #ffffff;
  --color: var(--stone-300);
  --height: 1px;
  --width: 7px;
  --fade-stop: 90%;
  /* Bleed in or out from the container */
  --offset: -200px;

  position: absolute;
  width: calc(100% + var(--offset));
  height: var(--height);
  left: calc(var(--offset) / 2 * -1);

  background: linear-gradient(
    to right,
    var(--color),
    var(--color) 50%,
    transparent 0,
    transparent
  );
  background-size: var(--width) var(--height);

  /* Fade out the edges */
  mask-composite: exclude;
  -webkit-mask: linear-gradient(
      to left,
      var(--background) var(--fade-stop),
      transparent
    ),
    linear-gradient(to right, var(--background) var(--fade-stop), transparent),
    linear-gradient(black, black);
`;

export function Gridline() {
  return <GridlineStyle />;
}
