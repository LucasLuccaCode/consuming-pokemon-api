
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
  --primary-color: #2a2a2a;
  --secondary-color: #3a3a3a;
  --details-color: #00b1ff;
  --margin-h: 1rem;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}

body,
html,
#root {
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: #efefff;
  background: var(--primary-color);
  word-wrap: break-word;
}

body::-webkit-scrollbar {
  width: .2rem;
}

body::-webkit-scrollbar-track {
  background: transparent;
}

body::-webkit-scrollbar-thumb {
  background-color: var(--details-color);
  border-radius: 20px;
}

@media screen and (max-width: 400px) {
  html {
    font-size: 5vw
  }
}

/* Main */
main {
  flex: 1;
  padding: 1em var(--margin-h);
}

h1 {
  font-size: 1.1rem;
  color: #efefff;
  text-align: center;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.menu a {
  position: relative;
}

.menu a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  width: 0%;
  height: 2px;
  background: transparent;
  transition: .2s linear;
}

.menu a.active::before {
  width: 100%;
  background: var(--details-color);
}

input,
button {
  border: 0;
  margin: 0;
  outline: 0;
}

.c-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.max-width {
  width: 450px;
  max-width: 96%;
  margin: 0 auto;
}


.nowrap {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.btn {
  cursor: pointer;
  border: 2px solid var(--details-color);
  color: var(--secondary-color);
  font-weight: bold;
  font-size: .6rem;
  text-transform: uppercase;
  border-radius: .3rem;
  padding: .3rem .5rem;
  background: var(--details-color);
  transition: .3s ease;
}

.btn:hover {
  background: transparent;
  color: var(--details-color);
}

.more-thoughts {
  display: block;
  margin: 1rem auto;
}

.empty {
  font-size: .8rem;
  margin-top: 1rem;
  color: #aaaab0;
  text-align: center;
}

.empty a {
  font-size: .8rem;
  color: var(--details-color);
}

.c-not_found {
  display: flex;
  flex-direction: column;
  gap: .6rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
`

export default Global