import {ActionIcon, Transition} from '@mantine/core';
import {useMediaQuery, useWindowScroll} from '@mantine/hooks';
import {IconArrowUp} from '@tabler/icons-react';
import {useEffect, useState} from 'react';
import classes from './ToTopArrow.module.css';

export function BackToTop() {
    const [scroll, scrollTo] = useWindowScroll();
    const [visible, setVisible] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(20); // Default offset for the arrow
    const isLargerThan1024 = useMediaQuery('(min-width: 992px)');

    // Check scroll position to toggle visibility
    useEffect(() => {
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        if (isLargerThan1024) {
            setVisible(scroll.y > 200); // Show when scrolled down more than 200px on large screens

            // Adjust bottom offset when near the footer
            const footerThreshold = documentHeight - windowHeight - 50;
            if (scroll.y >= footerThreshold) {
                setBottomOffset(scroll.y - footerThreshold + 20); // Stop arrow just above footer
            } else {
                setBottomOffset(20); // Normal positioning when not near footer
            }
        } else {
            setVisible(false); // Hide the arrow on smaller screens
        }
    }, [scroll.y, 50, isLargerThan1024]);

    // Scroll to the top handler
    const handleScrollToTop = () => {
        scrollTo({ y: 0 });
    };

    return (
        <Transition
            mounted={visible}
            transition="fade"
            duration={300}
            timingFunction="ease"
        >
            {(styles) => (
                <ActionIcon
                    style={{
                        ...styles,
                        bottom: bottomOffset,
                        position: 'fixed',
                        right: 20,
                    }}
                    variant="filled"
                    radius="xl"
                    size="xl"
                    className={classes.backToTop}
                    onClick={handleScrollToTop}
                    aria-label={"Back to top"}
                >
                    <IconArrowUp size={24} />
                </ActionIcon>
            )}
        </Transition>
    );
}
