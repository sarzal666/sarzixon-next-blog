import styled from "styled-components";
import Header from "../Header/Header";
import FullFlex from "../styledComponents/FullFlex";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  
   background-color: ${props => props.theme.color.cyberpunkNavy};
   font-size: ${({theme : {fontSize}}) => fontSize.xl};
`;

const StyledMain = styled(FullFlex)`
  padding: 5px;
`;

function Layout(props) {
    return (
        <StyledLayout>
            <Header />
            <StyledMain as="main">
                {props.children}
            </StyledMain>
        </StyledLayout>
    )
}

export default Layout