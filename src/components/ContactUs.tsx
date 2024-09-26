import {
    Title,
    Text,
    Group,
    Transition, AspectRatio, Stack
} from '@mantine/core';
import classes from './ContactUs.module.css';
import {useInView} from "react-intersection-observer";
import {ContactIconsList} from "./ContactIcons.tsx";

export function ContactUs() {

    const { ref, inView } = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
            <div className={classes.div} ref={ref}>
                <Transition
                    mounted={inView} // Only show the stack when visible
                    transition="fade-up"
                    duration={1000}
                    timingFunction="ease"
                >
                    {(styles) => (
                        <Group className={classes.grp} style={styles}>
                            <div>
                                <Title className={classes.title}>Kontakt</Title>

                                <ContactIconsList/>

                            </div>
                            <Stack className={classes.stack}>
                                <Title className={classes.titleRight}>Kde nás nájdete</Title>
                                <div style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                }}>
                                    <AspectRatio ratio={16 / 9}
                                                 style={{width:"100%"}}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.710843911014!2d18.071131876843214!3d48.3084124392519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3f5b37e79345%3A0x110db96a046a2ad4!2sLa%20Casa%20de%20Barber!5e0!3m2!1ssk!2snl!4v1727196235105!5m2!1ssk!2snl"
                                            title="Google map"
                                            style={{border: 0}}
                                        />
                                    </AspectRatio>
                                    </div>
                            </Stack>
                        </Group>
                        )}
                </Transition>
            </div>
);
}