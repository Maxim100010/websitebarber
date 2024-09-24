import './App.css'

import '@mantine/core/styles.css';
import {HeaderSimple} from "./components/HeaderSimple.tsx"
import {FooterCentered} from "./components/FooterCentered.tsx"
import {HeroContentLeft} from "./components/HeroContentLeft.tsx"
import {FeaturesGrid} from "./components/FeaturesGrid.tsx"
import {AboutUs} from "./components/AboutUs.tsx"
import {createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css'

// Your theme configuration is merged with default theme
const theme = createTheme({
    fontFamily: 'Verdana, sans-serif',
    defaultRadius: 'md',
});

export default function App() {
    return <MantineProvider theme={theme}>{
        <div>
            <HeaderSimple />
            <HeroContentLeft></HeroContentLeft>
            <AboutUs></AboutUs>
            <FeaturesGrid></FeaturesGrid>
            <FooterCentered />
        </div>
    }</MantineProvider>;
}



