import { styled } from 'styled-components';
import { Containers } from './BasicStyle';

const GestureItem = styled(Containers)``;

export default function Gesture() {
    return (
        <GestureItem
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: '50%',
            }}
            transition={{ duration: 0.3 }}
        />
    );
}
