import styled, {css} from "styled-components";
import {useRouter} from "next/router";

const StyledLink = styled.a`
    font-size: ${props => props.theme.fontSize.l};
    font-family: ${props => props.theme.fontFamily.header};
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

export default function HeaderLink({ href, children }) {

    const router = useRouter();

    const handleRoute = (e) => {
        e.preventDefault();
        router.push(href)
    }

    return (
        <StyledLink href={href} current={router.asPath === href} onClick={(e) => handleRoute(e)}>{children}</StyledLink>
    );
}