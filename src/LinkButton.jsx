import React from 'react'
import './LinkButton.css'

export default function ({icon, text, href, classNames}) {
    return (
        <a href={href} className={"link--btn " + classNames}>
            <img className="link--btn--icon" alt="" src={icon} />{text}
        </a>
    )
}