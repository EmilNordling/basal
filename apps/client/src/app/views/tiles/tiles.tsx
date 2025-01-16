import { ListingService } from "@application/internal/domain/listing/listing_service";
import { type TileModel } from "@application/internal/domain/models/tile_model";
import { Flex, Icon, Link, PrimitiveButton, Scroll, Text } from "@ui";
import { useResolve } from "@wox-team/wox-inject";
import { useNavigate } from "react-router-dom";

export function Tiles() {
  return (
    <Flex
      grow="1"
      align="center"
      style={{
        position: "relative",
      }}
    >
      <Scroll>
        <Panel title={"December 2024"}>
          <AddNewTile />
        </Panel>
      </Scroll>
    </Flex>
  );
}

interface PanelProps {
  title: string;
  children?: React.ReactNode;
}

function Panel(props: PanelProps) {
  const listingService = useResolve(ListingService);

  return (
    <Flex w="100%" my="9" gap="6">
      <Flex px="4">
        <Text size="6">{props.title}</Text>
      </Flex>

      <Flex
        style={{
          position: "relative",
          height: 360,
        }}
      >
        <Scroll orientation="horizontal">
          <Flex direction="row" gap="2" pl="4">
            {props.children}
            {listingService.tiles.value.map((x) => (
              <Tile key={x.id} model={x} />
            ))}
          </Flex>
        </Scroll>
      </Flex>
    </Flex>
  );
}

function AddNewTile() {
  const navigate = useNavigate();
  const listingService = useResolve(ListingService);

  async function handleClick() {
    const result = await listingService.createNewTile();
    if (result.err) return;

    navigate(result.ok);
  }

  return (
    <PrimitiveButton onClick={handleClick}>
      <Flex
        w={200}
        h={340}
        direction="row"
        align="center"
        justify="center"
        style={{
          border: "0.5px solid #ddd",
          background: "rgb(247, 247, 247)",
          overflow: "hidden",
        }}
        cr="4"
        className="hover:bg"
      >
        <Icon type="Plus" size={30} strokeWidth={1} />
      </Flex>
    </PrimitiveButton>
  );
}

interface TileProps {
  model: TileModel;
}

function Tile(props: TileProps) {
  return (
    <Link to={props.model.id}>
      <Flex
        w={200}
        h={340}
        direction="row"
        style={{
          border: "0.5px solid #ddd",
          backgroundImage:
            "radial-gradient(circle at center center, #000, #fff), repeating-radial-gradient(circle at center center, #000, #fff, 10px, transparent 40px, transparent 10px)",
          backgroundBlendMode: "multiply",
          overflow: "hidden",
        }}
        cr="4"
      >
        <Flex
          h="100%"
          w="8"
          align="center"
          p="4"
          style={{
            background: "#fff",
            borderRight: "0.5px solid #ddd",
          }}
        >
          <Text writingMode="vertical-lr">{props.model.title}</Text>
        </Flex>

        <Flex
          h="100%"
          grow="1"
          p="4"
          style={{
            background: "rgba(248,248,252,.85)",
          }}
        />

        <Flex
          h="100%"
          w="8"
          style={{
            background: "#fff",
            borderLeft: "0.5px solid #ddd",
          }}
        />
      </Flex>
    </Link>
  );
}
