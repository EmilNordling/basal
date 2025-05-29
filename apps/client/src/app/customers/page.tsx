import {
  Button,
  DropdownMenu,
  Flex,
  Icon,
  IconButton,
  Scroll,
  Table,
  Text,
} from "@ui";

export default function Page() {
  "use container";

  return (
    <Flex grow="1">
      <TopBar />

      <Flex
        pr="5"
        pl="4"
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
        <Button size="3">
          <Icon type="ListFilter" strokeWidth={1.5} size={18} /> filter
        </Button>

        <Flex direction="row" gap="2"></Flex>
      </Flex>

      <Flex
        grow="1"
        style={{
          position: "relative",
          background: "var(--background-foreground)",
        }}
      >
        <Scroll padding>
          <Flex grow>
            <Table.Root
              style={{
                width: "100%",
              }}
            >
              <Table.Header>
                <Table.Row>
                  <Table.Head>
                    <Flex px="3">
                      <Text size="mini" weight="medium">
                        Email
                      </Text>
                    </Flex>
                  </Table.Head>
                  <Table.Head>
                    <Flex pl="3">
                      <Text size="mini" weight="medium">
                        Name
                      </Text>
                    </Flex>
                  </Table.Head>
                  <Table.Head>
                    <Flex pl="3">
                      <Text size="mini" weight="medium">
                        Account
                      </Text>
                    </Flex>
                  </Table.Head>
                  <Table.Head>
                    <Flex pl="3">
                      <Text size="mini" weight="medium">
                        Created
                      </Text>
                    </Flex>
                  </Table.Head>
                  <Table.Head style={{ width: "24px" }}>
                    <div />
                  </Table.Head>
                </Table.Row>
              </Table.Header>

              <Row />
              <Row />
              <Row />
              <Row />
            </Table.Root>
          </Flex>
        </Scroll>
        <Flex grow background="background-background" justify="end">
          <Flex px="3">
            <Text size="small">qwe</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function Row() {
  function handleClick() {}

  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Flex px="3">
            <Text size="mini">name</Text>
          </Flex>
        </Table.Cell>
        <Table.Cell>
          <Flex pl="3">
            <Text size="mini">name</Text>
          </Flex>
        </Table.Cell>
        <Table.Cell>
          <Flex pl="3">
            <Text size="mini">name</Text>
          </Flex>
        </Table.Cell>
        <Table.Cell>
          <Flex pl="3">
            <Text size="mini">name</Text>
          </Flex>
        </Table.Cell>
        <Table.Cell>
          <Flex pl="3">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <IconButton icon="Ellipsis" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                <DropdownMenu.Item onClick={handleClick}>
                  <Text size="small">Delete...</Text>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}

function TopBar() {
  function handleClick() {
    console.log("Add new case file");
  }

  return (
    <Flex
      pl="6"
      pr="4"
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
        Customers
      </Text>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton icon="EllipsisVertical" size="5" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item onClick={handleClick}>
            <Text size="small">Add new</Text>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );
}
