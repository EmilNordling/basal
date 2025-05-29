import {
  DropdownMenu,
  Flex,
  Form,
  IconButton,
  InputText,
  Scroll,
  Separator,
  Text,
} from "@ui";

export default function Settings() {
  return (
    <Flex grow="1">
      <TopBar title="Settings" />

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
            <Section />
          </Flex>
        </Scroll>
      </Flex>
    </Flex>
  );
}

function Section() {
  return (
    <Flex gap="4">
      <Text size="regular">General</Text>

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
          <Text size="regular" weight="medium">
            General
          </Text>
          <Text size="regular">General</Text>
        </Flex>

        <Flex gap="4">
          <Form.Root>
            <Separator.Root />
            <InputText
              name="personalNumber"
              direction="horizontal"
              label="National Identity Number"
              defaultValue={"no-nin"}
            />
            <Separator.Root />
            <InputText
              name="firstName"
              direction="horizontal"
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

function TopBar(props: { title: string }) {
  function handleClick() {
    console.log("Add new case file");
  }

  return (
    <Flex
      px="4"
      w="full"
      h={40}
      direction="row"
      align="center"
      justify="between"
      style={{
        borderBottom: "0.5px solid var(--background-border)",
        zIndex: 2,
        background: "var(--background-background)",
      }}
    >
      <Text
        size="mini"
        style={{
          color: "var(--neutral-600)",
        }}
      >
        {props.title}
      </Text>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton icon="EllipsisVertical" size="5" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item onClick={handleClick}>
            <Text size="regular">Add new</Text>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );
}
