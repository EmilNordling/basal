import { Flex, Form, InputText, Scroll, Separator, Text } from "@ui";

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
        gap="4"
        style={{
          background: "#fff",
          border: "0.5px solid var(--background-border)",
        }}
      >
        <Flex>
          <Text size="2" weight="medium">
            General
          </Text>
          <Text size="2">General</Text>
        </Flex>

        <Flex gap="4">
          <Form.Root>
            <Separator.Root />
            <InputText
              name="personalNumber"
              direction="row"
              label="National Identity Number"
              defaultValue={"no-nin"}
            />
            <Separator.Root />
            <InputText
              name="firstName"
              direction="row"
              label="FirstName"
              defaultValue={"no-name"}
            />

            <Flex direction="row" justify="end">
              <Form.Button>Save</Form.Button>
            </Flex>
          </Form.Root>
        </Flex>
      </Flex>
    </Flex>
  );
}
