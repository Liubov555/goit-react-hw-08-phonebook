import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Registers, H1 } from "./Register.styled";

export default function Register() {
    return (
        <Registers>
            <H1>
                Registration
            </H1>
            <RegisterForm />
        </Registers>
    );
};