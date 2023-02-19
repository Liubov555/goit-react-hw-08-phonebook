import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";

import { Input, ButtonLogIn } from "./LoginForm.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <label>
                <Input type='email' name='email' placeholder="email" />
            </label>
            <label>
                <Input type='password' name='password' placeholder="password" />
            </label>
            <ButtonLogIn type="submit">Log In</ButtonLogIn>
        </form>
    );
};

