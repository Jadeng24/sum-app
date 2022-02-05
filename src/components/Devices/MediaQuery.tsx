import { useMediaQuery } from 'react-responsive';
import { MediaDevices } from './MediaDevices';

// Simply Invoke to check screensize
export const isDesktop = () => {
    return useMediaQuery({
        query: `(min-width: ${MediaDevices.DesktopMin}px)`,
    });
};

export const isTabletOrMobile = () => {
    return useMediaQuery({
        query: `(max-width: ${MediaDevices.TabletMax}px)`,
    });
};

export const isMobile = () => {
    return useMediaQuery({
        query: `(max-width: ${MediaDevices.MobileMax}px)`,
    });
};
