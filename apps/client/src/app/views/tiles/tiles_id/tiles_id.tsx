import { ListingService } from "internal/domain/listing/listing_service";
import {
  RichTextarea,
  Delta,
  RichTextareaController,
} from "@component/rich_textarea/rich_textarea";
import { Flex, Scroll, Text } from "@ui";
import { useResolve } from "@wox-team/wox-inject";
import { useParams } from "react-router-dom";
import { assertIsDefined } from "../../../../utils/assert";
import { styled } from "@pigment-css/react";

export function TilesId() {
  "use container";

  const { id } = useParams();
  const listingService = useResolve(ListingService);
  const richTextareaController = useResolve(RichTextareaController);
  const tile = listingService.get(id ?? "-");

  function handleChange() {
    const content = richTextareaController.editor.peek()?.getContents();

    assertIsDefined(tile);

    tile.update(JSON.stringify(content));
  }

  return (
    <Flex
      grow="1"
      align="center"
      style={{
        position: "relative",
      }}
    >
      <StyledHeader />
      <Scroll padding>
        <Flex
          w="100%"
          my="9"
          px="4"
          gap="4"
          style={{
            maxWidth: "640px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Text size="6">{tile?.title}</Text>
          <RichTextarea.raw
            autoFocus
            defaultValue={tile?.body ?? null}
            onChange={handleChange}
          />
        </Flex>
      </Scroll>
    </Flex>
  );
}

const StyledHeader = styled.div`
  display: flex;
  height: 45px;
  padding: 0 8px;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    --extended-by: 100px;
    bottom: calc(-1 * var(--extended-by));
    top: -1px;

    --cutoff: calc(100% - var(--extended-by));

    mask-image: linear-gradient(
      to bottom,
      black 0,
      black var(--cutoff),
      transparent var(--cutoff)
    );
    -webkit-mask-image: linear-gradient(
      to bottom,
      black 0,
      black var(--cutoff),
      transparent var(--cutoff)
    );

    --blur: 15px;
    backdrop-filter: blur(var(--blur));
    -webkit-backdrop-filter: blur(var(--blur));

    background: linear-gradient(
      180deg,
      var(--background-background) 10%,
      transparent 100%
    );

    user-select: none;
    pointer-events: none;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    opacity: var(--_opacity, 0);
    background: rgba(71, 51, 51, 0.06);
  }
`;
