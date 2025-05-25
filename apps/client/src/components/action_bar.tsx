import { Flex, DropdownMenu, IconButton, Text } from "../../../../packages/ui";

interface ActionBarProps {
  title?: string;
}

export function ActionBar(props: ActionBarProps) {
  function handleClick() {
    console.log("Add new case file");
  }

  return (
    <Flex
      pl="4"
      pr="1"
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
