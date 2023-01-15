import styled from "styled-components"

export const HeaderContainer = styled.header`
width: 100%;
position: sticky;
top: 0;
backdrop-filter: blur(2px);
background: var(--secondary-color);
`

export const Navbar = styled.ul`
display: flex;
align-items: center;
flex-wrap: wrap;
width: 100%;
`

export const NavItem = styled.li`
  a {
    display: flex;
    padding: .7rem var(--margin-h);
    font-size: .75rem;
    font-family: sans-serif;
    color: #aaaab0;
    transition: .3s ease;
  }

  a:hover {
    background: #4a4a50;
    color: #fff;
  }

`