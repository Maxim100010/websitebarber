import { useState } from 'react';
import {rem, Container, Group, Burger} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Image } from '@mantine/core';
import { Button } from '@mantine/core';
import classes from './HeaderSimple.module.css';

const links = [
    { link: '/about', label: 'O Nás' },
    { link: '/pricing', label: 'Cenník' },
    { link: '/learn', label: 'Galéria' },
    { link: '/community', label: 'Kontakt' },
];

export function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
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


                <Button variant="gradient" gradient={{from: '#B5826EFF', to: '#b17658', deg: 90}} size="xl" radius="xl" visibleFrom={"md"} mr={100} className={classes.button} >Rezervovať</Button>


                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" pr={rem(50)} />


            </Container>
        </header>
    );
}