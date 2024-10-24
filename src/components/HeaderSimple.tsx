import { MouseEvent, useState } from 'react';
import { Burger, Button, Container, Drawer, em, Group, Image, rem, Stack, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';

import logoremovebg from '../assets/logo-removebg.png';

const links = [
    { link: '#about', label: 'O Nás' },
    { link: '#pricing', label: 'Cenník' },
    { link: '#gallery', label: 'Galéria' },
    { link: '#contact', label: 'Kontakt' },
];

export function HeaderSimple() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

    // Custom scroll function with offset for moving header
    const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
        event.preventDefault();
        setActive(target);

        // Special case for scrolling to the top (image click)
        if (target === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            return;
        }

        // Get the element to scroll to
        const element = document.querySelector(target);
        const offset = isMobile ? 80 : 120;

        if (element) {
            // Calculate the scroll position with offset
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            // Smooth scroll to the position
            window.scrollTo({
                top: offsetPosition,
                behavior: isMobile ? 'instant' : 'smooth',
            });
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
        <header className={classes.header}>
            <Container fluid className={classes.inner}>
                {/* Image scroll to top */}
                <a href="#" onClick={(event) => scrollToSection(event, '#')}>
                    <Image
                        className={classes.image}
                        src={logoremovebg}
                    />
                </a>
                <Group gap={5} visibleFrom="md">
                    {items}
                </Group>

                <Button size="xl" radius="xl" visibleFrom={"md"} className={classes.button}>
                    <Text className={classes.buttonText}>Rezervovať</Text>
                </Button>

                <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" pr={rem(50)} />

                <Drawer opened={opened} onClick={toggle} onClose={close} position="right" padding="md" size="100%">
                    <Stack gap="lg">
                        {items}
                        <a className={classes.link} data-active={undefined}>
                            {'Rezervácia'}
                        </a>
                    </Stack>
                </Drawer>
            </Container>
        </header>
    );
}
