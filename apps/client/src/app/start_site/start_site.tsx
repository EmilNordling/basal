import { Flex, Text } from "@ui";

export function StartSite() {
  return (
    <Flex grow="1">
      <Flex
        p="4"
        style={{
          borderBottom: "1px solid var(--background-border)",
        }}
      >
        <Text size="regular" weight="medium">
          Logbook
        </Text>
      </Flex>

      <Flex p="4">
        <Text>Start</Text>
      </Flex>
    </Flex>
  );
}
