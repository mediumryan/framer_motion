import React from 'react';
import styled from 'styled-components';
import BasicStyle from '../Components/BasicStyle';
import Variants from '../Components/Variants';
import Gesture from '../Components/Gesture';
import Drags from '../Components/Drags';
import Scroll from '../Components/Scroll';
import SVG from '../Components/SVG';

const MainWrapper = styled.div`
    height: 100vh;
    background: rgb(88, 9, 121);
    background: linear-gradient(
        27deg,
        rgba(88, 9, 121, 1) 0%,
        rgba(255, 0, 232, 1) 100%
    );
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    padding: 0 48px;
    padding-bottom: 200px;
`;

export default function Home() {
    return (
        <MainWrapper>
            <BasicStyle />
            <Variants />
            <Gesture />
            <Drags />
            <Scroll />
            <SVG />
        </MainWrapper>
    );
}
