import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }: { children: any }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};
