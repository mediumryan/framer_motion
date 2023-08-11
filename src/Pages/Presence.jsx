import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { styled } from 'styled-components';

const AnimationWrapper = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const AnimationBox = styled(motion.div)`
    position: absolute;
    width: 250px;
    height: 120px;
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    border-radius: 20px;
    background-color: rgba(135, 135, 235, 0.95);
    box-shadow: 10px 10px 5px 0px rgba(135, 135, 235, 0.55);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(135, 135, 235, 0.55);
    -moz-box-shadow: 10px 10px 5px 0px rgba(135, 135, 235, 0.55);
`;

const HorizontalLine = styled.hr`
    width: 100%;
    margin: 24px 0;
`;

const SlideWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`;

const SlideBox = styled(AnimationBox)``;

const boxVariants = {
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
        transition: {
            duration: 2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 2,
        },
    },
};

const SliceVariants = {
    entry: (back) => {
        return {
            opacity: 0,
            scale: 0,
            x: !back ? -200 : 200,
        };
    },
    center: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            delay: 0.3,
            duration: 0.7,
        },
    },
    exit: (back) => {
        return {
            opacity: 0,
            scale: 0,
            x: back ? -200 : 200,
            rotateX: 180,
            transition: {
                duration: 0.7,
            },
        };
    },
};

export default function Presence() {
    // animation presence
    const [show, setShow] = useState(true);
    const toggleShow = () => {
        setShow((pre) => !pre);
    };
    // animation slice
    const [num, setNum] = useState(1);
    const [back, setBack] = useState(false);
    const goNext = () => {
        setBack(false);
        setNum((pre) => (pre === 10 ? 10 : pre + 1));
    };
    const goPre = () => {
        setBack(true);
        setNum((pre) => (pre === 1 ? 1 : pre - 1));
    };

    return (
        <AnimationWrapper>
            <AnimatePresence>
                {show ? (
                    <AnimationBox
                        variants={boxVariants}
                        initial="from"
                        animate="to"
                        exit="exit"
                    />
                ) : null}
            </AnimatePresence>
            <button onClick={toggleShow}>go</button>
            <HorizontalLine />
            <SlideWrapper>
                <AnimatePresence custom={back}>
                    <SlideBox
                        custom={back}
                        variants={SliceVariants}
                        initial="entry"
                        animate="center"
                        exit="exit"
                        key={num}
                    >
                        {num}
                    </SlideBox>
                </AnimatePresence>
                <div>
                    <button onClick={goPre}>Pre</button>
                    <button onClick={goNext}>next</button>
                </div>
            </SlideWrapper>
        </AnimationWrapper>
    );
}
