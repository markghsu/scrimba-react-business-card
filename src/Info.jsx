import React from 'react'
import mainImage from './assets/image.png'
import mail from './assets/mail.svg'
import linkedin from './assets/linkedin.svg'
import LinkButton from './LinkButton'
import "./Info.css"

export default function Info() {
    return (
        <>
            <img src={mainImage} className="info--img" alt="Headshot of Laura Smith" />
            <div className="info--container">
                <h1 className="info--title">Laura Smith</h1>
                <h3 className="info--subtitle">Frontend Developer</h3>
                <a href="#" className="info--link">laurasmith.website</a>
                <div className="info--buttons">
                    <LinkButton
                        icon={mail}
                        text="Email"
                        href="mailto:fake@gmail.com"
                        classNames="primary-btn"
                    />
                    <LinkButton
                        icon={linkedin}
                        text="LinkedIn"
                        href="https://linkedin.com"
                        classNames="secondary-btn"
                    />
                </div>
            </div>
        </>
    )
}