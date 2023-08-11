import { styled } from 'styled-components';
import { Containers } from './BasicStyle';
import { motion, useTransform, useScroll } from 'framer-motion';

const ScrollContainer = styled(Containers)``;

const ScrollItem = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
`;

export default function Scroll() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.5]);

    return (
        <ScrollContainer style={{ scale }}>
            <ScrollItem
                style={{
                    scaleY: scrollYProgress,
                }}
            />
        </ScrollContainer>
    );
}
