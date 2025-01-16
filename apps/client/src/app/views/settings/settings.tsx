import { Flex, Form, Scroll, Text } from "@ui";

export function Settings() {
  return (
    <Flex
      grow="1"
      align="center"
      style={{
        position: "relative",
      }}
    >
      <Scroll>
        <Flex
          w="100%"
          my="9"
          px="4"
          style={{
            maxWidth: "640px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          gap="6"
        >
          <Text size="6">Settings</Text>

          <Section />
        </Flex>
      </Scroll>
    </Flex>
  );
}

function Section() {
  return (
    <Flex gap="4">
      <Text size="3">General</Text>

      <Flex
        py="3"
        px="4"
        cr="2"
        style={{
          background: "#fff",
          border: "0.5px solid var(--background-border)",
        }}
      >
        <Text size="2" weight="medium">
          General
        </Text>
        <Text size="2">General</Text>

        <Form.Root></Form.Root>
      </Flex>
    </Flex>
  );
}
