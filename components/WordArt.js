import Image from "next/image";
import front4 from "../public/front4.png";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
`;

export default function WordArt() {
    return (
        <Wrapper>
            <Image src={front4} alt="blog word art"/>
        </Wrapper>
    );
}