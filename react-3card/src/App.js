import Board from './Board.js';

import './App.css';

import iconSUVS from './images/icon-suvs.svg';
import iconSEDANS from './images/icon-sedans.svg';
import iconLUXURY from './images/icon-luxury.svg';

export default function App() {
    const data = [
        {
            icon: iconSEDANS,
            color: 'hsl(31, 77%, 52%)',
            name: 'Sedans',
            description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        },
        {
            icon: iconSUVS,
            color: 'hsl(184, 100%, 22%)',
            name: 'Suvs',
            description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        },
        {
            icon: iconLUXURY,
            color: 'hsl(179, 100%, 13%)',
            name: 'Luxury',
            description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
        }
    ];



    return (
        <div className="App">
            <Board data={data} />
            <footer className="attribution">
                Challenge by <a target="_blank" rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                Coded by <a href="https://contra.com/varvara_kronberg/projects">Varvara</a>.
            </footer>
        </div>
    );
}

