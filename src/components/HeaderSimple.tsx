import { useState } from 'react';
import {rem, Container, Group, Burger, Drawer, Stack} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Image } from '@mantine/core';
import { Button } from '@mantine/core';
import classes from './HeaderSimple.module.css';

const links = [
    { link: '#about', label: 'O Nás' },
    { link: '#pricing', label: 'Cenník' },
    { link: '#gallery', label: 'Galéria' },
    { link: '#contact', label: 'Kontakt' },
];

export function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    // Custom scroll function with offset for moving header
    const scrollToSection = (event, target) => {
        event.preventDefault();
        setActive(target);

        // Get the element to scroll to
        const element = document.querySelector(target);
        const offset = 140; // Fixed offset of 30px

        if (element) {
            // Calculate the scroll position with offset
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            // Smooth scroll to the position
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
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
                <Image
                    className={classes.image}
                    src="src/assets/logo-removebg.png"
                    />
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>


                <Button size="xl" radius="xl" visibleFrom={"md"} mr={100} className={classes.button} >Rezervovať</Button>


                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" pr={rem(50)} />

                <Drawer opened={opened} onClick={toggle} onClose={close} position="right" padding="md" size="100%">
                    <Stack gap="lg">
                        {items}
                    </Stack>
                </Drawer>

            </Container>
        </header>
    );
}