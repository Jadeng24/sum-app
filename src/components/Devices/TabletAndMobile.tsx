import { useMediaQuery } from 'react-responsive';

export const TabletAndMobile = ({ children }: { children: any }) => {
	const isTabletAndMobile = useMediaQuery({ maxWidth: 991 });
	return isTabletAndMobile ? children : null;
};
