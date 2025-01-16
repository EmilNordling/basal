import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<C extends ElementType, Props = Record<string, unknown>> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<C extends ElementType, Props = Record<string, unknown>> = PolymorphicComponentProp<C, Props> & {
  ref?: PolymorphicRef<C>;
};

export type { PolymorphicComponentPropWithRef, PolymorphicComponentProp, PolymorphicRef };
