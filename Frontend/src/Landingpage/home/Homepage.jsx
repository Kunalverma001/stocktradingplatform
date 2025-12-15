import React from 'react';

import OpenAcc from '../openAcc.jsx';
import Education from './Education.jsx';
import Hero from './Hero.jsx';
import Pricing from './Pricing.jsx';
import Stats from './Stats.jsx';

function HomePage() {
    return (
        <div>
            <Hero />
            <Stats />
            <Pricing />
            <Education />
            <OpenAcc />
        </div>
    );
}

export default HomePage;