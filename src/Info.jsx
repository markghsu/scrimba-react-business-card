import React from 'react'
import mainImage from './assets/image.png'
import mail from './assets/mail.svg'
import linkedin from './assets/linkedin.svg'
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
                    <a href="mailto:fake@gmail.com" className="info--btn primary-btn">
                        <img className="info--btn--icon" alt="" src={mail} /> Email
                    </a>
                    <a href="https://linkedin.com" className="info--btn secondary-btn">
                        <img className="info--btn--icon" alt="" src={linkedin} /> LinkedIn
                    </a>
                </div>
            </div>
        </>
    )
}