import {ActionIcon, Group, Image, rem, Text} from '@mantine/core';
import {IconBrandInstagram} from '@tabler/icons-react';
import classes from './FooterCentered.module.css';

import footerlogo from '../assets/logo-text-removebg.png'

export function FooterCentered() {

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Image
                    className={classes.image}
                    src={footerlogo}
                />

                <Text size={rem(12)} className={classes.text}>
                    © 2024 La Casa De Barber
                </Text>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}