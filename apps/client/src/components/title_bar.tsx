import { css } from "@pigment-css/react";
import { Flex } from "../../../../packages/ui";

const styledTitleBar = css({
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 2,
  height: "39px",
  padding: "0 8px",
});

const styledGhost = css({
  width: "11px",
  height: "11px",
  background: "red",
  borderRadius: "9999px",
});

export function TitleBar() {
  return (
    <Flex className={styledTitleBar} direction="row" data-tauri-drag-region>
      <Flex direction="row" gap={9} py="2">
        <div className={styledGhost} />
        <div className={styledGhost} />
        <div className={styledGhost} />
      </Flex>
    </Flex>
  );
}
