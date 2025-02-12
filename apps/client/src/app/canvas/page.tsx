import { ListingService } from "internal/domain/listing/listing_service";
import {
  Flex,
  Form,
  InputText,
  Scroll,
  Separator,
  Text,
  VisuallyHidden,
} from "@ui";
import { useResolve } from "@wox-team/wox-inject";
import { useParams } from "react-router-dom";
import { useRef } from "react";

export function Page() {
  "use container";

  const { id } = useParams();
  const listingService = useResolve(ListingService);
  const caseFile = listingService.get(id ?? "-");

  return (
    <Flex grow="1" direction="row">
      <Flex
        grow
        align="center"
        style={{
          position: "relative",
        }}
      >
        <Flex
          px="4"
          w="full"
          h={40}
          direction="row"
          align="center"
          style={{
            borderBottom: "0.5px solid var(--background-border)",
            background: "var(--background-background)",
            zIndex: 1,
          }}
        >
          <Text size="2">qwe</Text>
        </Flex>
        <Scroll padding>
          <Flex
            w="100%"
            my="9"
            px="4"
            gap="6"
            cr="1"
            style={{
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <Flex gap="4" direction="row">
              <Flex
                grow
                p="2"
                height={250}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow:
                    "0 1px 6px 1px rgba(0, 0, 0, 0.03 ), 0 0 1px 1px rgba(0, 0, 0, 0.07)",
                }}
              >
                qweqweqweqwe
              </Flex>
              <Flex
                grow
                p="2"
                height={250}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow:
                    "0 1px 6px 1px rgba(0, 0, 0, 0.03 ), 0 0 1px 1px rgba(0, 0, 0, 0.07)",
                }}
              >
                qweqweqweqwe
              </Flex>
            </Flex>
            <Flex gap="4" direction="row">
              <Flex
                grow
                p="2"
                height={250}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow:
                    "0 1px 6px 1px rgba(0, 0, 0, 0.03 ), 0 0 1px 1px rgba(0, 0, 0, 0.07)",
                }}
              >
                qweqweqweqwe
              </Flex>
              <Flex
                grow
                p="2"
                height={250}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow:
                    "0 1px 6px 1px rgba(0, 0, 0, 0.03 ), 0 0 1px 1px rgba(0, 0, 0, 0.07)",
                }}
              >
                qweqweqweqwe
              </Flex>
            </Flex>
            <Flex gap="4" direction="row">
              <Flex
                grow
                p="2"
                height={250}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow:
                    "0 1px 6px 1px rgba(0, 0, 0, 0.03 ), 0 0 1px 1px rgba(0, 0, 0, 0.07)",
                }}
              >
                qweqweqweqwe
              </Flex>
              <Flex
                grow
                p="2"
                height={250}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow:
                    "0 1px 6px 1px rgba(0, 0, 0, 0.03 ), 0 0 1px 1px rgba(0, 0, 0, 0.07)",
                }}
              >
                qweqweqweqwe
              </Flex>
            </Flex>
          </Flex>
        </Scroll>
      </Flex>
    </Flex>
  );
}

function FileName(props: { defaultValue: string }) {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit() {
    console.log("sub");
  }

  function handleBlur(_: React.FocusEvent<HTMLInputElement>) {
    formRef.current?.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  }

  return (
    <Form.Root ref={formRef} onSubmit={handleSubmit}>
      <InputText
        label="name"
        variant="ghost"
        hideLabel
        defaultValue={props.defaultValue}
        onBlur={handleBlur}
      />

      <VisuallyHidden>
        <Form.Button>Save filename</Form.Button>
      </VisuallyHidden>
    </Form.Root>
  );
}
