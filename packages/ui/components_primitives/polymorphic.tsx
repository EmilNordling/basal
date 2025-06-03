import {
  forwardRef,
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren,
} from "react";

export namespace Polymorphic {
  export type AsProp<C extends ElementType> = {
    as?: C;
  };

  export type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

  export type Ref<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

  export type ComponentProp<
    C extends ElementType,
    Props = Record<string, unknown>
  > = PropsWithChildren<Props & AsProp<C>> &
    Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

  export type ComponentPropWithRef<
    C extends ElementType,
    Props = Record<string, unknown>
  > = ComponentProp<C, Props> & {
    ref?: Ref<C>;
  };

  export type ForwardRef = <T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null
  ) => (props: P & React.RefAttributes<T>) => React.ReactNode | null;

  export const polymorphicForwardRef = forwardRef as ForwardRef;
}
