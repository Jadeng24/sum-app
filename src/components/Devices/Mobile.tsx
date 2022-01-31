import { useMediaQuery } from 'react-responsive'
import { MediaDevices } from './MediaDevices'

export const Mobile = ({ children }: { children: any }) => {
    const isMobile = useMediaQuery({ maxWidth: MediaDevices['MobileMax'] })
    return isMobile ? children : null
}
