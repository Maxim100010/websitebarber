import {MouseEvent, useEffect, useState} from 'react';
import {Burger, Button, Container, Drawer, Group, Image, rem, Stack, Text} from '@mantine/core';
import {useDisclosure, useMediaQuery} from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import logoremovebg from '../../assets/logo-removebg.png';
import removebglogo from '../../assets/logo-text-removebg.png'

const links = [
    { link: '#about', label: 'O Nás' },
    { link: '#pricing', label: 'Cenník' },
    { link: '#gallery', label: 'Galéria' },
    { link: '#contact', label: 'Kontakt' },
];

export function HeaderSimple() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const isMobile = useMediaQuery(`(max-width: 991px)`);
    const [isHeaderVisible, setHeaderVisible] = useState(true);
    const [isHeaderShrunk, setHeaderShrunk] = useState(false);

    // Track scroll position and apply either hiding or shrinking effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                if (isMobile) {
                    setHeaderVisible(false);
                } else {
                    setHeaderShrunk(true);
                }
            } else {
                setHeaderVisible(true);
                setHeaderShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
        event.preventDefault();
        setActive(target);

        if (target === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.querySelector(target);
        const offset = isMobile ? 80 : 120;

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: isMobile ? 'instant' : 'smooth' });
        }
    };

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => scrollToSection(event, link.link)}
        >
            {link.label}
        </a>
    ));

    return (
        <header
            className={`${classes.header} ${!isHeaderVisible && isMobile ? classes.hidden : ''} ${
                isHeaderShrunk && !isMobile ? classes.shrunk : ''
            }`}
        >
            <Container fluid className={`${classes.inner} ${isHeaderShrunk ? classes.shrunk : ''}`}>
                <a href="#" onClick={(event) => scrollToSection(event, '#')}>
                    <Image className={isHeaderShrunk ? classes.opacity : classes.imagefull}
                           src={logoremovebg} alt={"Logo la casa de barber originalne"}/>
                    <Image className={isHeaderShrunk ? classes.imagelogo : classes.opacity}
                           src={removebglogo} alt={"Logo la casa de barber alternatívne"}/>
                </a>
                <Group gap={5} visibleFrom="md" className={isHeaderShrunk ? classes.grpshrunk : classes.grp}>
                    {items}
                </Group>
                <a href={"https://booqme.sk/sk/rezervacia/la-casa-de-barber"}>
                    <Button size={isHeaderShrunk ? "md" : "xl"} radius="xl" visibleFrom="md"
                            className={`${classes.button} ${isHeaderShrunk ? classes.shrunk : ''}`}>
                        <Text
                            className={`${classes.buttonText} ${isHeaderShrunk ? classes.shrunk : ''}`}>Rezervovať</Text>
                    </Button>
                </a>
                <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" pr={rem(50)}/>
                <Drawer opened={opened} onClick={toggle} onClose={close} position="right" padding="md" size="100%">
                    <Stack gap="lg">
                        {items}
                        <a className={classes.link} data-active={undefined} href={"https://booqme.sk/sk/rezervacia/la-casa-de-barber"}>
                            {'Rezervácia'}
                        </a>
                    </Stack>
                </Drawer>
            </Container>
        </header>
    );
}
