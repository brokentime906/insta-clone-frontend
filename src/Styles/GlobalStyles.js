import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing : border-box;
    }
    body{
        background-color : ${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
    }
    a{
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;

export default GlobalStyles;
