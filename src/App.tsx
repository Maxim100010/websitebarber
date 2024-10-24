import './App.css'

import '@mantine/core/styles.css';
import {HeaderSimple} from "./components/HeaderSimple.tsx"
import {FooterCentered} from "./components/FooterCentered.tsx"
import {HeroContentLeft} from "./components/HeroContentLeft.tsx"
import {FeaturesGrid} from "./components/FeaturesGrid.tsx"
import {AboutUs} from "./components/AboutUs.tsx"
import {CardsCarousel} from "./components/CardsCarousel.tsx"
import {createTheme, Loader, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css'
import { ContactUs } from './components/ContactUs.tsx';
import {useEffect, useState} from "react";


import logoremovebg from './assets/logo-removebg.png';
import footerlogo from './assets/logo-text-removebg.png'
import aboutbg from './assets/aboutBG.jpg'
import logoplaceholder from './assets/logo.jpeg'
import instaicon from './assets/insta.svg'

// Your theme configuration is merged with default theme
const theme = createTheme({
    fontFamily: 'Roboto, sans-serif',
    defaultRadius: 'md',

});

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const images = [
            logoremovebg,footerlogo,aboutbg,logoplaceholder,instaicon,
            // Add all images you want to preload
        ];

        // Create promises for each image and resolve them when the image is loaded
        const imagePromises = images.map((src) => {
            return new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(); // Resolve when image is loaded
                img.onerror = reject; // Reject if there's an error loading the image
            });
        });

        // Wait for all images to load
        Promise.all(imagePromises)
            .then(() => setLoading(false)) // All images loaded, set loading to false
            .catch((error) => console.error('Error preloading images', error)); // Handle any errors
    }, []);

    if (loading) {
        return (
            <MantineProvider theme={theme}>{
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Loader size="xl" variant="bars" /> {/* Simple spinner loader */}
            </div>
            }</MantineProvider>
        );
    }


    return <MantineProvider theme={theme}>{
        <div className={loading? 'loading' : ''}>
            <HeaderSimple/>
            <div>
                <HeroContentLeft></HeroContentLeft>
            </div>
            <div id="about">
                <AboutUs></AboutUs>
            </div>
            <div id="pricing">
                <FeaturesGrid></FeaturesGrid>
            </div>
            <div id="gallery">
                <CardsCarousel></CardsCarousel>
            </div>
            <div id="contact">
                <ContactUs></ContactUs>
            </div>
            <FooterCentered/>
        </div>
    }</MantineProvider>;
}



