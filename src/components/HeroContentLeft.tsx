import {Button, Container, Overlay, Text, Title, Transition} from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import {useInView} from "react-intersection-observer";


export function HeroContentLeft() {

    const {ref, inView} = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className={classes.hero} ref={ref}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Transition
                mounted={inView} // Only show the stack when visible
                transition="fade-up"
                duration={1000}
                timingFunction="ease"
            >
                {(styles) => (
                    <Container className={classes.container} size="md" style={styles}>
                        <Title className={classes.title}>Prestížne Pánske Holičstvo v Nitre</Title>
                        <Text className={classes.description} size="xl" mt="xl">
                            Braneckého 1510/15, 949 01 Nitra
                        </Text>

                        <Button size="xl" radius="xl" className={classes.control}>
                            Rezervovať
                        </Button>
                    </Container>
                )}
            </Transition>
        </div>
    );
}