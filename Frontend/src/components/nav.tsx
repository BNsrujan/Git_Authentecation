import { useAuth0 } from "@auth0/auth0-react";
const Nav = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ) : (
                <div>
                    <button onClick={() => loginWithRedirect()}> Log In</button >;
                </div>
            )}

        </div>
    )
}


export default Nav;