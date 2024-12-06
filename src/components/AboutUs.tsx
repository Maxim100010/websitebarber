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
    Transition,
    useMantineTheme
} from '@mantine/core';
import classes from './AboutUs.module.css';
import {useInView} from "react-intersection-observer";
import {useState, useEffect} from "react";
import {useMediaQuery} from "@mantine/hooks";
import aboutBG from '../assets/aboutBG.jpg'
import instaicon from '../assets/insta.svg'
import dominik from '../assets/rsz_dominik.jpg'
import qr from '../assets/QR.jpg'
import clickme from '../assets/clickme.png'

export function AboutUs() {
    const {ref: firstSectionRef, inView: isFirstSectionInView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const {ref: secondSectionRef, inView: isSecondSectionInView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const [h, setH] = useState<number>(mobile ? 1500 : 1050);
    const [hovered, setHovered] = useState(false);

    const handleHeightChange = () => {
        const firstSection = document.getElementById("stck");
        const secondSection = document.getElementById("group-section");

        if (firstSection && secondSection) {
            const totalHeight = firstSection.scrollHeight + secondSection.scrollHeight;
            console.log(secondSection.scrollHeight);
            setH(totalHeight);
        }
    };

    // Add effect to handle height changes when sections become visible
    useEffect(() => {
        if (isFirstSectionInView || isSecondSectionInView) {
            handleHeightChange();
        }
    }, [isFirstSectionInView, isSecondSectionInView]);

    // Add resize listener
    useEffect(() => {
        window.addEventListener("resize", handleHeightChange);
        return () => window.removeEventListener("resize", handleHeightChange);
    }, []);

    return (
        <BackgroundImage src={aboutBG}>
            <div style={{
                height: `${h}px`,
                transition: 'height 0.5s linear',
                overflow: 'hidden'
            }} ref={firstSectionRef}>
                {/* First Transition */}
                <div>
                    <Transition
                        mounted={isFirstSectionInView}
                        transition="fade-up"
                        duration={1000}
                        timingFunction="ease"
                    >
                        {(styles) => (
                            <Stack style={styles} className={classes.stack} id="stck" onLoad={handleHeightChange}>
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
                                <Center ref={secondSectionRef}><Divider w={'50%'} variant={'solid'} size={'md'} color={"#97856C"}/></Center>
                            </Stack>
                        )}
                    </Transition>
                </div>

                {/* Second Transition */}
                <div>
                    <Transition
                        mounted={isSecondSectionInView}
                        transition="fade-up"
                        duration={1750}
                        timingFunction="ease"
                    >
                        {(styles) => (
                            <Group style={styles} className={classes.innergrp} id={"group-section"} onLoad={handleHeightChange}>
                                <Group className={classes.innerinnergrp}
                                       onMouseEnter={() => setHovered(true)}
                                       onMouseLeave={() => setHovered(false)}
                                       style={{
                                           transform: hovered ? 'scale(1.05)' : 'scale(1)',
                                           transition: 'transform 0.2s ease-out'
                                       }}>
                                    <AspectRatio ratio={5 / 7} maw={350} mah={500}>
                                        <Image src={dominik} className={classes.imagedominik}></Image>
                                    </AspectRatio>
                                    <Divider w={'50%'} variant={'solid'} size={'md'} color={"#97856C"}
                                             hiddenFrom={'lg'}/>
                                    <Text c={'white'} className={classes.text2}>
                                        Volám sa Dominik a v oblasti barberingu pôsobím už viac ako 5 rokov. Barberské
                                        remeslo pre mňa nie je len prácou ale aj vášňou a koníčkom, čo sa odráža v mojej
                                        precíznosti a dôraze na každý detail.
                                    </Text>
                                </Group>
                                <Stack justify={"center"} align={"center"}>
                                    <Title c={'white'} className={classes.titleRight} size={50}>Sledujte nás</Title>
                                    <div style={{position: "relative"}}>
                                        <a href={'https://www.instagram.com/la_casa_de_barber_nitra?igsh=MTVkZGxkZ3RtNng4Ng=='}
                                           target={'_blank'} rel={'noreferrer'}>
                                            <Image src={instaicon} className={classes.insta}></Image>
                                        </a>
                                        <Image src={clickme} className={classes.clickme}></Image>
                                    </div>
                                    <Image src={qr} maw={'190px'} className={classes.qr} visibleFrom={'md'}></Image>
                                </Stack>
                            </Group>
                        )}
                    </Transition>
                </div>
            </div>
        </BackgroundImage>
    );
}