import {Group, ActionIcon, rem, Image} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterCentered.module.css';
import { Text } from '@mantine/core';

export function FooterCentered() {

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Image
                    className={classes.image}
                    src="src/assets/logo-text-removebg.png"
                />

                <Text size={rem(12)}>
                    © 2024 La Casa De Barber
                </Text>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}