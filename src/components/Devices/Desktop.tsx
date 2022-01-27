import { useMediaQuery } from 'react-responsive';
import { MediaDevices } from './MediaDevices';

export const Desktop = ({ children }: { children: any }) => {
	const isDesktop = useMediaQuery({ minWidth: MediaDevices['DesktopMin'] });
	return isDesktop ? children : null;
};
