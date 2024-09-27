import {BackgroundImage, SimpleGrid, Stack, Text, Title, Transition} from '@mantine/core';
import classes from './FeaturesGrid.module.css';
import {useInView} from "react-intersection-observer";

import aboutbg from '../assets/aboutBG.jpg'

export const MOCKDATA = [
    {
        title: 'Pánsky Strih',
        description:
            'Strih strojčekom/nožnicami, umytie vlasov, masáž hlavy, styling',
        price: '18€'
    },
    {
        title: 'Pánsky Strih s úpravou brady',
        description:
            'Strih strojčekom/nožnicami, umytie vlasov, masáž hlavy, styling, úprava brady, holenie s horúcim uterákom, konečná úprava',
        price: '28€'
    },
    {
        title: 'Detský strih',
        description:
            'Do 6.r - Strih strojčekom/nožnicami, umytie vlasov, masáž hlavy, styling)',
        price: '15€'
    },
    {
        title: 'Úprava brady',
        description:
            'Úprava brady, holenie s horúcim uterákom, konečná úprava',
        price: '15€'
    },
];

interface FeatureProps {
    title: React.ReactNode;
    description: React.ReactNode;
    price: React.ReactNode;
}

export function Feature({title, description, price}: FeatureProps) {
    return (
        <BackgroundImage src={aboutbg}>
            <Stack className={classes.card} justify={'space-between'}>
                <Text mt="lg" c={'white'} ta={"center"} className={classes.cardTitle}>
                    {title}
                </Text>
                <Text size="sm" lh={1.6} c={'white'} ta={"center"} className={classes.cardDescription}>
                    {description}
                </Text>
                <Text mb="lg" c={'white'} ta={"center"} className={classes.cardPrice}>
                    {price}
                </Text>

            </Stack>
        </BackgroundImage>
    );
}

export function FeaturesGrid() {

    const {ref, inView} = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0.1,
    });


    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index}/>);

    return (
        <div ref={ref} className={classes.div}>

            <Transition
                mounted={inView} // Only show the stack when visible
                transition="fade-up"
                duration={1000}
                timingFunction="ease"
            >
                {(styles) => (
                    <Stack className={classes.wrapper} style={styles} align={"center"} justify={"center"}>
                        <Title className={classes.title}>Cenník</Title>
                        <SimpleGrid
                            cols={{base: 1, sm: 2, md: 4}}
                            spacing={{base: 'xl', md: 50}}
                            verticalSpacing={{base: 'xl', md: 50}}
                            className={classes.simpleGrid}
                        >
                            {features}
                        </SimpleGrid>
                    </Stack>
                )}
            </Transition>
        </div>
    );
}
