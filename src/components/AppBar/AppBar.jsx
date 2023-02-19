import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'Hooks/useAuth';

import { AppHeader } from './AppBar.styled';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <>
            <AppHeader>
                <Navigation />
            </AppHeader>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </>
    );
};