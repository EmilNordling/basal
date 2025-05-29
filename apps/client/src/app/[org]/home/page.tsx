import { ActionBar } from "@component/action_bar";
import { Flex, Scroll } from "@ui";

export default function Page() {
  "use container";

  return (
    <Flex grow="1">
      <ActionBar title="Home" />

      <Flex grow="1">
        <Flex
          grow="1"
          p="4"
          style={{
            position: "relative",
          }}
        >
          <Scroll classNames="wox-flex">home</Scroll>
        </Flex>
      </Flex>
    </Flex>
  );
}
