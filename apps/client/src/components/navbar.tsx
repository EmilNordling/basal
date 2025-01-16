import {
  DropdownMenu,
  Flex,
  Icon,
  Link,
  PrimitiveButton,
  Scroll,
  Sidebar,
  Text,
} from "@ui";
import { AuthService } from "@application/internal/domain/account/auth/auth_service";
import { useResolve } from "@wox-team/wox-inject";
import { IconType } from "@ui/components_primitives/icon";
import { forwardRef } from "react";
import { AccountService } from "@application/internal/domain/account/account_service";

export function AppSideBar() {
  const _ = useResolve(AuthService);

  return (
    <Flex grow>
      <Flex pt="2" align="center" justify="between" direction="row">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <AccountButton />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item asChild>
              <Link to="settings">
                <Text size="2">Settings</Text>
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
      <Flex grow style={{ position: "relative" }}>
        <Scroll>
          <Sidebar.Root>
            <Sidebar.Group>
              <Item to="/app/tiles" label="Tiles" icon="RectangleVertical" />
            </Sidebar.Group>
          </Sidebar.Root>
        </Scroll>
      </Flex>
    </Flex>
  );
}

interface ItemProps {
  to: string;
  label: string;
  icon: IconType;
}

function Item(props: ItemProps) {
  return (
    <Sidebar.Item to={props.to}>
      <Sidebar.Icon>
        <Icon type={props.icon} />
      </Sidebar.Icon>
      <Sidebar.Label>{props.label}</Sidebar.Label>
    </Sidebar.Item>
  );
}

const AccountButton = forwardRef<HTMLButtonElement>(function AccountButton(
  _,
  ref
) {
  const accountService = useResolve(AccountService);

  return (
    <PrimitiveButton
      className="hover:bg wox-flex direction-row gap-2 py-1 cr-1"
      style={{
        paddingRight: 6,
        paddingLeft: 6,
      }}
      ref={ref}
    >
      <Flex
        w="4"
        h="4"
        align="center"
        justify="center"
        style={{
          background: "var(--secondary)",
          color: "#fff",
        }}
        cr="1"
      >
        <Text size="0">C</Text>
      </Flex>

      <Text size="2" weight="medium">
        {accountService.model.value?.name}
      </Text>

      <Icon type="ChevronDown" size={12} strokeWidth={2.3} />
    </PrimitiveButton>
  );
});
