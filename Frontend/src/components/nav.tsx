import React, {  useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Nav: React.FC = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="nav">
      <div className="logo">GitHub Authentication</div>
      {isAuthenticated ? (
        <div className="user-info">
          <div
            className="user-profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {user?.picture && (
              <img src={user.picture} alt={user.name} className="profile-pic" />
            )}
            <span className="user-name">{user?.name}</span>
            <svg
              className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item user-details">
                <div className="user-email">{user?.email}</div>
                <div className="user-id">ID: {user?.sub}</div>
              </div>
              <hr className="dropdown-divider" />
              <button
                className="dropdown-item logout-btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button className="login-btn" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
