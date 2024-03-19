import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar dark color="primary" sticky="top" expand="md">
        <NavbarBrand className="ms-5">
          <h1 className="float-start">My Playlist's</h1>
          <p>A Spotify API App.</p>
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink className="nav-link" to="/" activeClassName="active">
              {" "}
              Home
            </NavLink>{" "}
          </NavItem>{" "}
          <NavItem>
            <NavLink className="nav-link" to="/Playlists">
              Playlists
            </NavLink>{" "}
          </NavItem>{" "}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
