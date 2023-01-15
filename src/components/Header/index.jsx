import { HeaderContainer, Navbar, NavItem } from "./StyledComponents";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Navbar className="menu">
        <NavItem>
          <NavLink to={`/`}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={`/about`}>Sobre</NavLink>
        </NavItem>
      </Navbar>
    </HeaderContainer>
  )
}