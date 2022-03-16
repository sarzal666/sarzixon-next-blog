import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.cyberpunkNavy};
  font-size: ${({theme : {fontSize}}) => fontSize.xl};
`;

export default Layout