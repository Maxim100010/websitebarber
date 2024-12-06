import { Burger, Drawer, Stack } from '@mantine/core';
import classes from './ScrollBurger.module.css';
import headerclasses from './HeaderSimple.module.css';
import {useEffect, useState} from "react";
import {useDisclosure} from "@mantine/hooks";

const links = [
    { link: '#about', label: 'O Nás' },
    { link: '#pricing', label: 'Cenník' },
    { link: '#gallery', label: 'Galéria' },
    { link: '#contact', label: 'Kontakt' },
];

export function ScrollBurger() {
    const [scrolled, setScrolled] = useState(false);
    const [opened, { toggle, close }] = useDisclosure(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Show burger when scrolled 50px from the top
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Burger color={"black"} opened={opened} onClick={toggle} hiddenFrom="md" size="md" lineSize={3} className={`${classes.scrollBurger} ${scrolled ? classes.visible : ''}`} />
            <Drawer opened={opened} onClick={toggle} onClose={close} position="right" padding="md" size="100%">
                <Stack gap="lg">
                    {links.map((link) => (
                        <a key={link.label} href={link.link} onClick={close} className={headerclasses.link}>
                            {link.label}
                        </a>
                    ))}
                    <a className={headerclasses.link}>Rezervácia</a>
                </Stack>
            </Drawer>
        </>
    );
}
