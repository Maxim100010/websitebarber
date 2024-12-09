import {BackgroundImage, Button, Container, Divider, em, Image, Overlay, Text, Transition} from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import {useInView} from "react-intersection-observer";

import bgimg from "../../assets/newhero.png"
import mobilebgimg from "../../assets/mobileherobg.jpeg"
import {useMediaQuery} from "@mantine/hooks";
import whitelogo from "../../assets/logo-text-white.png"


export function HeroContentLeft() {

    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

    const {ref, inView} = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <BackgroundImage src={isMobile? mobilebgimg : bgimg}>
        <div className={classes.hero} ref={ref} role={"main"}>

            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 50%)"
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
                        <Image src={whitelogo} className={classes.image} alt={"Logo la casa de barber"}/>
                        <Text className={classes.subtitle} size="xl" mt="xl">
                            &#34;Pánske holičstvo s vlastnou identitou&#34;
                        </Text>
                        <Divider w={'25%'} variant={'solid'} size={'md'} color={"#97856C"} mt={'md'}/>
                        <Text className={classes.description} size="xl">
                            Štýlové strihy, precízne holenie a jedinečný zážitok pre každého gentlemana
                        </Text>
                        <a href={"https://booqme.sk/sk/rezervacia/la-casa-de-barber"}>
                            <Button size="xl" radius="xl" className={classes.control}>
                                <Text className={classes.buttonText}>Rezervovať</Text>
                            </Button>
                        </a>
                    </Container>
                )}
            </Transition>

        </div>
        </BackgroundImage>
    );
}