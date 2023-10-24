import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "..";

export function Navbar() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="navbar">
      <nav className="nav-links">
        <NavLink className="nav-link-item" to="/">
          <i className="fa-solid fa-house"></i> Home
        </NavLink>
        <NavLink className="nav-link-item">
          <i className="fa-solid fa-rocket"></i> Explore
        </NavLink>
        <NavLink className="nav-link-item">
          <i className="fa-regular fa-bookmark"></i> Bookmarks
        </NavLink>
        <NavLink className="nav-link-item">
          <i className="fa-regular fa-user-circle"></i> Profile
        </NavLink>
      </nav>
      <div className="profile-sub-section">
        <img
          src={state.forumData.picUrl}
          alt="user"
          className="avatar-image-nav"
        />
        <div className="nav-user-profile-details">
          <h3 className="nav-user-full-name">{state.forumData.name}</h3>
          <p className="nav-username">@ {state.forumData.username}</p>
        </div>
      </div>
    </div>
  );
}
