import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import { Section, Img } from "./Layout.styled";

export const Layout = () => {
    return (
        <Section>


            <AppBar />
            <Suspense fallback={null} >
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </Section>
    )
}