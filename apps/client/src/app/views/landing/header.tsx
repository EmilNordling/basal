import styled from "@emotion/styled";
import { Button, Flex, Icon } from "@ui";
import { useScroll, useAnimation, motion } from "motion/react";
import { useEffect, useRef } from "react";

const StyledNavBar = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1082px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px 0;
  position: relative;
  box-sizing: border-box;

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

    background: linear-gradient(180deg, #fff 10%, transparent 100%);

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

const StyledLogo = styled.header`
  padding: 20px 0;
`;

export function Header() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const hasSurpassedThreshold = latest > 100;

      if (hasSurpassedThreshold) {
        controls.start("scrolled");
      } else {
        controls.start("default");
      }

      ref.current?.style.setProperty(
        "--_opacity",
        hasSurpassedThreshold ? (1).toString() : (0).toString()
      );
    });

    return () => unsubscribe(); // Clean up listener
  }, [controls, scrollY]);

  return (
    <Flex
      ref={ref}
      as={motion.header}
      animate={controls}
      variants={{
        scrolled: { translateY: -24 },
        default: { translateY: 0 },
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
      }}
      direction="row"
      justify="between"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      <StyledNavBar>
        <StyledLogo>
          <Icon type="AArrowDown" />
        </StyledLogo>

        <Button size="3">Open App</Button>
      </StyledNavBar>
    </Flex>
  );
}
