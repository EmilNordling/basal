import { styled } from "@pigment-css/react";
import { Flex, Text } from "@ui";

const X = styled.div`
  --grid-template-columns-sm: repeat(8, minmax(0, 1fr));
  --grid-template-rows-sm: auto;
  --grid-template-rows: repeat(8, minmax(0, 1fr));
  --gap: 2px;
  --pr: 2px;
  --pl: 2px;

  display: grid;
  grid-template-rows: var(--grid-template-rows-sm);
  grid-template-columns: var(--grid-template-columns-sm);
  grid-auto-flow: row;
  gap: var(--gap);
`;

const Z = styled.div`
  background-color: var(--background);
  min-height: 100px;
  border-radius: 4px;
`;

export function Theming() {
  return (
    <Flex grow="1" p="4">
      <X>
        <Primary />
        <GrannyApple />
        <Neutral />
        <Success />
        <Caution />
        <Danger />
        <Info />
      </X>
    </Flex>
  );
}

function Primary() {
  return (
    <>
      <Z
        style={
          {
            "--background": "var(--primary-900)",
          } as React.CSSProperties
        }
      >
        900
      </Z>
      <Z
        style={
          {
            "--background": "var(--primary-775)",
          } as React.CSSProperties
        }
      >
        775
      </Z>
      <Z
        style={
          {
            "--background": "var(--primary-675)",
          } as React.CSSProperties
        }
      >
        675
      </Z>
      <Z
        style={
          {
            "--background": "var(--primary-550)",
          } as React.CSSProperties
        }
      >
        550
      </Z>
      <Z
        style={
          {
            "--background": "var(--primary-450)",
          } as React.CSSProperties
        }
      >
        450
      </Z>
      <Z
        style={
          {
            "--background": "var(--primary-325)",
          } as React.CSSProperties
        }
      >
        325
      </Z>
      <Z
        style={
          {
            "--background": "var(--primary-225)",
          } as React.CSSProperties
        }
      >
        225
      </Z>
      <Z
        style={
          {
            "--background": "var(--primary-100)",
          } as React.CSSProperties
        }
      >
        100
      </Z>
    </>
  );
}

function GrannyApple() {
  return (
    <>
      <Z
        style={
          {
            "--background": "var(--granny-apple-900)",
          } as React.CSSProperties
        }
      >
        900
      </Z>
      <Z
        style={
          {
            "--background": "var(--granny-apple-775)",
          } as React.CSSProperties
        }
      >
        775
      </Z>
      <Z
        style={
          {
            "--background": "var(--granny-apple-675)",
          } as React.CSSProperties
        }
      >
        675
      </Z>
      <Z
        style={
          {
            "--background": "var(--granny-apple-550)",
          } as React.CSSProperties
        }
      >
        550
      </Z>
      <Z
        style={
          {
            "--background": "var(--granny-apple-450)",
          } as React.CSSProperties
        }
      >
        450
      </Z>
      <Z
        style={
          {
            "--background": "var(--granny-apple-325)",
          } as React.CSSProperties
        }
      >
        325
      </Z>
      <Z
        style={
          {
            "--background": "var(--granny-apple-225)",
          } as React.CSSProperties
        }
      >
        225
      </Z>
      <Z
        style={
          {
            "--background": "var(--granny-apple-100)",
          } as React.CSSProperties
        }
      >
        100
      </Z>
    </>
  );
}

function Neutral() {
  return (
    <>
      <Z
        style={
          {
            "--background": "var(--neutral-900)",
          } as React.CSSProperties
        }
      >
        900
      </Z>
      <Z
        style={
          {
            "--background": "var(--neutral-775)",
          } as React.CSSProperties
        }
      >
        775
      </Z>
      <Z
        style={
          {
            "--background": "var(--neutral-675)",
          } as React.CSSProperties
        }
      >
        675
      </Z>
      <Z
        style={
          {
            "--background": "var(--neutral-550)",
          } as React.CSSProperties
        }
      >
        550
      </Z>
      <Z
        style={
          {
            "--background": "var(--neutral-450)",
          } as React.CSSProperties
        }
      >
        450
      </Z>
      <Z
        style={
          {
            "--background": "var(--neutral-325)",
          } as React.CSSProperties
        }
      >
        325
      </Z>
      <Z
        style={
          {
            "--background": "var(--neutral-225)",
          } as React.CSSProperties
        }
      >
        225
      </Z>
      <Z
        style={
          {
            "--background": "var(--neutral-100)",
          } as React.CSSProperties
        }
      >
        100
      </Z>
    </>
  );
}

function Success() {
  return (
    <>
      <Z
        style={
          {
            "--background": "var(--success-900)",
          } as React.CSSProperties
        }
      >
        900
      </Z>
      <Z
        style={
          {
            "--background": "var(--success-775)",
          } as React.CSSProperties
        }
      >
        775
      </Z>
      <Z
        style={
          {
            "--background": "var(--success-675)",
          } as React.CSSProperties
        }
      >
        675
      </Z>
      <Z
        style={
          {
            "--background": "var(--success-550)",
          } as React.CSSProperties
        }
      >
        550
      </Z>
      <Z
        style={
          {
            "--background": "var(--success-450)",
          } as React.CSSProperties
        }
      >
        450
      </Z>
      <Z
        style={
          {
            "--background": "var(--success-325)",
          } as React.CSSProperties
        }
      >
        325
      </Z>
      <Z
        style={
          {
            "--background": "var(--success-225)",
          } as React.CSSProperties
        }
      >
        225
      </Z>
      <Z
        style={
          {
            "--background": "var(--success-100)",
          } as React.CSSProperties
        }
      >
        100
      </Z>
    </>
  );
}

function Caution() {
  return (
    <>
      <Z
        style={
          {
            "--background": "var(--caution-900)",
          } as React.CSSProperties
        }
      >
        900
      </Z>
      <Z
        style={
          {
            "--background": "var(--caution-775)",
          } as React.CSSProperties
        }
      >
        775
      </Z>
      <Z
        style={
          {
            "--background": "var(--caution-675)",
          } as React.CSSProperties
        }
      >
        675
      </Z>
      <Z
        style={
          {
            "--background": "var(--caution-550)",
          } as React.CSSProperties
        }
      >
        550
      </Z>
      <Z
        style={
          {
            "--background": "var(--caution-450)",
          } as React.CSSProperties
        }
      >
        450
      </Z>
      <Z
        style={
          {
            "--background": "var(--caution-325)",
          } as React.CSSProperties
        }
      >
        325
      </Z>
      <Z
        style={
          {
            "--background": "var(--caution-225)",
          } as React.CSSProperties
        }
      >
        225
      </Z>
      <Z
        style={
          {
            "--background": "var(--caution-100)",
          } as React.CSSProperties
        }
      >
        100
      </Z>
    </>
  );
}

function Danger() {
  return (
    <>
      <Z
        style={
          {
            "--background": "var(--danger-900)",
          } as React.CSSProperties
        }
      >
        900
      </Z>
      <Z
        style={
          {
            "--background": "var(--danger-775)",
          } as React.CSSProperties
        }
      >
        775
      </Z>
      <Z
        style={
          {
            "--background": "var(--danger-675)",
          } as React.CSSProperties
        }
      >
        675
      </Z>
      <Z
        style={
          {
            "--background": "var(--danger-550)",
          } as React.CSSProperties
        }
      >
        550
      </Z>
      <Z
        style={
          {
            "--background": "var(--danger-450)",
          } as React.CSSProperties
        }
      >
        450
      </Z>
      <Z
        style={
          {
            "--background": "var(--danger-325)",
          } as React.CSSProperties
        }
      >
        325
      </Z>
      <Z
        style={
          {
            "--background": "var(--danger-225)",
          } as React.CSSProperties
        }
      >
        225
      </Z>
      <Z
        style={
          {
            "--background": "var(--danger-100)",
          } as React.CSSProperties
        }
      >
        100
      </Z>
    </>
  );
}

function Info() {
  return (
    <>
      <Z
        style={
          {
            "--background": "var(--info-900)",
          } as React.CSSProperties
        }
      >
        900
      </Z>
      <Z
        style={
          {
            "--background": "var(--info-775)",
          } as React.CSSProperties
        }
      >
        775
      </Z>
      <Z
        style={
          {
            "--background": "var(--info-675)",
          } as React.CSSProperties
        }
      >
        675
      </Z>
      <Z
        style={
          {
            "--background": "var(--info-550)",
          } as React.CSSProperties
        }
      >
        550
      </Z>
      <Z
        style={
          {
            "--background": "var(--info-450)",
          } as React.CSSProperties
        }
      >
        450
      </Z>
      <Z
        style={
          {
            "--background": "var(--info-325)",
          } as React.CSSProperties
        }
      >
        325
      </Z>
      <Z
        style={
          {
            "--background": "var(--info-225)",
          } as React.CSSProperties
        }
      >
        225
      </Z>
      <Z
        style={
          {
            "--background": "var(--info-100)",
          } as React.CSSProperties
        }
      >
        100
      </Z>
    </>
  );
}
