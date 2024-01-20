import React from 'react'
import mainImage from './assets/image.png'
import mail from './assets/mail.svg'
import linkedin from './assets/linkedin.svg'
import LinkButton from './LinkButton'
import "./Info.css"

export default function Info() {
    return (
        <>
            <img src={mainImage} className="info--img" alt="Headshot of Mark Hsu" />
            <div className="info--container">
                <h1 className="info--title">Mark Hsu</h1>
                <h3 className="info--subtitle">Frontend Developer</h3>
                <a href="https://github.com/markghsu" className="info--link">github.com/markghsu</a>
                <div className="info--buttons">
                    <LinkButton
                        icon={mail}
                        text="Email"
                        href="mailto:mark.g.hsu+spam@gmail.com"
                        classNames="primary-btn"
                    />
                    <LinkButton
                        icon={linkedin}
                        text="LinkedIn"
                        href="https://www.linkedin.com/in/markghsu/"
                        classNames="secondary-btn"
                    />
                </div>
            </div>
        </>
    )
}