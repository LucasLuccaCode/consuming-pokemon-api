import styled from "styled-components"

export const PokemonContainer = styled.li`
cursor: pointer;
display: flex;
align-items: center;
padding: .5rem;
border-radius: .3rem;
background: var(--secondary-color);
box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
transition: .2s linear;

  &:hover {
      background: rgba(255, 255, 255, .2);
  }
`

export const Image = styled.img`
width: 4rem;
height: 4rem;
`

export const Info = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
overflow: hidden;

  h2 {
    font-size: 1.3rem;
    text-transform: capitalize;
  }

  p {
    display: flex;
    align-items: center;
    font-size: .9rem;
    font-weight: bold;
  }  

  strong {
    padding: .25rem;
    font-size: .5rem;
    border-radius: .2rem;
    margin-left: .3rem;
    color: var(--secondary-color);
    background: var(--details-color);
  }
`