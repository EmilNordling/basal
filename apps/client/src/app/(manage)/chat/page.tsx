import { ActionBar } from "@component/action_bar";
import { RichTextarea } from "@component/rich_textarea/rich_textarea";
import { signal } from "@preact/signals-react";
import { Flex, IconButton, Scroll, Text } from "@ui";
import { Injectable, useResolve } from "@wox-team/wox-inject";
import { useEffect } from "react";

export default function Page() {
  "use container";

  const c = useResolve(Controller);

  useEffect(() => {
    c.load();
  }, [c]);

  return (
    <Flex grow="1">
      <ActionBar title={c.room.name} />

      <Flex grow="1">
        <Flex
          grow="1"
          p="4"
          style={{
            position: "relative",
          }}
        >
          <Scroll classNames="wox-flex justify-end">
            <MessageList />
          </Scroll>
        </Flex>

        <Promt />
      </Flex>
    </Flex>
  );
}

function MessageList() {
  const c = useResolve(Controller);

  return (
    <ol>
      {c.pages.value.map((x) => (
        <MessageWindow key={x.id} data={x} />
      ))}
    </ol>
  );
}

interface MessageWindowProps {
  data: Page;
}

function MessageWindow(props: MessageWindowProps) {
  return (
    <>
      {props.data.messages.map((x) => (
        <Message key={x.id} data={x} />
      ))}
    </>
  );
}

interface MessageProps {
  data: Message;
}

function Message(props: MessageProps) {
  return (
    <Flex as="li" px="4" py="2" direction="row" gap="3" className="hover:bg">
      <Flex>
        <Flex
          w="5"
          h="5"
          style={{
            backgroundColor: "var(--stone-400)",
          }}
          cr="9"
        />
      </Flex>
      <Flex gap="1">
        <Text
          size="mini"
          style={{
            color: "var(--stone-500)",
          }}
        >
          {props.data.user}
        </Text>
        <Text size="regular">{props.data.text}</Text>
      </Flex>
    </Flex>
  );
}

function Promt() {
  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit} style={{ display: "contents" }}>
      <Flex
        direction="row"
        align="end"
        style={{
          borderTop: "0.5px solid var(--background-border)",
        }}
      >
        <Flex grow>
          <RichTextarea />
        </Flex>
        <Flex pr="1" pb="1">
          <IconButton type="submit" icon="Send">
            Send
          </IconButton>
        </Flex>
      </Flex>
    </form>
  );
}

@Injectable()
class Controller {
  room = {
    id: crypto.randomUUID(),
    name: "room#1",
  };

  pages = signal<Page[]>([]);

  load() {
    this.pages.value = [
      {
        id: crypto.randomUUID(),
        messages: [
          {
            id: crypto.randomUUID(),
            user: "Alice",
            text: "Hey there! How's your day going?",
          },
          {
            id: crypto.randomUUID(),
            user: "Bob",
            text: "Pretty good! Just finished that project we were working on.",
          },
          {
            id: crypto.randomUUID(),
            user: "Alice",
            text: "That's awesome! Did you run into any issues with the API integration?",
          },
          {
            id: crypto.randomUUID(),
            user: "Bob",
            text: "A few small hiccups, but nothing we couldn't handle. The documentation was actually helpful for once!",
          },
          {
            id: crypto.randomUUID(),
            user: "Alice",
            text: "That's a rare win! Should we schedule a quick call tomorrow to discuss next steps?",
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        messages: [
          {
            id: crypto.randomUUID(),
            user: "Carol",
            text: "Hi team! Just wanted to check in on the progress for the client presentation.",
          },
          {
            id: crypto.randomUUID(),
            user: "Dave",
            text: "I've finished the slides for the first section. Need another day for the metrics portion.",
          },
          {
            id: crypto.randomUUID(),
            user: "Carol",
            text: "Sounds good. Can you share what you have so far? I'd like to review it.",
          },
          {
            id: crypto.randomUUID(),
            user: "Dave",
            text: "Just uploaded to the shared drive. Let me know if you have any feedback!",
          },
          {
            id: crypto.randomUUID(),
            user: "Eve",
            text: "I can help with the metrics portion if needed. I have some charts from the previous quarter we could adapt.",
          },
          {
            id: crypto.randomUUID(),
            user: "Carol",
            text: "That would be fantastic, Eve! Let's sync up this afternoon.",
          },
        ],
      },
    ];
  }
}

interface Page {
  id: string;
  messages: Message[];
}

interface Message {
  id: string;
  user: string;
  text: string;
}
