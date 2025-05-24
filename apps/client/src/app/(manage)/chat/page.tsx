import { RichTextarea } from "@component/rich_textarea/rich_textarea";
import { DropdownMenu, Flex, IconButton, Text } from "@ui";

export default function Page() {
  "use container";

  return (
    <Flex grow="1">
      <TopBar />

      <Flex grow="1">
        <Flex grow="1" p="4">
          <Flex>
            <Text size="regular">qwe</Text>
          </Flex>
        </Flex>

        <Flex
          style={{
            minHeight: "80px",
            borderTop: "0.5px solid var(--background-border)",
          }}
        >
          <RichTextarea />
        </Flex>
      </Flex>
    </Flex>
  );
}

function TopBar() {
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
        Chat
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
