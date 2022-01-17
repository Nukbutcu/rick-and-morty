import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: -2px 5px 15px 5px #000000;
  box-shadow: -2px 5px 15px 5px #000000;
`;

export const Button = styled.button`
  padding: 0.52em 1.6em;
  margin: 0 auto;
  border: 0.1em solid #000000;
  border-radius: 0.12em;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #000000;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  display: flex;
  justify-content: center;


cursor: pointer;
transition-duration: 0.4s;
-webkit-transition-duration: 0.4s;
}

.button:hover {
transition-duration: 0.1s;
background-color: #3A3A3A;
}

.button:after {
content: "";
display: block;
position: absolute;
border-radius: 4em;
left: 0;
top:0;
width: 100%;
height: 100%;
opacity: 0;
transition: all 0.5s;
box-shadow: 0 0 10px 40px white;
}

.button:active:after {
box-shadow: 0 0 0 0 white;
position: absolute;
border-radius: 4em;
left: 0;
top:0;
opacity: 1;
transition: 0s;
}

.button:active {
top: 1px;
}
`;
