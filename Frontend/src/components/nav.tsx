import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Nav: React.FC = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (isAuthenticated && user) {
            console.log("User ID (sub):", user.sub);

            // Automatically send user data to your backend upon login
            fetch('http://localhost:3000/api/os', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: {
                        sub: user.sub,
                        // name: user.name,
                        // email: user.email,
                        // picture: user.picture
                    }
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }, [isAuthenticated, user]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    {user?.picture && <img src={user.picture} alt={user.name} />}
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                </div>
            ) : (
                <div>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                </div>
            )}
        </div>
    );
};

export default Nav;
