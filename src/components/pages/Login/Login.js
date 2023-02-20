import { LoginForm } from "components/LoginForm/LoginForm";
import { Logins, H1, Text } from "./Login.styled";

export default function Login() {
    return (
        <Logins>
            <H1>Login</H1>
            <Text>Welcome back</Text>
            <LoginForm />
        </Logins>
    );
};