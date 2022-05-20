import { shade } from "polished";
import styled from "styled-components";

export const Title = styled.h1 `
font-size: 48px;
color: #3a3a3a;
max-width: 450px;
line-height: 56px;

margin-top: 80px
`;


export const Form = styled.form `
margin-top: 40px;
max-width: 700px;

display: flex;
input {
    flex:1;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px
}

button {
    width: 210px;
    height: 70px;
    border-radius: 0px 5px 5x 0px;
    background: #04d361;
    border: 0;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

&:hover {
  background: ${shade(0.2, '#04d361')};
}
}
`;

export const Repositories = styled.div`

`