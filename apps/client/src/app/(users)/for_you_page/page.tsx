import { Flex } from "@ui";

export default function Page() {
  "use container";

  return (
    <Flex grow="1">
      <Flex direction="row" py="2" gap="1">
        <Flex
          w="9"
          h="9"
          cr="9"
          style={{
            background: "var(--neutral-200)",
          }}
        ></Flex>
        <Flex
          w="9"
          h="9"
          cr="9"
          style={{
            background: "var(--neutral-200)",
          }}
        ></Flex>
      </Flex>
    </Flex>
  );
}
