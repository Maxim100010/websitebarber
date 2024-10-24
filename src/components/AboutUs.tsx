import {
    AspectRatio,
    BackgroundImage,
    Center,
    Divider,
    Group,
    Image,
    Stack,
    Text,
    Title,
    Transition
} from '@mantine/core';
import classes from './AboutUs.module.css';
import {useInView} from "react-intersection-observer";

import aboutBG from '../assets/aboutBG.jpg'
import instaicon from '../assets/insta.svg'
import dominik from '../assets/rsz_dominik.jpg'
import qr from '../assets/QR.jpg'

export function AboutUs() {

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
                        <Stack className={classes.stack} style={styles}>
                            <Title c={'white'} className={classes.titles} size={50}>O nás</Title>
                            <Text c={'white'} className={classes.text1}>
                                Vitajte v La Casa de Barber - v jedinečnom barbershope, priamo v srdci Nitry.
                            </Text>
                            <Center><Divider w={'25%'} variant={'solid'} size={'md'} color={"#97856C"}/></Center>

                            <Text c={'white'} className={classes.text1}>
                                Cieľom nášho barbershopu je zaistiť vysokú spokojnosť zákazníkov, cez
                                prvotriedny servis, príjemnú atmosféru a pocit zážitku. U nás získate očakávaný
                                strih, dokonalý účes, ale aj kvalitnú starostlivosť o bradu a fúzy.
                                <br/>

                                V príjemnom prostredí si s nami doprajte chvíľku oddychu a odneste si z La Casa
                                de Barber dokonalý zážitok.
                            </Text>
                            <Center><Divider w={'50%'} variant={'solid'} size={'md'} color={"#97856C"}/></Center>
                            <Group className={classes.innergrp}>
                                <Group className={classes.innerinnergrp}>
                                    <AspectRatio ratio={5 / 7} maw={350} mah={500}>
                                        <Image src={dominik}></Image>
                                    </AspectRatio>
                                    <Divider w={'50%'} variant={'solid'} size={'md'} color={"#97856C"} hiddenFrom={'lg'}/>
                                    <Text c={'white'} className={classes.text2}>
                                        Volám sa Dominik a v oblasti barberingu pôsobím už viac ako 5 rokov. Barberské
                                        remeslo pre mňa nie je len prácou ale aj vášňou a koníčkom, čo sa odráža v mojej
                                        precíznosti a dôraze na každý detail.
                                    </Text>
                                </Group>
                                <Stack justify={"center"} align={"center"}>
                                    <Title c={'white'} className={classes.titleRight} size={50}>Sledujte nás</Title>
                                    <a href={'https://www.instagram.com/la_casa_de_barber_nitra?igsh=MTVkZGxkZ3RtNng4Ng=='} target={'_blank'} rel={'noreferrer'}>
                                        <Image src={instaicon} maw={'250px'} className={classes.nondownload}></Image>
                                    </a>
                                    <Image src={qr} maw={'190px'} className={classes.qr} visibleFrom={'md'}></Image>
                                </Stack>
                            </Group>
                        </Stack>
                    )}
                </Transition>
            </div>
        </BackgroundImage>
    );
}
