import { AuthService } from "internal/domain/account/auth/auth_service";
import { Button, Flex, InputText, Text } from "@ui";
import { useResolve } from "@wox-team/wox-inject";
import { useLocation, useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const authService = useResolve(AuthService);

  const from = location.state?.from?.pathname || "/inbox";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    const result = await authService.login(username);
    if (result.err) return;

    navigate(from);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "contents" }}>
      <Flex direction="row" grow h="100%">
        <Flex grow align="center" b="50">
          <Flex gap="5" p="4" mt={250}>
            <Text size="regular">Sign in</Text>

            <Flex gap="2">
              <InputText label="username" />
            </Flex>

            <Button type="submit">Sign in</Button>
          </Flex>
        </Flex>

        <Flex b="50" grow bg="background-brand"></Flex>
      </Flex>
    </form>
  );
}
