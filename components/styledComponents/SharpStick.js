import styled, {css, keyframes} from "styled-components";
import FullFlex from "./FullFlex";

const slide = keyframes`
  from {
    width: 0;
  }
  
  to {
    width: 35%;
  }
`;

const StyledFullFlex = styled(FullFlex)`
  justify-content: ${props => props.left ? 'flex-end' : 'flex-start'};
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border: 10px solid transparent;
  ${({ left }) => 
      left ? css`
                  border-bottom: 0;
                  border-right: 20px solid ${props => props.theme.color.neonBlue};
                `
              : 
              css`
                  border-top: 0;
                  border-left: 20px solid ${props => props.theme.color.neonBlue};
                 `
  }
`;

const Rectangle = styled.div`
  width: 35%;
  height: 10px;
  background-color: ${props => props.theme.color.neonBlue};
  animation: ${slide} .65s ease-in-out;
`;

export default function SharpStick({ left }) {
    return (
        <StyledFullFlex left={left | false}>
            {left ? <>
                        <Triangle left/>
                        <Rectangle />
                    </>
            :
                <>
                    <Rectangle />
                    <Triangle/>
                </>
            }

        </StyledFullFlex>
    );
}