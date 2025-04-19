import { Outlet } from "react-router-dom";
import { Flex } from "@ui";
import { AppSideBar } from "@component/navbar";
import { useResolve } from "@wox-team/wox-inject";
import { UniversalUiStore } from "internal/ui/universal_ui_store";
import "../../../../packages/ui/style_primitives/app_feel.css";

export function Desktop() {
  "use container";

  const universalUiStore = useResolve(UniversalUiStore);

  return (
    <Flex w="full" h="full">
      <Flex
        px="4"
        w="full"
        h={39}
        direction="row"
        align="center"
        shrink="0"
        style={{
          background: "var(--background-foreground)",
          zIndex: 1,
        }}
      ></Flex>
      <Flex direction="row" grow>
        {universalUiStore.navbarIsOpen.value ? (
          <Flex
            h="full"
            w={220}
            pl="2"
            pr="1"
            style={{
              background: "var(--background-foreground)",
            }}
          >
            <AppSideBar />
          </Flex>
        ) : null}

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
            <Outlet />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
