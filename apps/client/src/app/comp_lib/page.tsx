import {
  Accordion,
  AlertDialog,
  AspectRatio,
  Button,
  Checkbox,
  ContextMenu,
  Dialog,
  DropdownMenu,
  FieldInputText,
  Flex,
  Icon,
  InputText,
  Menubar,
  Scroll,
  Text,
} from "@ui";
import React from "react";

export default function Page() {
  return (
    <Flex
      p="4"
      grow="1"
      align="center"
      style={{
        position: "relative",
      }}
    >
      <Scroll>
        <Flex px="7" py="4" gap="8">
          <PaletteShowCase />

          <ButtonShowCase />

          <TextShowCase />

          {/* <ButtonShowCase />
      <InputShowCase />
      <DropdownMenuShowCase />
      <AccordionShowCase />
      <AlertDialogShowCase />
      <CheckBoxShowCase />
      <ContextMenuShowCase />
      <DialogShowCase />
      <HoverCardShowcase />
      <MenubarShowcase /> */}
        </Flex>
      </Scroll>
    </Flex>
  );
}

function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <Flex as="section" gap="3" shrink="0">
      <Text size="regular" weight="medium">
        {props.title}
      </Text>
      <Flex gap="4">{props.children}</Flex>
    </Flex>
  );
}

function PaletteShowCase() {
  const colors = [
    "neutral",
    "stone",
    "primary",
    "secondary",
    "zinc",
    "gray",
    // "slate",
    // "rose",
    // "pink",
    // "red",
    // "fuchsia",
    // "purple",
    // "violet",
    // "indigo",
    // "blue",
    // "sky",
    // "cyan",
    // "teal",
    // "green",
    // "emerald",
    // "lime",
    // "yellow",
    // "amber",
    // "orange",
  ];
  const steps = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950",
  ];

  return (
    <Section title="Section">
      <Flex w="full" gap="2">
        {colors.map((c) => (
          <Flex key={c} gap="1" direction="row">
            {steps.map((s) => (
              <Flex
                h={100}
                key={s}
                px="3"
                py="2"
                style={{
                  borderRadius: "10px",
                  background: ` var(--${c}-${s})`,
                  width: `${(1 / steps.length) * 100}%`,
                }}
              >
                <AspectRatio.Root ratio={3 / 4}>
                  <Flex direction="row" gap="3" justify="between">
                    <Text size="tiny">{c}</Text>
                    <Text size="tiny">{s}</Text>
                  </Flex>
                </AspectRatio.Root>
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
    </Section>
  );
}

function TextShowCase() {
  const sizes = [
    "title-9",
    "title-8",
    "title-7",
    "title-6",
    "title-5",
    "title-4",
    "title-3",
    "title-2",
    "title-1",
    "large",
    "regular",
    "small",
    "mini",
    "micro",
    "tiny",
  ] as const;

  return (
    <Section title="Section">
      <Flex gap="8">
        {sizes.map((size) => (
          <Flex key={size} align="start" gap="2">
            <Text size="tiny">size {size}</Text>
            <Text size={size}>Gud hjälpe Zorns mö qwickt få byx av</Text>
          </Flex>
        ))}
      </Flex>
    </Section>
  );
}

function ButtonShowCase() {
  return (
    <Section title="Button">
      <Flex align="start" gap="1">
        <Button size="1" rounded variant="primary">
          Click
        </Button>
        <Button size="2" rounded variant="primary">
          Click
        </Button>
        <Button size="3" rounded variant="primary">
          Click
        </Button>
        <Button size="4" rounded variant="primary">
          Click
        </Button>
        <Button size="5" rounded variant="primary">
          Click
        </Button>
        <Button size="6" rounded variant="primary">
          Click
        </Button>
        <Button size="7" rounded variant="primary">
          Click
        </Button>
        <Button size="8" rounded variant="primary">
          Click
        </Button>
        <Button size="9" rounded variant="primary">
          Click
        </Button>

        <Button size="1" variant="primary">
          Click
        </Button>
        <Button size="2" variant="primary">
          Click
        </Button>
        <Button size="3" variant="primary">
          Click
        </Button>
        <Button size="4" variant="primary">
          Click
        </Button>
        <Button size="5" variant="primary">
          Click
        </Button>
        <Button size="6" variant="primary">
          Click
        </Button>
        <Button size="7" variant="primary">
          Click
        </Button>
        <Button size="8" variant="primary">
          Click
        </Button>
        <Button size="9" variant="primary">
          Click
        </Button>

        <Button size="1" variant="secondary">
          Click
        </Button>
        <Button size="2" variant="secondary">
          Click
        </Button>
        <Button size="3" variant="secondary">
          Click
        </Button>
        <Button size="4" variant="secondary">
          Click
        </Button>
        <Button size="5" variant="secondary">
          Click
        </Button>
        <Button size="6" variant="secondary">
          Click
        </Button>
        <Button size="7" variant="secondary">
          Click
        </Button>
        <Button size="8" variant="secondary">
          Click
        </Button>
        <Button size="9" variant="secondary">
          Click
        </Button>

        <Button size="1" variant="tertiary">
          Click
        </Button>
        <Button size="2" variant="tertiary">
          Click
        </Button>
        <Button size="3" variant="tertiary">
          Click
        </Button>
        <Button size="4" variant="tertiary">
          Click
        </Button>
        <Button size="5" variant="tertiary">
          Click
        </Button>
        <Button size="6" variant="tertiary">
          Click
        </Button>
        <Button size="7" variant="tertiary">
          Click
        </Button>
        <Button size="8" variant="tertiary">
          Click
        </Button>
        <Button size="9" variant="tertiary">
          Click
        </Button>
      </Flex>
    </Section>
  );
}

function InputShowCase() {
  return (
    <Section title="Input">
      <FieldInputText label="label" placeholder="placeholder" />
    </Section>
  );
}

function DropdownMenuShowCase() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <Section title="Dropdown Menu">
      <Flex align="start">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button>Open</Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content alignOffset={2}>
            <DropdownMenu.Item>
              New Tab <div className="RightSlot">⌘+T</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              New Window <div className="RightSlot">⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item disabled>
              New Private Window <div className="RightSlot">⇧+⌘+N</div>
            </DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>
                More Tools
                <div className="RightSlot">{">"}</div>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent sideOffset={2} alignOffset={-5}>
                  <DropdownMenu.Item>
                    Save Page As… <div className="RightSlot">⌘+S</div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>Create Shortcut…</DropdownMenu.Item>
                  <DropdownMenu.Item>Name Window…</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />

            <DropdownMenu.CheckboxItem
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            >
              <DropdownMenu.ItemIndicator>
                <Icon />
              </DropdownMenu.ItemIndicator>
              Show Bookmarks <div className="RightSlot">⌘+B</div>
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            >
              <DropdownMenu.ItemIndicator>
                <Icon />
              </DropdownMenu.ItemIndicator>
              Show Full URLs
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.Separator />

            <DropdownMenu.Label>People</DropdownMenu.Label>
            <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenu.RadioItem value="pedro">
                <DropdownMenu.ItemIndicator>
                  <Icon />
                </DropdownMenu.ItemIndicator>
                Pedro Duarte
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="colm">
                <DropdownMenu.ItemIndicator>
                  <Icon />
                </DropdownMenu.ItemIndicator>
                Colm Tuite
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    </Section>
  );
}

function AccordionShowCase() {
  return (
    <Section title="Input">
      <Accordion.Root type="single" defaultValue="item-1" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger>Click me</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <Text>Content</Text>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Header>
            <Accordion.Trigger>Click me</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <Text>Content</Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Section>
  );
}

function AlertDialogShowCase() {
  return (
    <Section title="Alert Dialog">
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <Button>Open Alert Dialog</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Description>
          <Flex gap="4">
            <AlertDialog.Cancel asChild>
              <Button variant="secondary">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button variant="primary">Yes, delete account</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Section>
  );
}

function CheckBoxShowCase() {
  return (
    <Section title="Checkbox">
      <Checkbox.Root defaultChecked id="c1">
        <Checkbox.Indicator>c</Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor="c1">Accept terms and conditions.</label>
    </Section>
  );
}

function ContextMenuShowCase() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <Section title="Context Menu">
      <ContextMenu.Root>
        <ContextMenu.Trigger>Right-click here.</ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Content>
            <ContextMenu.Item>
              Back <div>⌘+[</div>
            </ContextMenu.Item>
            <ContextMenu.Item disabled>
              Forward <div>⌘+]</div>
            </ContextMenu.Item>
            <ContextMenu.Item>
              Reload <div>⌘+R</div>
            </ContextMenu.Item>
            <ContextMenu.Sub>
              <ContextMenu.SubTrigger>
                More Tools
                <div>
                  <Icon />
                </div>
              </ContextMenu.SubTrigger>
              <ContextMenu.Portal>
                <ContextMenu.SubContent sideOffset={2} alignOffset={-5}>
                  <ContextMenu.Item>
                    Save Page As… <div>⌘+S</div>
                  </ContextMenu.Item>
                  <ContextMenu.Item>Create Shortcut…</ContextMenu.Item>
                  <ContextMenu.Item>Name Window…</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Developer Tools</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Portal>
            </ContextMenu.Sub>

            <ContextMenu.Separator />

            <ContextMenu.CheckboxItem
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            >
              <ContextMenu.ItemIndicator>
                <Icon />
              </ContextMenu.ItemIndicator>
              Show Bookmarks <div>⌘+B</div>
            </ContextMenu.CheckboxItem>
            <ContextMenu.CheckboxItem
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            >
              <ContextMenu.ItemIndicator>
                <Icon />
              </ContextMenu.ItemIndicator>
              Show Full URLs
            </ContextMenu.CheckboxItem>

            <ContextMenu.Separator />

            <ContextMenu.Label>People</ContextMenu.Label>
            <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
              <ContextMenu.RadioItem value="pedro">
                <ContextMenu.ItemIndicator>
                  <Icon />
                </ContextMenu.ItemIndicator>
                Pedro Duarte
              </ContextMenu.RadioItem>
              <ContextMenu.RadioItem value="colm">
                <ContextMenu.ItemIndicator>
                  <Icon />
                </ContextMenu.ItemIndicator>
                Colm Tuite
              </ContextMenu.RadioItem>
            </ContextMenu.RadioGroup>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    </Section>
  );
}

function DialogShowCase() {
  return (
    <Section title="Dialog">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>
            This is a dialog description. You can put any content you want in
            here.
          </Dialog.Description>
          <Flex gap="4">
            <Dialog.Close asChild>
              <Button variant="secondary">Cancel</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button variant="primary">Action</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Section>
  );
}

function HoverCardShowcase() {
  return (
    <Section title="Dialog">
      <div />
    </Section>
  );
}

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

function MenubarShowcase() {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <Section title="Menubar">
      <Menubar.Root className="MenubarRoot">
        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">File</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-3}
            >
              <Menubar.Item className="MenubarItem">
                New Tab <div className="RightSlot">⌘ T</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem">
                New Window <div className="RightSlot">⌘ N</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem" disabled>
                New Incognito Window
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Sub>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                  Share
                  <div className="RightSlot">
                    <Icon />
                  </div>
                </Menubar.SubTrigger>
                <Menubar.Portal>
                  <Menubar.SubContent
                    className="MenubarSubContent"
                    alignOffset={-5}
                  >
                    <Menubar.Item className="MenubarItem">
                      Email Link
                    </Menubar.Item>
                    <Menubar.Item className="MenubarItem">
                      Messages
                    </Menubar.Item>
                    <Menubar.Item className="MenubarItem">Notes</Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem">
                Print… <div className="RightSlot">⌘ P</div>
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">Edit</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-3}
            >
              <Menubar.Item className="MenubarItem">
                Undo <div className="RightSlot">⌘ Z</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem">
                Redo <div className="RightSlot">⇧ ⌘ Z</div>
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Sub>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                  Find
                  <div className="RightSlot">
                    <Icon />
                  </div>
                </Menubar.SubTrigger>

                <Menubar.Portal>
                  <Menubar.SubContent
                    className="MenubarSubContent"
                    alignOffset={-5}
                  >
                    <Menubar.Item className="MenubarItem">
                      Search the web…
                    </Menubar.Item>
                    <Menubar.Separator className="MenubarSeparator" />
                    <Menubar.Item className="MenubarItem">Find…</Menubar.Item>
                    <Menubar.Item className="MenubarItem">
                      Find Next
                    </Menubar.Item>
                    <Menubar.Item className="MenubarItem">
                      Find Previous
                    </Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem">Cut</Menubar.Item>
              <Menubar.Item className="MenubarItem">Copy</Menubar.Item>
              <Menubar.Item className="MenubarItem">Paste</Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">View</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-14}
            >
              {CHECK_ITEMS.map((item) => (
                <Menubar.CheckboxItem
                  className="MenubarCheckboxItem inset"
                  key={item}
                  checked={checkedSelection.includes(item)}
                  onCheckedChange={() =>
                    setCheckedSelection((current) =>
                      current.includes(item)
                        ? current.filter((el) => el !== item)
                        : current.concat(item)
                    )
                  }
                >
                  <Menubar.ItemIndicator className="MenubarItemIndicator">
                    <Icon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.CheckboxItem>
              ))}
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem inset">
                Reload <div className="RightSlot">⌘ R</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem inset" disabled>
                Force Reload <div className="RightSlot">⇧ ⌘ R</div>
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem inset">
                Toggle Fullscreen
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem inset">
                Hide Sidebar
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">Profiles</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-14}
            >
              <Menubar.RadioGroup
                value={radioSelection}
                onValueChange={setRadioSelection}
              >
                {RADIO_ITEMS.map((item) => (
                  <Menubar.RadioItem
                    className="MenubarRadioItem inset"
                    key={item}
                    value={item}
                  >
                    <Menubar.ItemIndicator className="MenubarItemIndicator">
                      <Icon />
                    </Menubar.ItemIndicator>
                    {item}
                  </Menubar.RadioItem>
                ))}
                <Menubar.Separator className="MenubarSeparator" />
                <Menubar.Item className="MenubarItem inset">Edit…</Menubar.Item>
                <Menubar.Separator className="MenubarSeparator" />
                <Menubar.Item className="MenubarItem inset">
                  Add Profile…
                </Menubar.Item>
              </Menubar.RadioGroup>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </Section>
  );
}
