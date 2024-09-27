import {Box, rem, Stack, Text} from '@mantine/core';
import {IconAt, IconMapPin, IconPhone, IconSun} from '@tabler/icons-react';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({icon: Icon, title, description, ...others}: ContactIconProps) {
    return (
        <div className={classes.wrapper} {...others}>
            <Box mr="md">
                <Icon style={{width: rem(24), height: rem(24)}}/>
            </Box>

            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

const MOCKDATA = [
    {title: 'Email', description: 'email', icon: IconAt},
    {title: 'Telefón', description: '+421 915 559 476', icon: IconPhone},
    {title: 'Adresa', description: 'Braneckého 1510/15, 949 01 Nitra', icon: IconMapPin},
    {title: 'Otváracia doba', description: 'Po/Str/Pi 9:00-19:00 Ut/Št 8:00-16:00', icon: IconSun},
];

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}