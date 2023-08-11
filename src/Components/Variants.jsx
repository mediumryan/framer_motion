import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { Containers } from './BasicStyle';

const VariantsContainer = styled(Containers)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const VariantsItems = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;

    place-self: center;
`;

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

export default function Variants() {
    return (
        <VariantsContainer
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <VariantsItems variants={item} />
            <VariantsItems variants={item} />
            <VariantsItems variants={item} />
            <VariantsItems variants={item} />
        </VariantsContainer>
    );
}
