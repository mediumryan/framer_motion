import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NaviContainer = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
    font-size: 24px;
    font-weight: 700;
    transition: 300ms all;
    &:hover {
        transform: scale(1.25);
    }
`;

export default function Navi() {
    return (
        <NaviContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/motion">MotionValues</StyledLink>
            <StyledLink to="/animate">Animate Presence</StyledLink>
        </NaviContainer>
    );
}
