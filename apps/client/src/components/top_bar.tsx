import { PropsWithChildren } from 'react';
import { Flex } from '@ui';

function TopBarRoot(props: PropsWithChildren) {
  return (
    <Flex
      align='center'
      justify='between'
      width='100%'
      direction='row'
      height='7'
      px='4'
      gap='2'
      background='background-foreground'
      style={{
        borderBottom: `1px solid var(--background-border)`,
      }}
    >
      {props.children}
    </Flex>
  );
}

function TopBarSection(props: PropsWithChildren) {
  return (
    <Flex direction='row' gap='2'>
      {props.children}
    </Flex>
  );
}

export const TopBar = {
  Root: TopBarRoot,
  Section: TopBarSection,
} as const;
