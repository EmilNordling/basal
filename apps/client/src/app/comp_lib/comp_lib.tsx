import {
  Accordion,
  AlertDialog,
  Button,
  Checkbox,
  ContextMenu,
  Dialog,
  DropdownMenu,
  Flex,
  Icon,
  InputText,
  Menubar,
  Text,
} from "@ui";
import React from "react";

export function CompLib() {
  return (
    <Flex p="8" gap="9">
      <TextShowCase />
      <ButtonShowCase />
      <InputShowCase />
      <DropdownMenuShowCase />
      <AccordionShowCase />
      <AlertDialogShowCase />
      <CheckBoxShowCase />
      <ContextMenuShowCase />
      <DialogShowCase />
      <HoverCardShowcase />
      <MenubarShowcase />
    </Flex>
  );
}

function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <Flex as="section" gap="3">
      <Text size="6" weight="medium">
        {props.title}
      </Text>
      <Flex gap="4">{props.children}</Flex>
    </Flex>
  );
}

function TextShowCase() {
  const sizes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

  return (
    <Section title="Section">
      {sizes.map((size) => (
        <Flex key={size} direction="row" align="center" gap="4">
          <Text size="2">size {size}</Text>
          <Text size={size}>The quick brown fox jumped over the lazy dog</Text>
        </Flex>
      ))}
    </Section>
  );
}

function ButtonShowCase() {
  return (
    <Section title="Button">
      <Button>Click</Button>
    </Section>
  );
}

function InputShowCase() {
  return (
    <Section title="Input">
      <InputText label="label" placeholder="placeholder" />
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
