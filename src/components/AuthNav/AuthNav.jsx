import React from "react";
import { AuthLink, Navigation } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <Navigation>
            <AuthLink to='/register'>Register</AuthLink>
            <AuthLink to='/login'>Log In</AuthLink>
        </Navigation>
    )
};