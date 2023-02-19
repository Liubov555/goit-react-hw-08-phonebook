import { useAuth } from "Hooks/useAuth";
import React from "react";
import { HeaderLink, Nav } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Nav>
            <HeaderLink to='/'>Home</HeaderLink>
            {isLoggedIn && <HeaderLink to='/contacts'>Contacts</HeaderLink>}
        </Nav>
    );
};