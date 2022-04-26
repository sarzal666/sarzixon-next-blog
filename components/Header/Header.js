import styled, {css} from "styled-components";
import FullFlex from "../styledComponents/FullFlex";
import HeaderDecorator from "../styledComponents/HeaderDecorator";
import HeaderLink from "../HeaderLink/HeaderLink";

const StyledHeader = styled(FullFlex)`
  height: 100px;
  padding-top: 15px;
  flex-direction: column;
  align-items: initial;
`;

const StyledNav = styled(FullFlex)``;

const StyledList = styled(FullFlex)`
  list-style-type: none;
  gap: 100px;
`;

const StyledListElement = styled.li`
  height: 50px;
`;

export default function Header() {
    return (
        <StyledHeader as="header">
            <StyledNav as="nav">
                <StyledList as="ul">
                    <StyledListElement >
                            <HeaderLink href="/">
                                Home
                            </HeaderLink>
                    </StyledListElement>
                    <StyledListElement>
                            <HeaderLink href="/posts">
                                Posts
                            </HeaderLink>
                    </StyledListElement>
                    <StyledListElement >
                            <HeaderLink href="/about-me">
                                About me
                            </HeaderLink>
                    </StyledListElement>
                </StyledList>
            </StyledNav>
            <HeaderDecorator />
        </StyledHeader>
    );
}