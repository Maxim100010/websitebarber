import {Carousel} from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import '@mantine/carousel/styles.css';
import {useMediaQuery} from '@mantine/hooks';
import {BackgroundImage, Paper, rem, Transition, useMantineTheme} from '@mantine/core';
import classes from './CardsCarousel.module.css';

import aboutBG from '../assets/aboutBG.jpg'

// New Images
import _1 from "../assets/galleryImages/1.jpeg"
import _2 from "../assets/galleryImages/2.jpeg"
import _3 from "../assets/galleryImages/3.jpeg"
import _4 from "../assets/galleryImages/4.jpeg"
import _5 from "../assets/galleryImages/5.jpeg"
import _6 from "../assets/galleryImages/6.jpeg"
import _7 from "../assets/galleryImages/7.jpeg"
import _8 from "../assets/galleryImages/8.jpeg"
import _9 from "../assets/galleryImages/9.jpeg"
import _10 from "../assets/galleryImages/10.jpeg"
import _11 from "../assets/galleryImages/11.jpeg"
import _12 from "../assets/galleryImages/12.jpeg"

import {useInView} from "react-intersection-observer";
import {useRef} from "react";


interface CardProps {
    image: string;
}

function Card({image}: CardProps) {
    return (
        <Paper
            shadow="md"
            style={{backgroundImage: `url(${image})`}}
            className={classes.card}
        >

        </Paper>
    );
}

const data = [ _8, _9, _10, _11, _12, _5, _6, _1, _2, _3, _4, _7];

export function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((image) => (
        <Carousel.Slide key={image}>
            <Card image={image} />
        </Carousel.Slide>
    ));

    const {ref, inView} = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0.1,
    });

    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return (
        <BackgroundImage src={aboutBG} ref={ref}>
            <div className={classes.div}>
                <Transition
                    mounted={inView} // Only show the stack when visible
                    transition="fade-up"
                    duration={1000}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <Carousel
                            withIndicators
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            nextControlIcon={<IconArrowRight style={{ width: rem(20), height: rem(20) }} />}
                            previousControlIcon={<IconArrowLeft style={{ width: rem(20), height: rem(20) }} />}
                            slideSize={{base: '100%', sm: '50%'}}
                            align="center"
                            slidesToScroll={mobile ? 1 : 1}
                            loop={true}
                            style={styles}
                        >
                            {slides}
                        </Carousel>
                    )}
                </Transition>
            </div>
        </BackgroundImage>
    );
}