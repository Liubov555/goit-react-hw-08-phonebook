import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Registers, H3 } from "./Register.styled";

export default function Register() {
    return (
        <Registers>
            <H3>
                Registration
            </H3>
            <RegisterForm />
        </Registers>
    );
};