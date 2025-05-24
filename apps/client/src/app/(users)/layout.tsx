import { Outlet } from "react-router-dom";
import { Flex } from "@ui";
import { AppSideBar } from "@component/navbar";
import { useResolve } from "@wox-team/wox-inject";
import { UniversalUiStore } from "internal/ui/universal_ui_store";
import "../../../../../packages/ui/style_primitives/app_feel.css";

export function UserDesktop() {
  "use container";

  const universalUiStore = useResolve(UniversalUiStore);

  return (
    <Flex w="full" h="full">
      <Flex direction="row" grow>
        <Flex grow="1" px="1" pb="1">
          <Flex
            grow="1"
            cr="2"
            style={{
              background: "var(--background-background)",
              border: "0.5px solid var(--background-border)",
              overflow: "hidden",
            }}
          >
            <Flex>
              <Outlet />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
