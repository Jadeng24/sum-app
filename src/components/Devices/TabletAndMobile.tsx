/* eslint-disable import/prefer-default-export */
import { useMediaQuery } from 'react-responsive';
import { MediaDevices } from './MediaDevices';

export const TabletAndMobile = ({ children }: { children: any }) => {
    const isTabletAndMobile = useMediaQuery({
        maxWidth: MediaDevices.TabletMax,
    });
    return isTabletAndMobile ? children : null;
};
