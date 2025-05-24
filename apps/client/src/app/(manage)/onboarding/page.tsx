import { Flex, Form, InputText, Scroll, Separator, Text } from "@ui";

export default function Page() {
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
          <Form.Root>
            <Separator.Root />
            <InputText direction="horizontal" label="email" />
            <Separator.Root />
            <InputText
              name="firstName"
              direction="horizontal"
              label="FirstName"
            />

            <Flex direction="row" justify="end">
              <Form.Button>Save</Form.Button>
            </Flex>
          </Form.Root>
        </Flex>
      </Scroll>
    </Flex>
  );
}
