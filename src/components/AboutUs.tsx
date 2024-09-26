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
import classes from './AboutUs.module.css';
import {useInView} from "react-intersection-observer";

export function AboutUs() {

    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <BackgroundImage src={'src/assets/aboutBG.jpg'} ref={ref}>
            <div className={classes.div}>
                <Transition
                    mounted={inView} // Only show the stack when visible
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
                        <Stack justify={"center"}>
                            <Title c={'white'} className={classes.titleRight} size={50}>Sledujte nás</Title>
                            <Image src={'src/assets/insta.svg'}></Image>
                        </Stack>
                    </Group>
                )}
            </Transition>
            </div>
        </BackgroundImage>
    );
}
