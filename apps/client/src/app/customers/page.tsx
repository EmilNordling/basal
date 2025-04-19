import {
  Button,
  DropdownMenu,
  Flex,
  Form,
  IconButton,
  InputText,
  Scroll,
  Separator,
  Table,
  Text,
} from "@ui";

export default function Page() {
  "use container";

  return (
    <Flex grow="1">
      <TopBar />

      <Flex
        px="4"
        py="2"
        w="full"
        direction="row"
        align="center"
        justify="between"
        style={{
          borderBottom: "0.5px solid var(--background-border)",
          background: "var(--background-background)",
        }}
      >
        <Button>Add filter</Button>

        <Flex direction="row" gap="2">
          <InputText hideLabel label="Search" placeholder="Search" />
          <IconButton icon="FolderOpenDot" />
        </Flex>
      </Flex>

      <Flex grow="1">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head>
                <Text size="regular" weight="medium">
                  Email
                </Text>
              </Table.Head>
              <Table.Head>
                <Text size="regular" weight="medium">
                  Name
                </Text>
              </Table.Head>
              <Table.Head>
                <Text size="regular" weight="medium">
                  Account
                </Text>
              </Table.Head>
              <Table.Head>
                <Text size="regular" weight="medium">
                  Created
                </Text>
              </Table.Head>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Text size="regular">name</Text>
              </Table.Cell>
              <Table.Cell>
                <Text size="regular">name</Text>
              </Table.Cell>
              <Table.Cell>
                <Text size="regular">name</Text>
              </Table.Cell>
              <Table.Cell>
                <Text size="regular">name</Text>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
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
      <Text size="regular">Customers</Text>
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
