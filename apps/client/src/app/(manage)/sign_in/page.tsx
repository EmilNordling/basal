import { AuthService } from "internal/domain/account/auth/auth_service";
import { Button, Flex, InputText, Text } from "@ui";
import { useResolve } from "@wox-team/wox-inject";
import { useLocation, useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();
  const location = useLocation();
  const authService = useResolve(AuthService);

  const from = location.state?.from?.pathname || "/manage";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await authService.signin(email, password);
    if (result.err) return;

    navigate(from);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "contents" }}>
      <Flex grow h="100%" align="center" justify="center">
        <Flex grow align="center" gap="6">
          <Flex gap="5" p="4" mt={250}>
            <Flex
              w="8"
              h="8"
              cr="4"
              bg="background-border"
              style={{
                alignSelf: "center",
              }}
            ></Flex>

            <Flex gap="3">
              <Flex gap="1">
                <Text
                  size="title-2"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Welcome to Auora
                </Text>
                <Text
                  size="small"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Sign in to access the account area
                </Text>
              </Flex>

              <Flex gap="2">
                <InputText
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  label="username"
                  hideLabel
                />
                <InputText
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  label="password"
                  hideLabel
                />
              </Flex>
            </Flex>

            <Button type="submit" size="4" variant="primary">
              Continue with Email
            </Button>
          </Flex>

          <Flex direction="row" align="center">
            <Text>Forgot password?</Text>
            <Flex aria-hidden pl="2">
              -
            </Flex>
            <Button variant="tertiary">Reset</Button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
}
