/* eslint-disable import/prefer-default-export */
import { useMediaQuery } from 'react-responsive';
import { MediaDevices } from './MediaDevices';

export const Tablet = ({ children }: { children: any }) => {
    const isTablet = useMediaQuery({
        minWidth: MediaDevices.TabletMin,
        maxWidth: MediaDevices.TabletMax,
    });
    return isTablet ? children : null;
};
