import './App.css'
import '@mantine/core/styles.css';

import {HeaderSimple} from "./components/Header/HeaderSimple.tsx"
import {FooterCentered} from "./components/Footer/FooterCentered.tsx"
import {HeroContentLeft} from "./components/Body/HeroContentLeft.tsx"
import {FeaturesGrid} from "./components/Body/FeaturesGrid.tsx"
import {AboutUs} from "./components/Body/AboutUs.tsx"
import {CardsCarousel} from "./components/Body/CardsCarousel.tsx"
import {createTheme, Loader, MantineProvider} from '@mantine/core';
import {ContactUs} from './components/Body/ContactUs.tsx';
import {useEffect, useState} from "react";
import {BackToTop} from "./components/Navigation/ToTopArrow.tsx";
import {ScrollBurger} from "./components/Navigation/ScrollBurger.tsx";

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
        ];

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
                <Loader size="xl" variant="bars" color={"black"}/>
            </div>
            }</MantineProvider>
        );
    }


    return <MantineProvider theme={theme}>{
        <div className={loading? 'loading' : ''}>
            <HeaderSimple/>
            <ScrollBurger></ScrollBurger>
            <BackToTop></BackToTop>
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



