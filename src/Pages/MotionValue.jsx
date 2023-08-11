import { motion, useMotionValue, useTransform } from 'framer-motion';
import { styled } from 'styled-components';
import { Containers } from '../Components/BasicStyle';

const MotionWrapper = styled(motion.div)`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MotionItem = styled(Containers)`
    background-color: #ddd;
`;

export default function MotionValue() {
    const x = useMotionValue();
    const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
    const bgValue = useTransform(
        x,
        [-800, 800],
        [
            `linear-gradient(
            27deg,
            rgba(88, 9, 121, 1) 0%,
            rgba(255, 0, 232, 1) 100%
        )`,
            `linear-gradient(
            27deg,
            #097479 0%,
            #00ff80 100%
        )`,
        ]
    );

    return (
        <MotionWrapper style={{ x, background: bgValue }}>
            <MotionItem
                style={{ x, rotateZ: rotateZ }}
                drag="x"
                dragSnapToOrigin
            />
        </MotionWrapper>
    );
}
