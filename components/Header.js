import styled, {css} from "styled-components";
import Link from "next/link";
import FullFlex from "./styledComponents/FullFlex";

const StyledHeader = styled(FullFlex)`
  height: 120px;
  padding-top: 15px;
`;

const StyledNav = styled(FullFlex)``;

const StyledList = styled(FullFlex)`
  list-style-type: none;
  gap: 100px;
`;

const StyledListElement = styled.li`
  height: 50px;
  ${ props => props.current && css`
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 3px;
          margin-top: 10px;
          background-color: ${props.theme.color.neonBlue};
        }` }
`;

const StyledLink = styled.a`
    font-size: ${props => props.theme.fontSize.l};
    font-family: ${props => props.theme.fontFamily.header};    
`;

export default function Header() {
    return (
        <StyledHeader as="header">
            <StyledNav as="nav">
                <StyledList as="ul">
                    <StyledListElement current >
                        <Link href="/" passHref>
                            <StyledLink>Home</StyledLink>
                        </Link>
                    </StyledListElement>
                    <StyledListElement >
                        <Link href="/posts" passHref>
                            <StyledLink>Posts</StyledLink>
                        </Link>
                    </StyledListElement>
                    <StyledListElement >
                        <Link href="/about-me" passHref>
                            <StyledLink>About me</StyledLink>
                        </Link>
                    </StyledListElement>
                </StyledList>
            </StyledNav>
        </StyledHeader>
    );
}