import { Outlet } from "react-router-dom";
import { Flex } from "@ui";
import { AppSideBar } from "@component/navbar";

export function Desktop() {
  "use container";

  return (
    <Flex w="full" h="full">
      <Flex
        px="4"
        w="full"
        h={39}
        direction="row"
        align="center"
        style={{
          background: "var(--background-foreground)",
          zIndex: 1,
        }}
      ></Flex>
      <Flex direction="row" grow>
        <Flex
          h="full"
          w={244}
          px="4"
          py="2"
          style={{
            background: "var(--background-foreground)",
          }}
        >
          <AppSideBar />
        </Flex>

        <Flex grow="1" pr="1" py="1">
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
