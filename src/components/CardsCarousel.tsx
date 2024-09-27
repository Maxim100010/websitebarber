import {Carousel} from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import {useMediaQuery} from '@mantine/hooks';
import {BackgroundImage, Paper, Transition, useMantineTheme} from '@mantine/core';
import classes from './CardsCarousel.module.css';

// Importing images directly
import receptionImage from '../assets/rsz_reception.jpg';
import chair1Image from '../assets/rsz_chair1.jpg';
import sofaImage from '../assets/rsz_sofa.jpg';
import chair2Image from '../assets/rsz_chair2.jpg';
import {useInView} from "react-intersection-observer";

import aboutBG from '../assets/aboutBG.jpg'

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

const data = [
    {
        image: receptionImage
    },
    {
        image: chair1Image
    },
    {
        image: sofaImage
    },
    {
        image: chair2Image
    },
];

export function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.image}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    const {ref, inView} = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0.1,
    });

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