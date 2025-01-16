"use client";

import { styled } from "@pigment-css/react";
import "./scroll.css";
import * as R from "@radix-ui/react-scroll-area";
import { Fragment } from "react";

interface Props {
  children?: React.ReactNode;
  orientation?: "vertical" | "horizontal";
  padding?: boolean;
}

export function Scroll(props: Props) {
  const C = props.padding ? Padding : Fragment;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <R.Root className="ScrollRoot" type="scroll">
        <R.Viewport className="ScrollAreaViewport">{props.children}</R.Viewport>

        <C>
          <R.Scrollbar
            className="ScrollBar"
            orientation={props.orientation ?? "vertical"}
          >
            <R.Thumb className="ScrollThumb" />
          </R.Scrollbar>
        </C>
      </R.Root>
    </div>
  );
}

const Padding = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  bottom: 8px;
`;
