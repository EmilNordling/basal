import { styled } from "@pigment-css/react";
import { Button, Flex, Icon, Link, Separator, Text } from "@ui";
import { motion } from "motion/react";
import { Header } from "./header";

export function Landing() {
  return (
    <Flex
      grow="1"
      gap="4"
      style={{
        background: "#fff",
        minHeight: "100%",
      }}
    >
      <Header />

      <Flex
        as="section"
        justify="center"
        gap="5"
        style={{
          minHeight: "80vh",
          maxWidth: "1024px",
          width: "100%",
          margin: "0 auto",
        }}
        px="4"
      >
        <Text size="9" weight="medium">
          <AnimatedStrChunks delay={0.15}>
            This is not a product.
          </AnimatedStrChunks>
        </Text>

        <Flex
          as={motion.div}
          initial={{
            translateY: 30,
            opacity: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.75,
            ease: EASE_OUT_CUBIC,
            duration: 0.4,
          }}
          w={440}
        >
          <Text size="4">
            I created Basal to explore UI design. It’s a toy project for
            experiments, let's see where it goes.
          </Text>
        </Flex>

        <Flex
          as={motion.div}
          initial={{
            translateY: 30,
            opacity: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            ease: EASE_OUT_CUBIC,
            duration: 0.4,
          }}
          gap="3"
          direction="row"
        >
          <Button>
            <Icon type="Apple" />
            Download for X
          </Button>
          <Link to="app">
            <Button>
              <Icon type="Play" />
              Explore demo
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Flex
        as={motion.section}
        initial={{
          translateY: 30,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          ease: EASE_OUT_CUBIC,
          duration: 0.4,
        }}
        style={{
          maxWidth: "1024px",
          width: "100%",
        }}
        align="center"
        px="4"
        mx="auto"
        gap="9"
      >
        <Text size="8" weight="medium">
          Showcase with a subtitle
        </Text>

        <StyledGrid>
          <StyledLeft>qwe</StyledLeft>
          <StyledItem>qwe</StyledItem>
          <StyledItem>qwe</StyledItem>
          <StyledItem>qwe</StyledItem>
          <StyledItem>qwe</StyledItem>
        </StyledGrid>
      </Flex>

      <Flex
        style={{
          maxWidth: "1024px",
          width: "100%",
        }}
        my="9"
      >
        <Separator.Root />
      </Flex>

      <Flex
        as="section"
        style={{
          maxWidth: "1024px",
          width: "100%",
          minHeight: "70vh",
        }}
        px="4"
        mx="auto"
        gap="7"
        mb="9"
      >
        <Text size="8">Another section, more showcase</Text>
        <SectionThirds>
          <OneThird />
          <OneThird />
          <OneThird />
        </SectionThirds>
      </Flex>

      <Flex
        as="section"
        style={{
          background: "color(display-p3 0.984314 0.980392 0.976471)",
          minHeight: "70vh",
        }}
        w="full"
        gap="9"
        mb="9"
      >
        <Flex
          px="4"
          py="9"
          mx="auto"
          style={{
            maxWidth: "1024px",
            width: "100%",
          }}
        >
          <SectionGrid>
            <SectionGridItem
              title="Send & Receive"
              description="Flawless essentials. Easily send tokens and collectibles with the fewest taps, or share your wallet address by simply scanning a personalized QR code to receive new assets."
            />
            <SectionGridItem
              title="Decentralized Swaps"
              description="Trade thousands of tokens with minimal fees, 24/7. Family ensures optimal prices from various exchanges so you can acquire the tokens you want, whenever you want them."
            />
            <SectionGridItem
              title="Full NFT Support"
              description="Experience NFTs in their intended format with our full rich media support. Interact with everything, including video, audio, images, and interactive content. The best collectors manage their collections in Family."
            />
            <SectionGridItem
              title="WalletConnect Enabled"
              description="Easily access decentralized apps with WalletConnect in Family. Simply pair your wallet with the built-in scanner, and enjoy seamless connectivity to a range of powerful applications across web3."
            />
            <SectionGridItem
              title="Self-Custody"
              description="Family is committed to delivering robust security with flexibility to suit your preferences. The self-custodial wallet prioritizes your control, giving you direct access to your private keys and sensitive data at all times."
            />
            <SectionGridItem
              title="Maximum Privacy"
              description="Explore web3 on your own terms, with no compromises on privacy or revealing more than you’re comfortable with. Family works with or without an email or phone number, letting you choose the experience that’s right for you."
            />
          </SectionGrid>
        </Flex>
      </Flex>

      <Flex
        as="section"
        style={{
          maxWidth: "1024px",
          width: "100%",
          minHeight: "70vh",
        }}
        px="4"
        mx="auto"
        gap="7"
      >
        <Text size="8">Another section, more showcase</Text>
        <SectionThirds>
          <OneThird />
          <OneThird />
          <OneThird />
        </SectionThirds>
      </Flex>
    </Flex>
  );
}

function SectionGridItem(props: { title: string; description: string }) {
  return (
    <Flex gap="3">
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
    </Flex>
  );
}

const EASE_OUT_CUBIC = [0.33, 1, 0.68, 1];

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  row-gap: 34px;
  column-gap: 34px;
  grid-auto-rows: 4fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "left . ." "left . .";
`;

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  grid-row-start: left;
  grid-column-start: left;
  grid-row-end: left;
  grid-column-end: left;
  background: color(display-p3 0.984314 0.980392 0.976471);
  min-height: 60vh;
  border-radius: 16px;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  background: color(display-p3 0.984314 0.980392 0.976471);
  border-radius: 16px;
`;

const SectionThirds = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
`;

const OneThird = styled.div`
  border-radius: 16px;
  min-height: 60vh;
  background: color(display-p3 0.984314 0.980392 0.976471);
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  row-gap: 6.0625rem;
  column-gap: 5rem;
`;

function AnimatedStrChunks({
  children,
  delay,
}: {
  children: string;
  delay: number;
}): JSX.Element {
  const strChunks = children.split(" ");

  return (
    <>
      {strChunks.map((str, index) => (
        <motion.span
          style={{
            zIndex: 1,
            display: "inline-block",
            transformOrigin: "left bottom",
          }}
          transition={{
            delay: delay + 0.03 * (index + 1),
            ease: EASE_OUT_CUBIC,
            duration: 0.4 + 0.01 * (index + 1),
          }}
          key={index}
          initial={{
            translateY: 30,
            rotateX: -60,
            opacity: 0,
          }}
          animate={{
            translateY: 0,
            rotateX: 0,
            opacity: 1,
          }}
        >
          {str}
          {strChunks.length - 1 !== index ? <>&nbsp;</> : ""}
        </motion.span>
      ))}
    </>
  );
}
