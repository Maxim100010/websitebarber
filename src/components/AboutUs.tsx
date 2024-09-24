import {
    Title,
    Text,
    Stack,
    Image,
    Group,
    AspectRatio,
    BackgroundImage,
    Transition
} from '@mantine/core';
import { useState, useEffect, useRef } from 'react';
import classes from './AboutUs.module.css';

export function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null); // Reference to the component

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Trigger transition when element is visible
                        observer.disconnect(); // Stop observing once the element is visible
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current); // Start observing the component
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current); // Clean up observer when the component unmounts
            }
        };
    }, []);

    return (
        <BackgroundImage src={'src/assets/aboutBG.jpg'} ref={aboutRef}>
            <Transition
                mounted={isVisible}
                transition="fade-up"
                duration={1000}
                timingFunction="ease"
            >
                {(styles) => (
                    <Group className={classes.grp} style={styles}>
                        <Stack gap={10}>
                            <Title c={'white'} className={classes.titles} size={50}>O nás</Title>
                            <Group>
                                <AspectRatio ratio={5 / 7} maw={350} mah={500}>
                                    <Image src={'src/assets/logo.jpeg'} className={classes.img}></Image>
                                </AspectRatio>
                                <Text c={'white'} w={300} className={classes.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum nisi eget faucibus imperdiet. Nam id mauris non ante pulvinar molestie. Phasellus nec mi a felis volutpat ultricies. Cras et vehicula nulla. Proin suscipit dapibus justo, a vulputate libero. Nam efficitur turpis vitae lacus interdum sollicitudin. Suspendisse tempus eu diam et venenatis.
                                </Text>
                            </Group>
                        </Stack>
                        <Stack h={500} w={600} justify={"center"}>
                            <Title c={'white'} className={classes.titleRight} size={50}>Kde nás nájdete</Title>
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.710843911014!2d18.071131876843214!3d48.3084124392519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3f5b37e79345%3A0x110db96a046a2ad4!2sLa%20Casa%20de%20Barber!5e0!3m2!1ssk!2snl!4v1727196235105!5m2!1ssk!2snl"
                                    title="Google map"
                                    style={{ border: 0 }}
                                />
                            </AspectRatio>
                        </Stack>
                    </Group>
                )}
            </Transition>
        </BackgroundImage>
    );
}
