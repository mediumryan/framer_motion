import { useRef } from 'react';
import { styled } from 'styled-components';
import { Containers } from './BasicStyle';
import { motion } from 'framer-motion';

const DragsContainer = styled(Containers)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DragsItem = styled(motion.div)`
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 20px;
    cursor: pointer;
`;

export default function Drags() {
    const constraintsRef = useRef(null);
    return (
        <DragsContainer ref={constraintsRef}>
            <DragsItem drag dragConstraints={constraintsRef} dragSnapToOrigin />
        </DragsContainer>
    );
}
