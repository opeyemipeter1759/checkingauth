import styled from "styled-components";

import background from '../Assets/signinbg.png';

export const color = {
  primary: "#0768F6",
  simpleOrange: "#0fd7c1d",
};



export const StyledContainer = styled.div`
margin:0;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(0deg, rgba(7, 104, 246, 0.973), rgba(7, 104, 246, 0.973)), url(${ background });
background-size:cover;
background-attachment:fixed ;
`;

