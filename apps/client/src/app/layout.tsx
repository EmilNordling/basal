import { Outlet } from "react-router-dom";
import { Flex, Text } from "@ui";
import { AppSideBar } from "@component/navbar";

export function Desktop() {
  "use container";

  return (
    <Flex direction="row" h="full">
      <Flex h="full" w={244} px="4" py="2">
        <AppSideBar />
      </Flex>

      <Flex py="2" pr="2" grow="1">
        <Flex
          grow="1"
          cr="1"
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
  );
}
