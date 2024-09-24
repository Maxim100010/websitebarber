import { Overlay, Container, Title, Button, Text, Transition } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import { useState, useEffect, useRef } from 'react';



export function HeroContentLeft() {

    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Stop observing once visible
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (

        <div ref={heroRef}>
            <Transition
                mounted={isVisible}
                transition="fade-up"
                duration={1000}
                timingFunction={"ease"}
            >
                {(styles) => (
                    <section style={styles}>
                        <div className={classes.hero}>
                            <Overlay
                                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                                opacity={1}
                                zIndex={0}
                            />
                            <Container className={classes.container} size="md">
                                <Title className={classes.title}>Prestížne Pánske Holičstvo v Nitre</Title>
                                <Text className={classes.description} size="xl" mt="xl">
                                    Braneckého 1510/15, 949 01 Nitra
                                </Text>

                                <Button variant="gradient" gradient={{from: '#B5826EFF', to: '#b17658', deg: 90}} size="xl" radius="xl" className={classes.control}>
                                    Rezervovať
                                </Button>
                            </Container>
                        </div>
                    </section>
                )}
            </Transition>
        </div>
    );
}