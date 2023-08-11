import { Route, Routes } from 'react-router-dom';
import './CSS/index.css';
import Navi from './Components/Navi';
import Home from './Pages/Home';
import MotionValue from './Pages/MotionValue';
import Presence from './Pages/Presence';

function App() {
    return (
        <div>
            <Navi />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/motion" element={<MotionValue />} />
                <Route path="/animate" element={<Presence />} />
            </Routes>
        </div>
    );
}

export default App;
