import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Containers = styled(motion.div)`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.25);
    margin: 24px;
    box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.15);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.15);
    -moz-box-shadow: 10px 10px 5px 0px rgba(255, 255, 255, 0.15);
`;

const basicVariants = {
    from: {
        scale: 0,
        rotate: 0,
    },
    to: {
        rotate: 360,
        scale: 1,
        transition: {
            duration: 0.3,
            type: 'spring',
            stiffness: 260,
            damping: 20,
        },
    },
};

export default function BasicStyle() {
    return (
        <Containers
            variants={basicVariants}
            initial="from"
            animate="to"
        ></Containers>
    );
}
