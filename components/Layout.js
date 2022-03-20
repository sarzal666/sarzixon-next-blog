import styled from "styled-components";
import Header from "./Header";


const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  
   background-color: ${props => props.theme.color.cyberpunkNavy};
   font-size: ${({theme : {fontSize}}) => fontSize.xl};
`;

function Layout(props) {
    return (
        <StyledLayout>
            <Header />
            <main>
                {props.children}
            </main>
        </StyledLayout>
    )
}

export default Layout