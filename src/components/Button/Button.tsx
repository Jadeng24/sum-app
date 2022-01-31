import React from 'react'
import { Link } from 'react-router-dom'

import './Button.scss'

interface ButtonProps {
    text: string
    link: string
    secondary?: boolean
}
const Button = (props: ButtonProps) => {
    const { text, link, secondary } = props
    return (
        <div>
            <Link
                className={`Button ${secondary ? 'secondary' : ''} `}
                to={`/${link}`}
            >
                {text}
            </Link>
        </div>
    )
}

export default Button
