import { useDispatch } from "react-redux";
import { register } from '../../redux/auth/operations';
import { Input, Button, Text } from "./RegisterForm.styled";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>

            <label>
                <Input type='text' name='name' placeholder="name" />
            </label>

            <label>
                <Input type='email' name='email' placeholder="email" />
            </label>

            <label>
                <Input type='password' name='password' placeholder="password" />
            </label>
            <Text>Use uppercase / lowercase letters and numders for password </Text>
            <Button type="submit">Register</Button>
        </form>
    )
}
