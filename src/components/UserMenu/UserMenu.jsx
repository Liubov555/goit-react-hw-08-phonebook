import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "Hooks/useAuth";

import { UserMenuBox, Text, Button } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <UserMenuBox>
            <Text>Welcome, {user.name}</Text>
            <Button type='button' onClick={() => dispatch(logOut())}>
                Log Out
            </Button>
        </UserMenuBox>
    );
};