import FullFlex from "./FullFlex";
import SharpStick from "./SharpStick";
import styled from "styled-components";

const StyledFullFlex = styled(FullFlex)`
  max-height: 10px;
`;

export default function HeaderDecorator() {
    return (
        <StyledFullFlex>
            <SharpStick/>
            <SharpStick left/>
        </StyledFullFlex>
    );
}