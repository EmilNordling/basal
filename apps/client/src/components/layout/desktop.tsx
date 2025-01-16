import { Outlet } from 'react-router-dom';
import { Flex, Icon, Scroll, Text } from '@ui';

export function Desktop() {
  'use container';

  return (
    <Flex
      h='full'
      w='full'
      style={{
        position: 'relative',
      }}
    >
      <Flex
        p='3'
        direction='row'
        justify='between'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <Flex direction='row' b='33' justify='center'></Flex>

        <Flex direction='row' b='33' justify='center'>
          <Text size='2' weight='medium'>
            Title
          </Text>
        </Flex>

        <Flex gap='4' direction='row' b='33' justify='end'>
          <Icon type='Eclipse' color='var(--text-muted)' />
        </Flex>
      </Flex>

      <Flex
        style={{
          position: 'relative',
          background: 'var(--background-background)',
        }}
        grow='1'
        w='full'
      >
        <Scroll>
          <Flex h='8' />

          <Outlet />
        </Scroll>
      </Flex>
    </Flex>
  );
}
